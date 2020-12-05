import { Component, OnInit, Input } from '@angular/core';

import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';


@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
@Input() forfait : Forfait;
@Input() formulaire: Formulaire;


  constructor() { }

  ngOnInit(): void {
  }

}
