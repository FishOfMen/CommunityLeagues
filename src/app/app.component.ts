import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', {static: false})
  sidenav?: MatSidenav;

  _loggedIn$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
  ) {
    this._loggedIn$ = this._authService.loggedIn$;
  }

  ngOnInit() {}

  _logout() {
    this._authService.logout();
  }
}
