import { LeaguesService } from './../../../services/leagues.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cl-create-league',
  templateUrl: './create-league.view.html',
  styleUrls: ['./create-league.view.scss']
})
export class CreateLeagueView implements OnInit {

  _errorMessage?: string;

  _createLeagueForm = new FormGroup({
    'name': new FormControl(undefined, [
      Validators.required,
    ]),
    'address': new FormControl(undefined, [
      Validators.required,
    ]),
    'city': new FormControl(undefined, [
      Validators.required,
    ]),
    'state': new FormControl(undefined, [
      Validators.required,
    ]),
    'zip': new FormControl(undefined, [
      Validators.required,
    ]),
    'description': new FormControl(undefined, [
      Validators.required,
    ]),
  })

  constructor(
    private _authService: AuthService,
    private _leaguesService: LeaguesService,
    private _router: Router,
    private http: HttpClient,
  ) {  }

  ngOnInit() {
  }

  _creatLeage() {
    if (this._authService.loggedIn$ && this._createLeagueForm.valid){
      this._leaguesService.createLeague(
        this._createLeagueForm.get('name').value,
        this._createLeagueForm.get('address').value,
        this._createLeagueForm.get('city').value,
        this._createLeagueForm.get('state').value,
        this._createLeagueForm.get('zip').value,
        this._createLeagueForm.get('description').value,
        "1"
      ).subscribe(
        (response) => {
          this._errorMessage = undefined;
          console.log(response);
          this._router.navigate(['leagues']);
        },
        (err: HttpErrorResponse) => {
          switch(err.status) {
            case 401:
              this._errorMessage = 'Not authorized to create a league';
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
