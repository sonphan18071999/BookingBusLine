import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string | null = null;
  private readonly REFRESH_TOKEN_KEY = 'refresh-token';
  private readonly API_URL = 'https://your-api-url.com'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return this.accessToken;
  }

  setToken(token: string): void {
    this.accessToken = token;
  }

  removeToken(): void {
    this.accessToken = null;
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      throw new Error('Refresh token not available');
    }

    return this.http.post<any>(`${this.API_URL}/refresh-token`, { refreshToken });
  }

  logout(): void {
    this.removeToken();
    this.removeRefreshToken();
  }
}
