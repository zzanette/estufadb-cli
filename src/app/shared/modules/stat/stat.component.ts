import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() umidadeAtual: number;
    @Input() umidadeMin: number;
    @Input() umidadeMax: number;
    @Input() label: string;
    @Input() data: number;
    @Input() description: string;

    constructor() {}

    ngOnInit() {}
}
