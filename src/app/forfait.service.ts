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
  forfaitUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitUrl + 'da/1996412/');
  }
  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(forfait);
    return this.http.post<Forfait>(this.forfaitUrl, forfait, httpOptions);
  }

  updateForfait(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.forfaitUrl +  id, forfait, httpOptions);
  }
  deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitUrl + id, httpOptions);
  }
}
