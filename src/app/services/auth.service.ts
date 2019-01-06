import { Injectable, OnDestroy, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CanActivate } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BASE_API_ROUTE } from '../core/tokens';

const AUTH_TOKEN = 'CL_AUTH_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, OnDestroy {

  private auth_login_route: string;
  private auth_signup_route: string;

  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken);
  private rememberMe = false;

  get loggedIn$(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
  set loggedIn(val: boolean) {
    this.loggedInSubject.next(val);
  }

  get hasToken() {
    return this.getToken() ? true : false;
  }

  constructor(
    private http: HttpClient,
    @Inject(BASE_API_ROUTE) private base_api_route,
  ) { 
    this.auth_login_route = `${this.base_api_route}/auth/login`;
    this.auth_signup_route = `${this.base_api_route}/auth/signup`;
  }

  canActivate() {
    return this.loggedIn$;
  }

  login(email: string, password: string, remember_me = false): Observable<any> {
    this.rememberMe = remember_me;
    return this.http.post(this.auth_login_route, {
      email,
      password,
      remember_me,
    });
  }

  logout() {
    this.loggedInSubject.next(false);
    if (!this.rememberMe) {
      this.removeToken();
    }
  }

  signup(email: string, password: string, password_confirmation: string) {
    return this.http.post<HttpResponse<any>>(this.auth_signup_route, {
      email,
      password,
      password_confirmation,
    });
  }

  getToken(): string | undefined {
    return localStorage.getItem(AUTH_TOKEN);
  }

  storeToken(token: string): void {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN);
  }

  ngOnDestroy() {
    this.logout();
  }

}
