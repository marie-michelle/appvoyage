import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
// import { FORFAITS } from '../mock-forfaits';
import {Forfait} from '../forfait';
import {Hotel} from '../hotel';
import {ForfaitService} from '../forfait.service';
import {Formulaire} from '../formulaire';
import {MatTable} from '@angular/material/table';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DialogNewForfaitComponent} from '../dialog-new-forfait/dialog-new-forfait.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  forfaits: Forfait[];
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  @Output() forfaitFormAjout = new EventEmitter();

  columnsToDisplay = ['destination', 'villeDepart', 'prix', 'rabais', 'dateDepart', 'dateRetour', 'editer', 'supprimer'];
  mesForfaits: Forfait[];
  newForfait: Forfait;
  selectedForfait: Forfait;
  hotel: Hotel[];


  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newForfait = {
      _id: null,
      destination: '',
      villeDepart: '',
      hotel: {
        nom: '',
        coordonnees: '',
        nombreEtoiles: 0,
        nombreChambres: 0,
        caracteristiques: null,
      },
      dateDepart: '',
      dateRetour: '',
      prix: 0,
      vedette: false,
      rabais: 0,
      duree: '',
      da: '1996412',
    };
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => {
        this.mesForfaits = resultat;
        console.log(this.mesForfaits);
      });
  }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm): void {
    if (forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.newForfait)
        .subscribe(forfait  => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows(); });
    }
  }

  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(DialogNewForfaitComponent, {
      width: '75vw',
      data: this.newForfait
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialogue est fermé');
      if (result) {
        this.newForfait = result;
        console.log(this.newForfait);
        this.forfaitService.addForfait(this.newForfait)
          .subscribe(forfait => {
          this.mesForfaits.push(forfait);
          this.newForfait._id = null;
          this.newForfait.destination = '';
          this.newForfait.villeDepart = '';
          this.newForfait.dateDepart = '';
          this.newForfait.dateRetour = '';
          this.newForfait.prix = 0;
          this.newForfait.rabais = 0;
          this.newForfait.vedette = false;
          this.newForfait.hotel.nom = '';
          this.newForfait.hotel.coordonnees = '';
          this.newForfait.hotel.nombreEtoiles = 0;
          this.newForfait.hotel.nombreChambres = 0;
          this.newForfait.da =  '1996412';
          this.table.renderRows();
        });
      }
    });
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.forfaitService.updateForfait(this.selectedForfait)
        .subscribe(() => this.selectedForfait = null);
    }
  }

  onDelete(forfait: Forfait): void {
    this.forfaitService.deleteForfait(forfait._id)
      .subscribe(result => this.mesForfaits = this.mesForfaits.filter(h => h !== forfait));
  }
}
