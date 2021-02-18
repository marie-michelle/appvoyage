import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Caracteristiques } from '../caracteristiques';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})

export class FormulaireRechercheComponent implements OnInit {

  constructor() { }

  @Input() recherche: Recherche;
  @Output() rechercheChange = new EventEmitter();
  @Input() caracteristiques: Caracteristiques[];


  changeDestination(nouvelleValeur) {
    const nouvelleRecherche: Recherche = {
      destination: nouvelleValeur,
      villeDepart : this.recherche.villeDepart,
      nombreEtoiles: this.recherche.nombreEtoiles,
      caracteristiques: this.recherche.caracteristiques,
      dateDepart: this.recherche.dateDepart,
      dateRetour: this.recherche.dateRetour,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  changeCaracteristique(nouvelleValeur) {
    const nouvelleRecherche: Recherche = {
      destination: this.recherche.destination,
      villeDepart : this.recherche.villeDepart,
      nombreEtoiles: this.recherche.nombreEtoiles,
      caracteristiques: nouvelleValeur,
      dateDepart: this.recherche.dateDepart,
      dateRetour: this.recherche.dateRetour,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  changeDepart(nouvelleValeur) {
    const nouvelleRecherche: Recherche = {
      destination: this.recherche.destination,
      villeDepart : nouvelleValeur,
      nombreEtoiles: this.recherche.nombreEtoiles,
      caracteristiques: this.recherche.caracteristiques,
      dateDepart: this.recherche.dateDepart,
      dateRetour: this.recherche.dateRetour,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  changeEtoiles(nouvelleValeur) {
    const nouvelleRecherche: Recherche = {
      destination: this.recherche.destination,
      villeDepart : this.recherche.villeDepart,
      nombreEtoiles: nouvelleValeur,
      caracteristiques: this.recherche.caracteristiques,
      dateDepart: this.recherche.dateDepart,
      dateRetour: this.recherche.dateRetour,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }
  changeDateDepart(nouvelleValeur) {
    const nouvelleRecherche: Recherche = {
      destination: this.recherche.destination,
      villeDepart : this.recherche.villeDepart,
      nombreEtoiles: this.recherche.nombreEtoiles,
      caracteristiques: this.recherche.caracteristiques,
      dateDepart: nouvelleValeur,
      dateRetour: this.recherche.dateRetour,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  changeDateRetour(nouvelleValeur) {
    const nouvelleRecherche: Recherche = {
      destination: this.recherche.destination,
      villeDepart : this.recherche.villeDepart,
      nombreEtoiles: this.recherche.nombreEtoiles,
      caracteristiques: this.recherche.caracteristiques,
      dateDepart: this.recherche.dateDepart,
      dateRetour: nouvelleValeur,
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }
  ngOnInit(): void{
  }
}
