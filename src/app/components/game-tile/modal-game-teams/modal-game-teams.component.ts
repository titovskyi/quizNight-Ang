import { Component, OnInit } from '@angular/core';
import { GameTeam } from '../../../class/game-team';
import { Team } from '../../../class/team';
import { Game } from '../../../class/game';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GamesService } from '../../../services/games.service';
import { TeamsService } from '../../../services/teams.service';

import { ModalTeamsApplicationComponent } from '../modal-team-application/modal-team-application.component';

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal-game-teams.component.html',
    styleUrls: ['./modal-game-teams.component.scss']
  })

  export class ModalGameTeamsComponent implements OnInit {
    title: string;
    closeBtnName: string;
    public list: Team[];
    public gameTeams: GameTeam[];
    public teamsInGame: GameTeam[];
    public filteredTeams: GameTeam[] = [];
    public currentGameTeams: GameTeam[];
    league: number;
    public list_true: GameTeam[] = [];
    public list_false: GameTeam[] = [];
    public game: any;
    errorMessege: any = '';

    constructor(
      public bsModalRef: BsModalRef,
      public modalService: BsModalService,
      private gamesService: GamesService,
      private teamsService: TeamsService) {}

    ngOnInit() {
      this.getGameTeams();
    }

    public goBack() {
      this.bsModalRef.hide();
    }

    public sendTeam() {
      this.currentGameTeams = this.gameTeams.filter(gameTeams => gameTeams.game_id === this.game.id);
      this.bsModalRef.hide();
      const initialState = {
        list: this.list,
        league: this.list[0].league_name,
        game: this.game
      };

      this.bsModalRef = this.modalService.show(ModalTeamsApplicationComponent, { initialState });
      this.bsModalRef.content.closeBtnName = 'Close';
    }

    public getGameTeams() {
      this.teamsService.getGameTeams()
      .subscribe(
        gameTeams => {
          this.gameTeams = gameTeams;
          console.log(gameTeams);
          this.filteredTeams = this.gameTeams.filter( gamesTeams => gamesTeams.game_id === this.game.id );
          this.list_true = this.filteredTeams.filter( filteredTeams => filteredTeams.approved === true );
          this.list_false = this.filteredTeams.filter( filteredTeams => filteredTeams.approved === false );
        },
        error => this.errorMessege = <any>error
      );
    }

  }
