import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'forfaitsVedettes'
})
export class ForfaitsVedettesPipe implements PipeTransform {

  transform(forfaits: Forfait[] ): Forfait[] {
    return forfaits.filter(forfait => forfait.vedette === false);
  }

}
