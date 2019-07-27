import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from 'src/app/services/leagues.service';

@Component({
  selector: 'cl-league',
  templateUrl: './league.view.html',
  styleUrls: ['./league.view.scss']
})
export class LeagueView implements OnInit {

  private routeId: Subscription;
  private ID: string;

  constructor(
    private route: ActivatedRoute,
    private _leagueService: LeaguesService,
  ) { }

  league: any;
  teamArray: any[];

  ngOnInit() {
    this.routeId = this.route.params.subscribe(params => {
      this.ID = params['id'].toString();
      //console.log(this.ID);
    })

    this.league = this._leagueService.getLeague(this.ID)
    .subscribe(league => this.league = league);

    this._leagueService.getTeams(this.ID)
    .subscribe(teams => this.teamArray = teams);

  }

  dataSource = this.teamArray;
  displayedColumns: string[] = ['id', 'name']; //, 'name', 'weight', 'symbol'



}
