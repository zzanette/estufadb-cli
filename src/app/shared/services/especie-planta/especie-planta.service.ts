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

    getPage(page: number = 0, linesPerPage: number = 24, orderBy: string = 'id', direction: string = 'asc'): Observable<any> {
        console.log(this.API
            + '/page?page=' + page
            + '&linesPerPage=' + linesPerPage
            + '&orderBy=' + orderBy
            + '&direction=' + direction);
        return this.http.get(this.API
            + '/page?page=' + page
            + '&linesPerPage=' + linesPerPage
            + '&orderBy=' + orderBy
            + '&direction=' + direction
        );
    }

    deleteById(id: number): void {
        this.http.delete(this.API + '/' + id);
    }

    post(especieObjt): Observable<any> {
        return this.http.post(this.API, especieObjt, {observe: 'response'});
    }
}
