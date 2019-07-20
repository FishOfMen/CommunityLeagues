import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LeaguesService } from './../../services/leagues.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'cl-leagues',
  templateUrl: './leagues.view.html',
  styleUrls: ['./leagues.view.scss']
})
export class LeaguesView implements OnInit {

  constructor(
    private _leaguesService: LeaguesService,
    private _websocketService: WebsocketService
  ) { }

  leagues: any[];

  ngOnInit() {
    this._leaguesService.getLeagues()
      .subscribe(leagues => this.leagues = leagues);

    this._websocketService.subscribeToChannel('leagues', ['NewLeague'], (data) => {
      this.leagues.unshift(data);
    })
  }

}
