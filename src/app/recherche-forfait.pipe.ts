import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';
import { Recherche } from './recherche';

@Pipe({
  name: 'rechercheForfait'
})
export class RechercheForfaitPipe implements PipeTransform {

  transform(forfaits: Forfait[], recherche: Recherche): Forfait[] {
    console.log(forfaits);
    console.log(recherche);
    if (forfaits) {
    if (!recherche.destination /*&& !recherche.dateDepart && !recherche.dateRetour  && !recherche.caracteristiques && !recherche.nombreEtoiles && !recherche.villeDepart*/){
      return forfaits;
    }else{
    if (recherche.destination !== '') {
      console.log('destination');
      forfaits = forfaits.filter(forfait => forfait.destination === recherche.destination);
      // console.log(forfaits);
}
//     if (recherche.dateDepart !== '') {
//       console.log('dateDepart');
//       forfaits = forfaits.filter(forfait => forfait.dateDepart === recherche.dateDepart);
//       // console.log(forfaits);
//     }
//       if (recherche.dateRetour !== '') {
//         console.log('dateRetour');
//         forfaits = forfaits.filter(forfait => forfait.dateRetour === recherche.dateRetour);
//         // console.log(forfaits);
//       }
//       if (recherche.nombreEtoiles !== 0) {
//         console.log('nombreEtoiles');
//         forfaits = forfaits.filter(forfait => forfait.hotel.nombreEtoiles === recherche.nombreEtoiles);
//         // console.log(forfaits);
//
// }
      return forfaits;
    }
}
}
}
