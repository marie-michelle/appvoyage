import { Component } from '@angular/core';
import { Formulaire } from './formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-marie-michelle';

  formulaire :Formulaire = { 
    destination: '',
    depart: '',
    hotel: '',
    coordonnee: '',
    etoile: 0,
    nbrChambre: 0,
    // option: [''],
    dateDepart: '',
    dateRetour: '',
    prix: 0,
};

}
