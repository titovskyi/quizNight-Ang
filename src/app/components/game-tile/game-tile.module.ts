import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameTileComponent } from './game-tile.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalGameTeamsComponent } from './modal-game-teams/modal-game-teams.component';
import { ModalTeamsApplicationComponent } from './modal-team-application/modal-team-application.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    GameTileComponent,
    ModalGameTeamsComponent,
    ModalTeamsApplicationComponent
  ],
  providers: [
    BsModalService
  ],
  exports: [
    GameTileComponent,
    ModalGameTeamsComponent,
    ModalTeamsApplicationComponent
  ],
  entryComponents: [
    ModalGameTeamsComponent,
    ModalTeamsApplicationComponent
  ]
})
export class GameTileModule { }
