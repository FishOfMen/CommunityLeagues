import { NgModule } from '@angular/core';
import { HomeView } from './home.view';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const HOME_ROUTES: Routes = [
  { path: '', component: HomeView },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HOME_ROUTES),
  ],
  declarations: [
    HomeView
  ],
})
export class HomeModule { }
