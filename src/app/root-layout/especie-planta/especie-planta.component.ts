import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EspeciePlantaService } from 'src/app/shared/services/especie-planta/especie-planta.service';
import { merge } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';

@Component({
    selector: 'app-especie-planta',
    templateUrl: './especie-planta.component.html',
    styleUrls: ['./especie-planta.component.scss']
})
export class EspeciePlantaComponent implements AfterViewInit {
    private displayColumns = ['id', 'nome', 'umidadeMinima', 'umidadeMaxima'];
    private dataSource: MatTableDataSource<any> = new MatTableDataSource();
    private especiesPlanta: Array<any>;

    resultsLength = 0;
    isLoadingResults = false;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private especiePlantaService: EspeciePlantaService) { }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    if (!this.isLoadingResults) {
                        this.isLoadingResults = true;
                        return this.especiePlantaService.getPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active);
                    }

                    return this.especiePlantaService.getPage(this.paginator.pageIndex + 1, this.paginator.pageSize, this.sort.active);
                }),
                map(data => {
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = data.totalPages;
                    return data.content;
                  }),
            ).subscribe(resourceEspeciePlanta => {
                this.dataSource.data = resourceEspeciePlanta;
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
    }

}
