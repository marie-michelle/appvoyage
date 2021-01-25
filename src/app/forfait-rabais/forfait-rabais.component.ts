import {Component, Input, OnInit} from '@angular/core';
import {Forfait} from '../forfait';
import {Formulaire} from '../formulaire';
import {ForfaitService} from '../forfait.service';

@Component({
  selector: 'app-forfait-rabais',
  templateUrl: './forfait-rabais.component.html',
  styleUrls: ['./forfait-rabais.component.css']
})
export class ForfaitRabaisComponent implements OnInit {

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
