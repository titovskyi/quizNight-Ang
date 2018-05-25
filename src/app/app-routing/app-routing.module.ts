import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '../components/not-found/not-found.component';
import { MainComponent } from '../components/main/main.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  { path: 'main', component: MainComponent },
  { path: 'games', loadChildren: '../components/games/games.module#GamesModule' },
  { path: 'questions', loadChildren: '../components/questions/questions.module#QuestionsModule' },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
