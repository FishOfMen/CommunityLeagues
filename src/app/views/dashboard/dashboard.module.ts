import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardView } from './dashboard.view';
import { UpcomingGamesComponent } from './widgets/upcoming-games/upcoming-games.component';
import { UserLeaguesComponent } from './widgets/user-leagues/user-leagues.component';

const HOME_ROUTES: Routes = [
  { path: '', component: DashboardView },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HOME_ROUTES),
  ],
  declarations: [
    DashboardView,
    UpcomingGamesComponent,
    UserLeaguesComponent
  ],
})
export class DashboardModule { }
