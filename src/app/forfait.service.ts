import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996412/';
  deleteForfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
  constructor(private http: HttpClient) { }
  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitUrl);
}

  addForfaits(forfaits: Forfait): Observable<Forfait[]> {
    return this.http.post<Forfait[]>(this.forfaitUrl + 'forfaits', forfaits, httpOptions);
}

  updateForfaits(forfaits: Forfait): Observable<any> {
const id = forfaits._id;
return this.http.put<Forfait>(this.forfaitUrl + 'forfaits/' + id, forfaits, httpOptions);
}

deleteForfaits(id: string): Observable<Forfait> {
return this.http.delete<Forfait>(this.forfaitUrl + 'forfaits/' + id, httpOptions);
}
}
