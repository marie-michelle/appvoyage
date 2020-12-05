import { Forfait } from './forfait';
import { ɵReflectionCapabilities } from '@angular/core';
import  '../assets/img/espagne.jpg';
import  '../assets/img/london.jpg';
import  '../assets/img/portugal.jpg';

export const FORFAITS: Forfait[] = [
{ 
  id: '1',
  destination: 'Londres, Angleterre',
  villedepart: 'Montréal',
  hotel:  
    {
    id: '1',
    nomhotel: 'StowAway Waterloo by Bridgestreet',
    coordonnees: '137-139 Lower Marsh, London. England',
    nbretoiles: 4,
    nbrchambres: 6,
    caracteristiques: [
      'Quartier Waterloo South Bank',
      'À proximité de la Grande roue London Eye',
      'Ascenceur',
      'Accès à la plage'
    ],
    },
  datedepart: 'Ven. 8 Janv. 2021',
  dateretour: 'Sam. 16 Janv. 2021',
  prix: 691.52,
  forfaitVedette: true,
  rabais: 0,
  photo: '../assets/img/london.jpg'
},

{ 
  id: '2',
  destination: 'Faro, Portugal',
  villedepart: 'Montréal',
  hotel: 
    {
    id: '2',
    nomhotel: 'Algarve Casino',
    coordonnees: 'Avenida Tomas Cabreira, Praia da Rocha, Portimao, Faro.',
    nbretoiles: 4,
    nbrchambres: 2,
    caracteristiques:[
      'Quartier Praia da Rocha', 
      'Face à la plage', 
      'Près de la Marina de Portimao',
      'Ascenceur',
      'Mini Club',
      'Accès à la plage'],
  },
  datedepart: 'Mar. 12 Janv. 2021',
  dateretour: 'Mer. 20 Janv. 2021',
  prix: 870.91,
  forfaitVedette: false,
  rabais: 50,
  photo: '../assets/img/portugal.jpg',
},

{ 
  id: '3',
  destination: 'Malaga, Espagne',
  villedepart: 'Montréal',
  hotel: 
    {
    id: '3',
    nomhotel: 'Barceló Málaga',
    coordonnees: 'C/ Heroe de Sostoa 2, Vialia Railway Station, Málaga, Malaga.',
    nbretoiles: 5,
    nbrchambres: 5,
    caracteristiques: [
      'Quartier Calle Marqués de Larios',
      'À proximité du Musée Picasso',
      'Ascenceur'
    ],
  },
  datedepart: 'Lun. 1 Fév., 2021',
  dateretour: 'Mar. 09 Fév. 2021',
  prix :871.41,
  forfaitVedette: false,
  rabais: 0,
  photo: '../assets/img/espagne.jpg',
},
];