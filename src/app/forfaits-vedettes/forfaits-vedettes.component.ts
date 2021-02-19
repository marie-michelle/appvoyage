import {Component, Input, OnInit} from '@angular/core';
import {Forfait} from '../forfait';
import {Formulaire} from '../formulaire';
import {ForfaitService} from '../forfait.service';

@Component({
  selector: 'app-forfaits-vedettes',
  templateUrl: './forfaits-vedettes.component.html',
  styleUrls: ['./forfaits-vedettes.component.css']
})
export class ForfaitsVedettesComponent implements OnInit {

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
