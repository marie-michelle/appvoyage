import {Component, Input, OnInit} from '@angular/core';
import {Forfait} from '../forfait';
import {Formulaire} from '../formulaire';
import {ForfaitService} from '../forfait.service';

@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {

  mesForfaits: Forfait[] ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.mesForfaits = resultat);
  }
}
