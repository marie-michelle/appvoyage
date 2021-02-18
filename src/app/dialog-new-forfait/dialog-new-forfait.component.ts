import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import { Forfait } from '../forfait';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import {NgForm} from '@angular/forms';
import {ForfaitService} from '../forfait.service';
import {Formulaire} from '../formulaire';


@Component({
  selector: 'app-dialog-new-forfait',
  templateUrl: './dialog-new-forfait.component.html',
  styleUrls: ['./dialog-new-forfait.component.css']
})
export class DialogNewForfaitComponent  {

  forfaits: Forfait[];
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  @Output() forfaitFormAjout = new EventEmitter();

  constructor( private forfaitService: ForfaitService, public dialog: MatDialog,
               public dialogRef: MatDialogRef<DialogNewForfaitComponent>,
               @Inject(MAT_DIALOG_DATA) public newForfait: Forfait) { }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm): void {
    if (forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.newForfait)
        .subscribe(forfait  => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows(); });
    }
  }

  onAnnulerClick(): void {
    this.dialogRef.close();
  }

}
