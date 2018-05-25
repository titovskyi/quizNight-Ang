import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { TeamsService } from '../../services/teams.service';
import { Router } from '@angular/router';
import { Game } from '../../class/game';
import { Team } from '../../class/team';
import { GameTeam } from '../../class/game-team';
import * as _ from 'lodash';

import { filter } from 'rxjs/operator/filter';
import { GameTileComponent } from '../game-tile/game-tile.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public games: Game[] = [];
  public teams: Team[] = [];
  public gameTeams: GameTeam[];
  public filterLeague: Game[] = [];
  public filterCity: Game[] = [];
  public filteredGames: Game[] = [];
  public errorMessege: any = '';
  public buttonTextLeague = 'Все лиги';
  public buttonTextCity = 'Все города';
  currentGameTeams;
  currentTeams;
  selectedLeague;
  selectedCity;

  constructor(private gameService: GamesService, public router: Router) {}

  ngOnInit(): void {
    this.getGames();
  }

  public getGames () {
    this.gameService.getGames()
    .subscribe(
      games =>  this.games = games,
      error => this.errorMessege = <any>error,
      () => this.filteredGames = this.games
    );
  }

  onChange() {
  }

  isEmpty(field: String) {
    return field === '' || field === undefined;
  }

  public allGames() {
    this.router.navigate(['games']);
  }

  public showLeague(value) {
    this.selectedLeague = value;
    if (this.isEmpty(this.selectedLeague) && this.isEmpty(this.selectedCity)) {
      this.filteredGames = this.games;
    } else if (this.isEmpty(this.selectedCity)) {
      this.filteredGames = this.games.filter(game => game.league_name === this.selectedLeague);
    } else if (this.isEmpty(this.selectedLeague)) {
      this.filteredGames = this.games.filter(game => game.league_city === this.selectedCity);
    } else {
      this.filteredGames = this.games.filter(game => game.league_name === this.selectedLeague && game.league_city === this.selectedCity);
    }
    if (this.selectedLeague === undefined) {
      this.buttonTextLeague = 'Все лиги';
    } else {
      this.buttonTextLeague = this.selectedLeague + ' Лига';
    }
  }

  public showCity(value) {
    this.selectedCity = value;
    if (this.isEmpty(this.selectedLeague) && this.isEmpty(this.selectedCity)) {
      this.filteredGames = this.games;
    } else if (this.isEmpty(this.selectedCity)) {
      this.filteredGames = this.games.filter(game => game.league_name === this.selectedLeague);
    } else if (this.isEmpty(this.selectedLeague)) {
      this.filteredGames = this.games.filter(game => game.league_city === this.selectedCity);
    } else {
      this.filteredGames = this.games.filter(game => game.league_name === this.selectedLeague && game.league_city === this.selectedCity);
    }
    if (this.selectedCity === undefined) {
      this.buttonTextCity = 'Все города';
    } else {
      this.buttonTextCity = this.selectedCity;
    }
  }
}


