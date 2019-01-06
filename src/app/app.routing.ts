import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const BASE_ROUTES: Routes = [
    { path: '', loadChildren: './views/home/home.module#HomeModule' },
    { path: 'login', loadChildren: './views/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './views/signup/signup.module#SignupModule' },
    {
      path: 'dashboard',
      loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthService],

    },
    { path: '**', redirectTo: '' },
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(BASE_ROUTES),
    ],
    exports: [
        RouterModule,
    ],
})
export class RoutingModule {}
