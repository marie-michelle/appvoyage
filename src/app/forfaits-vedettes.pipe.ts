import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'forfaitsVedettes'
})
export class ForfaitsVedettesPipe implements PipeTransform {

  transform(forfaits: Forfait[] ): Forfait[] {
  if (forfaits) {
    return forfaits.filter(forfait => forfait && forfait.vedette === true);
  }
  }

}
