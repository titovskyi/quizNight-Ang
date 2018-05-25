import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'selectLeague'
})
export class SelectLeaguePipe implements PipeTransform {

  transform(items: any[], args: any[]): any {
     return _.uniqBy(items, args);
  }
}
