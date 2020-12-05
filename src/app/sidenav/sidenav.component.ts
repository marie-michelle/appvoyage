import { Component, Input, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  forfaits: Forfait[]= FORFAITS ;
  @Input() formulaire: Formulaire;

  showFiller = false; 

  title = 'Forfaits voyage';

  constructor() { }

  ngOnInit(): void {
  }

}
