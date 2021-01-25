import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { ForfaitService } from '../forfait.service';

import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  // forfaits: Forfait[]= FORFAITS ;
  forfaits: Forfait[] ;
  @Input() formulaire: Formulaire;
  @Output() formulaireChange = new EventEmitter();

  changeDestination(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: nouvelleValeur,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeDepart(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : nouvelleValeur,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeHotel(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: nouvelleValeur,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeCoordonnee(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: nouvelleValeur,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeEtoile(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: nouvelleValeur,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeNbrChambre(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: nouvelleValeur,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

// changeOption(nouvelleValeur) {
//   let nouveauFormulaire : Formulaire = {
//   destination: this.formulaire.destination,
//                                         depart : this.formulaire.depart,
//                                         hotel: this.formulaire.hotel,
//                                         coordonnee: this.formulaire.coordonnee,
//                                         nombreEtoiles: this.formulaire.nombreEtoiles,
//                                         nbrChambre: this.formulaire.nbrChambre,
//                                         // option: nouvelleValeur,
//                                         dateDepart: this.formulaire.dateDepart,
//                                         dateRetour: this.formulaire.dateRetour,
//                                         prix: this.formulaire.prix,
//                                         _id : this.formulaire._id,
//                                         vedette : this.formulaire.vedette,
//                                         da : this.formulaire.da,
//                                       };
//   this.formulaire = nouveauFormulaire;
//   this.formulaireChange.emit(nouveauFormulaire);
// }

  changeDateDepart(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: nouvelleValeur,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeDateRetour(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: nouvelleValeur,
      prix: this.formulaire.prix,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changePrix(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: nouvelleValeur,
      _id : this.formulaire._id,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }

  changeID(nouvelleValeur)  {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : nouvelleValeur,
      vedette : this.formulaire.vedette,
      da : this.formulaire.da,
    };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }


  changeVedette(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
        destination: this.formulaire.destination,
        villeDepart : this.formulaire.villeDepart,
        hotel: this.formulaire.hotel,
        coordonnee: this.formulaire.coordonnee,
        nombreEtoiles: this.formulaire.nombreEtoiles,
        nombreChambres: this.formulaire.nombreChambres,
        // option: this.formulaire.option.,
        dateDepart: this.formulaire.dateDepart,
        dateRetour: this.formulaire.dateRetour,
        prix: this.formulaire.prix,
        _id : this.formulaire.prix,
        vedette : nouvelleValeur,
        da : this.formulaire.da,
      };

      this.formulaire = nouveauFormulaire;
      this.formulaireChange.emit(nouveauFormulaire);
  }
  changeDa(nouvelleValeur) {
    const nouveauFormulaire: Formulaire = {
      destination: this.formulaire.destination,
      villeDepart : this.formulaire.villeDepart,
      hotel: this.formulaire.hotel,
      coordonnee: this.formulaire.coordonnee,
      nombreEtoiles: this.formulaire.nombreEtoiles,
      nombreChambres: this.formulaire.nombreChambres,
      // option: this.formulaire.option.,
      dateDepart: this.formulaire.dateDepart,
      dateRetour: this.formulaire.dateRetour,
      prix: this.formulaire.prix,
      _id : this.formulaire.prix,
      vedette : this.formulaire.vedette,
      da : nouvelleValeur,
    };

    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
