import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../class/game';

@Pipe({
  name: 'sortGameDate'
})
export class SortGameDatePipe implements PipeTransform {

transform(games: any[]): any[] {

return games.filter(game => {
const now = new Date();
const nowms = now.getTime();
const gameDate = Date.parse(game.data);
if (gameDate > nowms) {
  return game;
}
});
}
}
