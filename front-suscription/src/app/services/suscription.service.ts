import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Suscription } from '../interfaces/Suscription';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscriptionService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSuscription(id: string): Observable<Suscription>{
    return this.http.get<Suscription>(`${this.BASE_URL}/landing/${id}`);
  }
  
  getSuscriptions(): Observable<Suscription[]>{
    return this.http.get<Suscription[]>(`${this.BASE_URL}/landing`); 
  }
  
  createSuscription(suscription: Suscription): Observable<Suscription>{
    return this.http.post<Suscription>(`${this.BASE_URL}/landing/subscriptions`, suscription);
  }

  updateSuscription(id: string, suscription: Suscription): Observable<Suscription>{
    return this.http.put<Suscription>(`${this.BASE_URL}/landing?id=${id}`,suscription);
  }

  deleteSuscription(id: string): Observable<Suscription>{
    return this.http.delete<Suscription>(`${this.BASE_URL}/landing?id=${id}`);
  }

}
