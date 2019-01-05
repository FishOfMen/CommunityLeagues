import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cl-signup',
  templateUrl: './signup.view.html',
  styleUrls: ['./signup.view.scss']
})
export class SignupView implements OnInit, OnDestroy {

  private confirmPasswordSubscription: Subscription = Subscription.EMPTY;
  _isMobile$: Observable<boolean>;
  _errorMessage?: string;

  signUpForm: FormGroup = new FormGroup({
    'email': new FormControl(undefined, [
      Validators.required,
      Validators.email,
    ]),
    'password': new FormControl(undefined, [
      Validators.required,
      Validators.minLength(7),
    ]),
    'confirmPassword': new FormControl(undefined, [
      Validators.required,
      Validators.minLength(7),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.confirmPasswordSubscription = this.signUpForm.get('confirmPassword').valueChanges
    .subscribe((value) => {
      if (value !== this.signUpForm.get('password').value) {
        this.signUpForm.get('confirmPassword').setErrors({});
      }
    });
  }

  ngOnDestroy() {
    this.confirmPasswordSubscription.unsubscribe();
  }

  _join() {
    if (this.signUpForm.valid) {
      this.authService.signup(
        this.signUpForm.get('email').value,
        this.signUpForm.get('password').value,
        this.signUpForm.get('confirmPassword').value,
      ).subscribe(
        (response) => {
          this._errorMessage = undefined;
          this.router.navigate(['login']);
        },
        (err: HttpErrorResponse) => {
          switch(err.status) {
            case 422:
            this._errorMessage = 'An account already exists with this email.';
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