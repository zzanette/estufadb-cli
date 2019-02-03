import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EspeciePlantaService {
    public API = '//localhost:8080/especies-planta';
    constructor(private http: HttpClient) { }

    getAllOnPage(page: string): Observable<any> {
        return this.http.get(this.API + '/page?page=' + page);
    }
}
