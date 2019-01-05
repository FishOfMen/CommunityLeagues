import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginView } from './login.view';

const LOGIN_ROUTES: Routes = [
  { path: '', component: LoginView },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(LOGIN_ROUTES),
  ],
  declarations: [
    LoginView,
  ]
})
export class LoginModule { }
