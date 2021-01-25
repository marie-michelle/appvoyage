import { Hotel } from '../app/hotel';

export interface Forfait {
  _id: string;
  destination: string;
  villeDepart: string;
  hotel: Hotel;
  dateDepart: string;
  dateRetour: string;
  prix: number;
  vedette: boolean;
  da: number;
  rabais: number;
}


