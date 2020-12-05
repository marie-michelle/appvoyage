import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';

import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  forfaits: Forfait[]= FORFAITS ;

@Input() formulaire: Formulaire;
@Output() formulaireChange = new EventEmitter();


changeDestination(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: nouvelleValeur, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeDepart(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : nouvelleValeur,
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeHotel(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination,  
                                        depart : this.formulaire.depart, 
                                        hotel: nouvelleValeur,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeCoordonnee(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: nouvelleValeur,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeEtoile(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: nouvelleValeur,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeNbrChambre(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: nouvelleValeur,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

// changeOption(nouvelleValeur) {
//   let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
//                                         depart : this.formulaire.depart, 
//                                         hotel: this.formulaire.hotel,
//                                         coordonnee: this.formulaire.coordonnee,
//                                         etoile: this.formulaire.etoile,
//                                         nbrChambre: this.formulaire.nbrChambre,
//                                         // option: nouvelleValeur,
//                                         dateDepart: this.formulaire.dateDepart,
//                                         dateRetour: this.formulaire.dateRetour,
//                                         prix: this.formulaire.prix,
//                                       };
//   this.formulaire = nouveauFormulaire;
//   this.formulaireChange.emit(nouveauFormulaire);
// }

changeDateDepart(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: nouvelleValeur,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changeDateRetour(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: nouvelleValeur,
                                        prix: this.formulaire.prix,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}

changePrix(nouvelleValeur) {
  let nouveauFormulaire : Formulaire = {destination: this.formulaire.destination, 
                                        depart : this.formulaire.depart, 
                                        hotel: this.formulaire.hotel,
                                        coordonnee: this.formulaire.coordonnee,
                                        etoile: this.formulaire.etoile,
                                        nbrChambre: this.formulaire.nbrChambre,
                                        // option: this.formulaire.option.,
                                        dateDepart: this.formulaire.dateDepart,
                                        dateRetour: this.formulaire.dateRetour,
                                        prix: nouvelleValeur,
                                      };
  this.formulaire = nouveauFormulaire;
  this.formulaireChange.emit(nouveauFormulaire);
}





constructor() { }

ngOnInit(): void {
}
}
