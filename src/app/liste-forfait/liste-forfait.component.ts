import { Component, OnInit, Input } from '@angular/core';

import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';


@Component({
  selector: 'app-liste-forfait',  
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})

export class ListeForfaitComponent implements OnInit {
  forfaits: Forfait[]= FORFAITS ;
  @Input() formulaire: Formulaire;


  constructor() { }

  ngOnInit(): void {
  }

}
