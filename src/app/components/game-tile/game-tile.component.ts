import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../class/game';
import { Team } from '../../class/team';
import { GameTeam } from '../../class/game-team';
import { GamesService } from '../../services/games.service';
import { TeamsService } from '../../services/teams.service';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalGameTeamsComponent } from './modal-game-teams/modal-game-teams.component';
import { ModalTeamsApplicationComponent } from './modal-team-application/modal-team-application.component';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @Input() game: Game;
  public gameTeams: GameTeam[];
  public teams: Team[];
  public errorMessege: any = '';
  public filteredTeams: Team[];
  bsModalRef: BsModalRef;
  public currentGameTeams: GameTeam[];
  public currentTeams: Team[];


  constructor(private gamesService: GamesService, private modalService: BsModalService, private teamsService: TeamsService) { }

  ngOnInit() {
    this.getTeams();
    this.getGameTeams();
  }

  public getTeams() {
    this.teamsService.getTeams()
    .subscribe(
      teams => this.teams = teams,
      error => this.errorMessege = <any>error
    );
  }

  public getGameTeams() {
    this.teamsService.getGameTeams()
    .subscribe(
      gameTeams => this.gameTeams = gameTeams,
      error => this.errorMessege = <any>error
    );
  }

  openTeams(game) {
    this.currentGameTeams = this.gameTeams.filter(gameTeams => gameTeams.game_id === game.id);
    this.currentTeams = this.teams.filter(teams => teams.league_id === game.league_id);

    const initialState = {
      list:  this.currentTeams,
      league: game.league_name,
      teamsInGame: this.currentGameTeams,
      gameTeams: this.currentGameTeams,
      game: game
    };

    this.bsModalRef = this.modalService.show(ModalGameTeamsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openTeamApplication(game) {
    this.currentTeams = this.teams.filter(teams => teams.league_id === game.league_id);

    const initialState = {
      list: this.currentTeams,
      league: game.league_name,
      game: game
    };

    this.bsModalRef = this.modalService.show(ModalTeamsApplicationComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
