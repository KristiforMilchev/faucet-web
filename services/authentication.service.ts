import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment, { Moment } from 'moment';
import { AuthSuccess } from '../models/auth-success';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { BrowserProvider, Eip1193Provider } from 'ethers';
import { Web3Modal } from '@web3modal/ethers';
import { EthersStoreUtilState } from '@web3modal/scaffold-utils/ethers';
import { UtilsService } from '../helpers/utils';
import { stringify } from 'flatted';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  apiPath: string = 'v1';
  signedInAccount?: string;
  projectId = process.env['WalletConnect'] || 'UNDEFINED';
  provider?: Eip1193Provider;
  private modal?: Web3Modal;
  metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/'],
  };

  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    const mainnet = {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://cloudflare-eth.com',
    };

    const testnet = {
      chainId: 1337,
      name: 'Shadowkeep',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://rpc.blockcert.net',
    };

    const ethersConfig = defaultConfig({
      metadata: this.metadata,
      enableEIP6963: true,
      enableInjected: true,
      enableCoinbase: true,
      rpcUrl: '...',
      defaultChainId: 1,
    });

    this.modal = createWeb3Modal({
      ethersConfig,
      chains: [mainnet, testnet],
      projectId: this.projectId,
      enableAnalytics: false,
    });

    this.modal.subscribeEvents((n) => this.actionHappened(n));
    this.modal.subscribeProvider((p) => this.providerChanged(p));
  }

  async requestWalletUnlock(): Promise<string | undefined> {
    if (!this.provider) {
      console.error('No Ethereum provider found');
      return undefined;
    }

    try {
      // Request accounts from the provider (will prompt user to unlock wallet)
      const accounts = await this.provider.request({
        method: 'eth_requestAccounts',
      });

      if (accounts && accounts.length > 0) {
        console.log('Wallet unlocked, account:', accounts[0]);
        return accounts[0];
      } else {
        console.log('Wallet is still locked or no accounts found.');
        return undefined;
      }
    } catch (error) {
      console.error('Failed to unlock wallet:', error);
      return undefined;
    }
  }
  async connect() {
    if (this.modal == null) return;

    await this.modal.open();
    if (!this.modal.getIsConnected()) return;
  }

  actionHappened(actionHappened: any) {
    console.log(actionHappened);
  }

  async providerChanged(p: EthersStoreUtilState) {
    console.log(p);

    let page = this.utils.currentPage();
    console.log(page);
    console.log(p.isConnected);

    if (p.isConnected && this.provider == null) {
      this.provider = p.provider;
      await this.utils.setSigner(this.provider!, p.address!);
      this.signedInAccount = p.address;
    }
  }

  stateChanged(state: any): void {
    console.log(state);
  }

  setAuthenticationToken(authResult: AuthSuccess) {
    localStorage.removeItem('mfa_token');
    localStorage.removeItem('expires_at');

    const expiresAt = authResult.expires_at;
    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem('id_expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    this.signedInAccount = undefined;
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.modal?.disconnect();
  }

  public isLoggedIn(): boolean {
    let connected = localStorage.getItem('id_token');
    if (connected != undefined && connected != '') {
      return true;
    }

    return false;
  }

  getExpiration(): Moment | null {
    const expiration = localStorage.getItem('id_expires_at');
    if (expiration == null) return null;

    const expiresAt = new Date(parseInt(expiration) * 1000);
    return moment(expiresAt);
  }

  public getToken(): HttpHeaders | undefined {
    let token = localStorage.getItem('id_token');
    if (token == null) return undefined;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return headers;
  }

  mfaTokenPresent(): boolean {
    let token = localStorage.getItem('mfa_token');
    if (token == null) return false;

    return true;
  }

  async getSigninQrCode() {
    // const { uri } = await this.modal.connect({
    //   requiredNamespaces: {

    //     eip155: {
    //       methods: [
    //         'personal_sign',
    //         'eth_sendTransaction',
    //         'eth_signTypedData',
    //       ],
    //       chains: ['eip155:1'],
    //       events: [],
    //     },
    //   },
    // });

    return 'TBD';
  }

  async sign(data: string): Promise<string> {
    try {
      return await this.utils.signer!.signMessage(data);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      return '';
    }
  }

  async getConnectedAddress(
    provider: Eip1193Provider
  ): Promise<string | undefined> {
    if (window.ethereum) {
      try {
        const accounts = await provider.request({
          method: 'eth_requestAccounts',
        });

        if (accounts && accounts.length > 0) {
          return accounts[0];
        } else {
          console.log('No accounts found.');
          return undefined;
        }
      } catch (error) {
        console.error('Failed to get connected address:', error);
        return undefined;
      }
    } else {
      console.error('Ethereum provider not found');
      return undefined;
    }
  }
}
