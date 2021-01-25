import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from '../../src/app/forfait';


@Pipe({
  name: 'nombreEtoiles'
})
export class NbrEtoilesPipe implements PipeTransform {

  transform(forfaits: Forfait[], ...args: unknown[]): unknown {
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles < 0);
  }

}
