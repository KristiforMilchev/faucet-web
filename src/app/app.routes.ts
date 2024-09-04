import { Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { DashboardComponent } from '../views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

function authenticationGuard(): boolean {
  let authService = inject(AuthenticationService);
  let router = inject(Router);
  var loggedIn = authService.isLoggedIn();
  if (!loggedIn) {
    return false;
  }

  return true;
}
