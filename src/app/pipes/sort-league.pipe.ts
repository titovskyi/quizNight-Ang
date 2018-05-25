import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortLeague'
})
export class SortLeaguePipe implements PipeTransform {

  transform(array: Array<any>): Array<any> {
    array.sort((a: any, b: any) => {
      if (a.league_name < b.league_name) {
        return -1;
      } else if (a.league_name > b.league_name) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
