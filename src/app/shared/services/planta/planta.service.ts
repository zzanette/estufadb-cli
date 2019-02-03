import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
    public API = '//localhost:8080/plantas';
    constructor(private http: HttpClient) { }

    getAllOnPage(page: string): Observable<any> {
        return this.http.get(this.API + '/page?page=' + page);
    }

    getByEspecieId(especieId: string): Observable<any> {
        return this.http.get(this.API + '/especie/' + especieId);
    }
}
