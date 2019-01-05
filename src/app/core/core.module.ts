import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BASE_API_ROUTE } from './tokens';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: BASE_API_ROUTE, useValue: environment.api_endpoint },
  ],
  declarations: []
})
export class CoreModule { }
