import { Injectable } from '@angular/core';
import { Farm } from './farms';
import {  of, Observable, map, catchError, throwError, tap } from 'rxjs';
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
    return this.http.get<Farm>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        console.error(e.error.Message);
        alert( e.error.Message);
        return throwError(e);
      } )
    );
  }

  update(farm: Farm): Observable<any>{   
    return this.http.put<any>(`${this.urlEndPoint}/${farm.id}`, farm, {headers: this.httpHeaders}).pipe(
      tap((response : any) => {
        alert(response.Message);
      }),
      catchError(e => {                
        console.error(e.error.errors);
        alert( e.error.errors);
        return throwError(e);  
      } )
    );
  }

  getChickensByFarm(id):Observable<number>{
    return this.http.get<number>(`${this.urlEndPoint}/${id}/chickens`);
  }

  getEggsByFarm(id):Observable<number>{
    return this.http.get<number>(`${this.urlEndPoint}/${id}/eggs`);
  }

  moveInTime(days):Observable<Object>{
    return this.http.get<any>(`${this.urlEndPoint}/time/${days}`).pipe(
      tap((response : any) => {
        alert(response.Message);
      }),
      catchError(e => {
        console.error(e.error.Message);
        alert( e.error.Message);
        return throwError(e);
      } )
    );
  }

  handleMarketOperation(selectedValue, selectedValueType, amount):Observable<Object>{
    return this.http.get(`${this.urlEndPoint}/1/${selectedValueType}/${selectedValue}/${amount}`).pipe(
      tap((response : any) => {
        alert(response.Message);
      }),
      catchError(e => {
        console.error(e.error.Message);
        alert( e.error.Message);
        return throwError(e);
      } )
    );
  }
  
/*
  create(cliente:Farm): Observable<Farm>{
    return this.http.post<Farm>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
*/
  

 
}
