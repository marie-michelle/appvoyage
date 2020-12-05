import { Hotel } from '../app/hotel';

export interface Forfait {
  id: string;
  destination: string;
  villedepart: string;
  hotel: Hotel;
  datedepart: string;
  dateretour: string;
  prix: number;
  forfaitVedette: boolean;
  rabais: number;
  photo: string;
}


