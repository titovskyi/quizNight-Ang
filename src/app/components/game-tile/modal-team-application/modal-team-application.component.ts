import { Component, OnInit } from '@angular/core';
import { NewTeam } from '../../../class/new-team';
import { Team } from '../../../class/team';
import { Game } from '../../../class/game';
import { GameTeam } from '../../../class/game-team';
import { Router } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GamesService } from '../../../services/games.service';
import { TeamsService } from '../../../services/teams.service';

@Component({
    selector: 'app-modal-application-content',
    templateUrl: './modal-team-application.component.html',
    styleUrls: ['./modal-team-application.component.scss']
  })

  export class ModalTeamsApplicationComponent implements OnInit {
    title: string;
    closeBtnName: string;
    list: Team[];
    game: any;
    league: number;
    selectedTeam;
    sameTeam;
    sendText = false;
    isDisabled = false;
    public teamsInGame: GameTeam[] = [];
    public gameTeams: GameTeam[];
    public teams: Team[] = [];
    public errorMessege: any = '';
    pluckTeams;
    currentGameTeam = {
      team_id: '',
      game_id: ''
    };

  constructor(public bsModalRef: BsModalRef, public gameService: GamesService, public teamsService: TeamsService, public router: Router) {}

  ngOnInit() {
    this.getGameTeams();
    console.log(this.pluckTeams);
  }

  onChange() {
    this.currentGameTeam.team_id = this.selectedTeam.id;
    this.currentGameTeam.game_id = this.game.id;

    this.pluckTeams = this.teamsInGame.find(ev => ev.name === this.selectedTeam.name);
    if (this.pluckTeams) {
      this.isDisabled = true;
      return;
    }
    this.isDisabled = false;
  }

  public onSubmit() {

    const createTeam = {
      team_id: this.currentGameTeam.team_id,
      game_id: this.currentGameTeam.game_id
    };

    this.teamsService.addTeam(createTeam).subscribe(
      data => {
        this.bsModalRef.hide();
        return true;
      },
      error => {
        console.error('Error saving!');
      }
    );
    this.sendText = true;
    this.isDisabled = true;
  }

  public goBack() {
    this.bsModalRef.hide();
  }

  public getGameTeams() {
    this.teamsService.getGameTeams()
    .subscribe(
      gameTeams => {
        this.gameTeams = gameTeams;
        this.teamsInGame = this.gameTeams.filter( gamesTeams => gamesTeams.game_id === this.game.id );
      },
      error => this.errorMessege = <any>error
    );
  }
}
