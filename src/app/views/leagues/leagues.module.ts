import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesView } from './leagues.view';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LeagueCardView } from './league-card/league-card.view';
import { LeagueView } from './league/league.view';
import { CreateLeagueView } from './create-league/create-league.view';


const LEAGUES_ROUTES: Routes = [
  { path: '', component: LeaguesView },
  { path: 'create', component: CreateLeagueView },
  { path: 'leagues/league/:id', component: LeagueView}
];

@NgModule({
  declarations: [
    LeaguesView,
    LeagueCardView,
    LeagueView,
    CreateLeagueView
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LEAGUES_ROUTES)
  ]
})

export class LeaguesModule {

}
