import { AuthService } from 'src/app/services/auth.service';
import { Observable, of, pipe } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BASE_API_ROUTE } from '../core/tokens';
import {  map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leagues_route: string;
  private create_league_route: string;
  private get_league_route: string;

  private options = { headers: new HttpHeaders({
    'Content-Type' :  'application/json',
    'Authorization' : 'Bearer ' + this._auth_service.getToken()
  }) }

  channel: any;

  constructor(
    private http: HttpClient,
    private _auth_service: AuthService,
    @Inject(BASE_API_ROUTE) private base_api_route
  ) {
    this.leagues_route = `${this.base_api_route}/league/leagues`;
    this.create_league_route = `${this.base_api_route}/league/create`;
    this.get_league_route = `${this.base_api_route}/league/`;
  }

  createLeague(name: string, address: string, city: string, state: string, zip: string, description: string, sport_id: string): Observable<any> {

    return this.http.post(this.create_league_route, {
      name,
      address,
      city,
      state,
      zip,
      description,
      sport_id,

    }, this.options);
  }

  getLeagues(): Observable<any> {

    return this.http.get(this.leagues_route)
      .pipe(
        tap(leagues => console.log(leagues))
      );

  }

  getLeague(id: string): Observable<any> {
    return this.http.get(this.get_league_route + id);
  }

  getTeams(id: string): Observable<any> {
    return this.http.get(this.get_league_route + 'teams/' + id)
      .pipe(
        tap(teams => console.log(teams))
      );
  }
}
