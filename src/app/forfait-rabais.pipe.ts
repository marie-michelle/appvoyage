import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'forfaitRabais'
})
export class ForfaitRabaisPipe implements PipeTransform {
  transform(forfaits: Forfait[] ): Forfait[] {
    return forfaits.filter(forfait => forfait.rabais >= 1);
  }

}

