import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  authTokenInterceptor,
  urlInterceptor,
} from '../../interceptors/api-interceptor.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FooterComponent } from '../components/footer/footer.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    NgApexchartsModule,
    provideHttpClient(withInterceptors([urlInterceptor, authTokenInterceptor])),
    provideAnimationsAsync(),
  ],
};
