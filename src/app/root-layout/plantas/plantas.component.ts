import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PlantaService } from '../../shared/services/planta/planta.service';

@Component({
    selector: 'app-plantas',
    templateUrl: './plantas.component.html',
    styleUrls: ['./plantas.component.scss']
})
export class PlantasComponent implements OnInit {
    plantas: Observable<any>;

    constructor(private plantaService: PlantaService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.plantas = this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                if (id == null) {
                    return this.plantaService.getAllOnPage('0');
                }

                return this.plantaService.getByEspecieId(id);
            })
        );
    }

}
