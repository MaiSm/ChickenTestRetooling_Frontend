import { Injectable } from '@angular/core';
import { Chicken } from './chickens';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ChickenService {
  private urlEndPoint: string = 'http://localhost:8080/chickens';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getChickensByFarm(id):Observable<number>{
    return this.http.get<number>(`${this.urlEndPoint}/farms/${id}`);
  }
 
}
