import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserProvider, Eip1193Provider, JsonRpcSigner } from 'ethers';
import moment from 'moment';
import Web3 from 'web3';
import { isAddress } from 'web3-validator';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  signer?: JsonRpcSigner;
  provider?: Eip1193Provider;
  constructor(private router: Router) {}
  activeIndex: number = 1;
  formatDate(date: Date): string {
    let format = moment(date);
    var d = format.format('DD/MM/YY');
    return d == 'Invalid date' ? '--' : d;
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  NavigateTo(page: string) {
    this.router.navigate([page]);
  }

  currentPage(): string {
    return this.router.url;
  }

  navigateToReplace(page: string) {
    try {
      this.router
        .navigate([page], {
          replaceUrl: true,
        })
        .then((x) => {
          console.log('realoading');
          window.location.reload();
        })
        .catch((x) => {
          console.log(x);
        });
    } catch (ex) {
      console.log(ex);
    }
  }

  convertToGb(size?: number) {
    if (size == null) return 0;

    return size / 1024;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  formatLocalDate(date: Date) {
    // Formatting options
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };

    // Format the date
    const formattedDate = date.toLocaleDateString('en-GB', options);
    return formattedDate;
  }

  formatCurrencyStr(value: string): string {
    if (value == '') return '$ 0';
    const numberValue = parseFloat(value);

    if (!isNaN(numberValue)) {
      return numberValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      return '$ 0';
    }
  }

  isValidETHAddress(address: string): boolean {
    return isAddress(address);
  }

  async setSigner(provider: Eip1193Provider, account: string) {
    const ethersProvider = new BrowserProvider(provider);

    // Find the index of the account you want to use
    const accounts = await ethersProvider.listAccounts();
    const accountIndex = accounts.findIndex((acc) => {
      return acc.address.toLowerCase() === account.toLowerCase();
    });

    if (accountIndex === -1) {
      throw new Error('Specified account not found in the connected accounts');
    }

    // Get the signer for the specific account
    this.signer = await ethersProvider.getSigner(accountIndex);
  }
}
