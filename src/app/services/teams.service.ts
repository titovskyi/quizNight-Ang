import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Game } from '../class/game';
import { Team } from '../class/team';
import { GameTeam } from '../class/game-team';
// import { NewTeam } from '../class/new-team';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamsService {

  private url = 'https://quiznight-back.herokuapp.com//api/';
  // private urlGameTeams = 'http://localhost:3000/api_game_teams';

  constructor(private http: HttpClient) { }

  public getTeams(): Observable<Team[]> {
    return this.http.get(this.url + `api_team`, { headers: this.setHeaders() })
    .catch(this.handleError)
    .map(this.extractData);
  }

  public addTeam(newTeam) {
    return this.http.post(this.url + `api_game_teams`, newTeam, { headers: this.setHeaders() });
  }

  public getGameTeams(): Observable<GameTeam[]> {
    return this.http.get(this.url + `api_game_teams`, { headers: this.setHeaders() })
    .catch(this.handleError)
    .map(this.extractData);
  }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

  private extractData(res: Response) {
    const body = Object.values(res);
    return body[0] || [];
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
