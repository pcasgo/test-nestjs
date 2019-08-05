import { HttpClient } from '@angular/common/http';
import { Suscription } from '../interfaces/Suscription';
import { Observable } from 'rxjs';
export declare class SuscriptionService {
    private http;
    BASE_URL: string;
    constructor(http: HttpClient);
    getSuscription(id: string): Observable<Suscription>;
    getSuscriptions(): Observable<Suscription[]>;
    createSuscription(suscription: Suscription): Observable<Suscription>;
    updateSuscription(id: string, suscription: Suscription): Observable<Suscription>;
    deleteSuscription(id: string): Observable<Suscription>;
}
