import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AuthRequest } from '../models/auth-request';
import { AuthSuccess } from '../models/auth-success';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class FaucetService {
  headers?: HttpHeaders;
  constructor(private httpClient: HttpClient) {}

  getAuthToken() {
    let tokenData = localStorage.getItem('id_token');
    if (tokenData == null) return;

    this.headers = new HttpHeaders({
      Authorization: `Bearer ${tokenData}`,
    });
  }

  async get(account: string): Promise<AuthRequest> {
    let serialize = JSON.stringify({
      Key: account,
      Timestamp: new Date(),
    });

    let request = this.httpClient.post<AuthRequest>(
      'v1/authentication/begin',
      serialize
    );

    let result = await lastValueFrom(request);
    return result;
  }

  async finish(signature: string, id: string): Promise<boolean> {
    try {
      let request = this.httpClient.post<string>(
        'v1/authentication/finish',
        JSON.stringify({
          signature: signature,
          id: id,
        })
      );

      let result = await lastValueFrom(request);
      this.setAuthenticationToken(result);
      return true;
    } catch {
      return false;
    }
  }

  setAuthenticationToken(authResult: string) {
    localStorage.removeItem('mfa_token');
    localStorage.setItem('id_token', authResult);
  }

  async getNextDrip(): Promise<Date | null> {
    try {
      this.getAuthToken();
      let request = this.httpClient.get<Date>('v1/accounts/get-drip', {
        headers: this.headers,
      });

      let result = await lastValueFrom(request);
      return result;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  async drip(): Promise<string> {
    try {
      this.getAuthToken();
      let request = this.httpClient.get<string>('v1/accounts/drip', {
        headers: this.headers,
      });

      let result = await lastValueFrom(request);
      return result;
    } catch (ex) {
      console.log(ex);
      return '';
    }
  }
}
