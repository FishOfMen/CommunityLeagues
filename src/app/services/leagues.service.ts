import { AuthService } from 'src/app/services/auth.service';
import { Observable, of, pipe } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BASE_API_ROUTE } from '../core/tokens';
import {  map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Pusher from 'pusher-js';

declare const Websocket: Pusher;

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leagues_route: string;
  private create_league_route: string;

  private websocket: Pusher;


  channel: any;

  constructor(
    private http: HttpClient,
    private _auth_service: AuthService,
    @Inject(BASE_API_ROUTE) private base_api_route
  ) {
    this.leagues_route = `${this.base_api_route}/league/leagues`;
    this.create_league_route = `${this.base_api_route}/league/create`;
    this.websocket = new Pusher(environment.websocket.key, {
      cluster: environment.websocket.cluster,
      encrypted: false,
      wsHost: '127.0.0.1',
      wsPort: '6001',
    });
    this.channel = this.websocket.subscribe('leagues');
  }

  createLeague(name: string, address: string, city: string, state: string, zip: string, description: string, sport_id: string): Observable<any> {
    let options = { headers: new HttpHeaders({
      'Content-Type' :  'application/json',
      'Authorization' : 'Bearer ' + this._auth_service.getToken()
    }) }

    return this.http.post(this.create_league_route, {
      name,
      address,
      city,
      state,
      zip,
      description,
      sport_id,

    }, options);
  }

  getLeagues(): Observable<any> {

    let options = { headers: new HttpHeaders({
      'Content-Type' :  'application/json',
      'X-Requested-With' : 'XMLHttpRequest'
    }) }

    return this.http.get(this.leagues_route)
      .pipe(
        tap(league => console.log(league))
      );


  }
}
