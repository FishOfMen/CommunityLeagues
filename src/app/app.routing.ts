import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const BASE_ROUTES: Routes = [
    { path: '', loadChildren: './views/home/home.module#HomeModule' },
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
