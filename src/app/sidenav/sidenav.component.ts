import { Component, OnInit, Input } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { ForfaitService } from '../forfait.service';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  forfaits: Forfait[] ;
  // forfaits: Forfait[] = FORFAITS ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  @Input() recherche: Recherche = {
    destination : null,
    villeDepart : null,
    dateDepart: null,
    dateRetour: null,
    caracteristiques: [],
    nombreEtoiles: null};

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
