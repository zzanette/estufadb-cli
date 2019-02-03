import { Component, OnInit } from '@angular/core';
import { EspeciePlantaService } from '../../shared/services/especie-planta/especie-planta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private plantas: Array<any> = [];

    constructor(private especiePlatntaService: EspeciePlantaService) { }

    ngOnInit() {
        this.especiePlatntaService.getAllOnPage('0').subscribe(page => {
            this.plantas = page.content;
        });
    }
}
