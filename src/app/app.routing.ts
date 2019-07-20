import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const BASE_ROUTES: Routes = [
    { path: '', loadChildren: './views/home/home.module#HomeModule' },
    { path: 'login', loadChildren: './views/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './views/signup/signup.module#SignupModule' },
    { path: 'leagues', loadChildren: './views/leagues/leagues.module#LeaguesModule' },
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
