import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesView } from './leagues.view';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LeagueCardView } from './league-card/league-card.view';
import { LeagueView } from './league/league.view';

const LEAGUES_ROUTES: Routes = [
  { path: '', component: LeaguesView}
];


@NgModule({
  declarations: [
    LeaguesView,
    LeagueCardView,
    LeagueView
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LEAGUES_ROUTES)
  ]
})
export class LeaguesModule { }
