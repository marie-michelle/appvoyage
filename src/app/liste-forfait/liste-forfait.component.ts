import { Component, OnInit, Input } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { ForfaitService } from '../forfait.service';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css'],
})

export class ListeForfaitComponent implements OnInit {

  forfaits: Forfait[] ;
  // forfaits: Forfait[] = FORFAITS ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  @Input() recherche: Recherche = {
    destination: '',
    villeDepart: '',
    nombreEtoiles: 0,
    caracteristiques: [],
    dateDepart: '',
    dateRetour: ''};


constructor(private forfaitService: ForfaitService) { }

ngOnInit(): void {
  this.getForfaits();
}
getForfaits(): void {
  this.forfaitService.getForfaits()
    .subscribe(resultat => this.forfaits = resultat);
}

}
