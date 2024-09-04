import { FaucetService } from './../../../services/faucet.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Eip1193Provider } from 'ethers';
import { AuthSuccess } from '../../../models/auth-success';
import moment from 'moment';
import { AccountMenuComponent } from '../../components/account-menu/account-menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    CommonModule,
    AccountMenuComponent,
    FooterComponent,
    MatButtonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isWalletConnected = false;
  isLoggedIn = false;
  faucetDripAmount = 100;
  nextDripTime = '12:00 PM';

  canDrip: boolean = false;
  txResult?: string;
  constructor(
    private authService: AuthenticationService,
    private faucetService: FaucetService
  ) {}

  ngOnInit() {
    let loggedIn = this.authService.isLoggedIn();
    if (!loggedIn) {
      const checkInterval = setInterval(async () => {
        if (this.authService.provider != undefined) {
          clearInterval(checkInterval);
          this.isLoggedIn = false;
          this.isWalletConnected = true;
        }
      }, 100);
    } else {
      this.isWalletConnected = true;
      this.isLoggedIn = true;
      this.authService;
      this.checkDrip().then();
    }
  }

  async attemptLogin() {
    let address = await this.authService.getConnectedAddress(
      this.authService.provider!
    );
    let authData = await this.faucetService.get(address!);
    let signature = await this.authService.sign(authData.Code);
    this.isLoggedIn = await this.faucetService.finish(signature, authData.Uuid);

    if (!this.isLoggedIn) {
      return;
    }

    await this.checkDrip();
  }

  async checkDrip() {
    try {
      let nextDrip = await this.faucetService.getNextDrip();
      if (nextDrip == null) {
        this.nextDripTime = 'Error fetching time, service offline!';
        this.canDrip = false;
        return;
      }

      const nextDripDate = new Date(nextDrip);
      this.nextDripTime = moment(nextDrip).format('YYYY-MM-DD HH:mm');
      const now = new Date();
      this.canDrip = now > nextDripDate;
    } catch (ex) {
      this.canDrip = false;
      console.log('Error in checkDrip:', ex);
    }
  }

  async requestCurrency() {
    let result = await this.faucetService.drip();
    this.txResult = result;
    let nextDrip = await this.faucetService.getNextDrip();
    this.nextDripTime = moment(nextDrip).format('YYYY-MM-DD HH:mm');
    this.canDrip = false;
  }

  async connectWallet() {
    await this.authService.connect();
  }
}
