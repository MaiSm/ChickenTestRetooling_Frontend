import { Injectable } from '@angular/core';
import { Egg } from './eggs';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class EggService {
  private urlEndPoint: string = 'http://localhost:8080/eggs';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getAllEggs():Observable<Egg[]>{
    return this.http.get<Egg[]>(`${this.urlEndPoint}`);
  }
 
}