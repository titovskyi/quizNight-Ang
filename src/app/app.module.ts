import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { CollapseModule } from 'ngx-bootstrap';
import { GameTileModule } from './components/game-tile/game-tile.module';

import { DateSortPipe } from './pipes/date-sort.pipe';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { GamesService } from './services/games.service';
import { TeamsService } from './services/teams.service';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DateSortPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    AngularFontAwesomeModule,
    CollapseModule.forRoot(),
    GameTileModule
  ],
  providers: [
    GamesService,
    TeamsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
