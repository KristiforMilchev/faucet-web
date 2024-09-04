import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-account-menu',
  standalone: true,
  imports: [MatMenuModule, MatToolbarModule, MatRippleModule],
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.css',
})
export class AccountMenuComponent {
  walletAddress = '';
  color: string = '#cfacd4be;';

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    const checkInterval = setInterval(async () => {
      if (this.authService.provider != undefined) {
        clearInterval(checkInterval);
        let wallet = await this.authService.getConnectedAddress(
          this.authService.provider!
        );
        this.walletAddress = wallet!;
      }
    }, 100);
  }

  getShortenedAddress(address: string): string {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  signOut() {
    this.authService.logout();
    window.location.reload();
  }
}
