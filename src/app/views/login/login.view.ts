import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cl-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView implements OnInit {

  _errorMessage?: string;

  _loginForm = new FormGroup({
    'email': new FormControl(undefined, [
      Validators.required,
      Validators.email,
    ]),
    'password': new FormControl(undefined, [
      Validators.required,
      Validators.minLength(7),
    ]),
    'remember-me': new FormControl(false),
  });

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  _login() {
    if (this._loginForm.valid) {
      this._authService.login(
        this._loginForm.get('email').value,
        this._loginForm.get('password').value,
        this._loginForm.get('remember-me').value,
      ).subscribe(
        (response) => {
          this._errorMessage = undefined;
          this._authService.storeToken(response.access_token);
          this._authService.loggedIn = true;
          this._router.navigate(['']);
        },
        (err: HttpErrorResponse) => {
          switch(err.status) {
            case 401:
            this._errorMessage = 'Invalid login credentials.';
              break;
            case 500:
            this._errorMessage = 'Oops! Looks like something went wrong. Please try again later.';
              break;
          }
        }
      );
    }
  }

}