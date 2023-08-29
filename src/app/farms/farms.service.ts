import { Injectable } from '@angular/core';
import { Farm } from './farms';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class FarmService {
  private urlEndPoint: string = 'http://localhost:8080/farms';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  
  getFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>(this.urlEndPoint);
  }

  getFarm(id):Observable<Farm>{
    return this.http.get<Farm>(`${this.urlEndPoint}/${id}`);
  }

  update(farm: Farm): Observable<Farm>{
    console.log('acá al menos? ' + farm.id);
    return this.http.put<Farm>(`${this.urlEndPoint}/${farm.id}`, farm, {headers: this.httpHeaders});
  console.log('It was here');
  }

/*
  create(cliente:Farm): Observable<Farm>{
    return this.http.post<Farm>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
*/
  

 
}
