import { Component } from '@angular/core';
import { Formulaire } from './formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-marie-michelle';

  formulaire: Formulaire = {
    _id: null,
    villeDepart: '',
    destination: '',
    dateDepart: '',
    hotel: '',
    coordonnee: '',
    nombreEtoiles: 0,
    nombreChambres: 0,
    dateRetour: '',
    prix: 0,
    vedette: false,
    duree: '',
};

}
