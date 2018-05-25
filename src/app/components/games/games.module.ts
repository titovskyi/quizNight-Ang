import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule, BsDropdownModule  } from 'ngx-bootstrap';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameTileModule } from '../game-tile/game-tile.module';
import { FormsModule } from '@angular/forms';

import { SortLeaguePipe } from '../../pipes/sort-league.pipe';
import { SelectLeaguePipe } from '../../pipes/select-league.pipe';
import { SortGameDatePipe } from '../../pipes/sort-game-date.pipe';

@NgModule({
    imports: [
        CommonModule,
        GamesRoutingModule,
        GameTileModule,
        FormsModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
      GamesComponent,
      SortLeaguePipe,
      SelectLeaguePipe,
      SortGameDatePipe
    ],
    exports: [
      GamesComponent
    ]
})

export class GamesModule { }
