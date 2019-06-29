import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LeaguesService } from './../../services/leagues.service';


@Component({
  selector: 'cl-leagues',
  templateUrl: './leagues.view.html',
  styleUrls: ['./leagues.view.scss']
})
export class LeaguesView implements OnInit {

  constructor(
    private _leaguesService: LeaguesService,
  ) { }

  leagues: any[];

  ngOnInit() {
    this._leaguesService.getLeagues()
      .subscribe(leagues => this.leagues = leagues);
  }

}
