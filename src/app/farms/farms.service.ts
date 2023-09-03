import { Injectable } from '@angular/core';
import { Farm } from './farms';
import {  of, Observable, map, catchError, throwError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class FarmService {
  private urlEndPoint: string = 'http://localhost:8080/farms';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  public errors : string[];

  constructor(private http: HttpClient) { }

  
  getErrors(): string[] {
    return this.errors;
  }

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
      catchError(e => {
        if(e.status ==400){
          this.errors = e.error.errors as string[];
          throw new Error(e);
        }

        console.error(e.error.Message);
        alert( e.error.Message);
        throw new Error(e);
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
    return this.http.get(`${this.urlEndPoint}/1/${selectedValueType}/${selectedValue}/${amount}`);
  }
  
/*
  create(cliente:Farm): Observable<Farm>{
    return this.http.post<Farm>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
*/
  

 
}
