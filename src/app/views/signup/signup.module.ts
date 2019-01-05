import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupView } from './signup.view';

const SIGNUP_ROUTES: Routes = [
  { path: '', component: SignupView },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(SIGNUP_ROUTES),
  ],
  declarations: [
    SignupView,
  ]
})
export class SignupModule { }
