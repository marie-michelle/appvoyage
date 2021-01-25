import {Component, Input, OnInit} from '@angular/core';

import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  forfaits: Forfait[] ;
  // forfaits: Forfait[] = FORFAITS ;
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

