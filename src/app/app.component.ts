import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  private loggedInSubscription: Subscription;

  _loggedIn: boolean;

  constructor(
    private router: Router,
    private _authService: AuthService,
  ) {
    this.loggedInSubscription = this._authService.loggedIn$.subscribe(loggedIn => {
      this._loggedIn = loggedIn;
      if (!this._loggedIn) {
        // Maybe this should navigate to login?
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

  _logout() {
    this._authService.logout();
  }
}
