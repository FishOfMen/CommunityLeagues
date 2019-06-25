import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesView } from './leagues.view';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const LEAGUES_ROUTES: Routes = [
  { path: '', component: LeaguesView}
];


@NgModule({
  declarations: [
    LeaguesView
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LEAGUES_ROUTES)
  ]
})
export class LeaguesModule { }
