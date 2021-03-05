import {Component, Input, OnInit} from '@angular/core';
import {Forfait} from '../forfait';
import {Formulaire} from '../formulaire';
import {ForfaitService} from '../forfait.service';

@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnInit {
  @Input () nombreEtoiles: number;
  forfaits: Forfait[] ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
