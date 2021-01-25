import { Caracteristiques } from './caracteristiques';

export interface Recherche {
 destination: string;
 villeDepart: string;
 nombreEtoiles: number;
 caracteristiques: Array<Caracteristiques>;
 dateDepart: string;
 dateRetour: string;
}
