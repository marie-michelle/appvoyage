import { Component, OnInit, Input } from '@angular/core';

// import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import {Formulaire} from '../formulaire';


@Component({
  selector: 'app-fiches-vedette',
  templateUrl: './fiches-vedette.component.html',
  styleUrls: ['./fiches-vedette.component.css']
})
export class FichesVedetteComponent implements OnInit {
  forfaits: Forfait[] ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  constructor() { }


  ngOnInit(): void {
}
}
