import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Game } from '../class/game';
import { Team } from '../class/team';
import { NewTeam } from '../class/new-team';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GamesService {

  private url = 'https://blooming-tundra-14028.herokuapp.com/api/';
  public newTeam: NewTeam;

  constructor(private http: HttpClient) { }

  public getGames(): Observable<Game[]> {
    return this.http.get(this.url + `api_game/`, { headers: this.setHeaders()})
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
