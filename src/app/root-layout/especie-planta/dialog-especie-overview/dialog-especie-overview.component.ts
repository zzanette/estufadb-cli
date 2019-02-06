import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EspeciePlantaService } from 'src/app/shared/services/especie-planta/especie-planta.service';

@Component({
  selector: 'app-dialog-especie-overview',
  templateUrl: './dialog-especie-overview.component.html',
  styleUrls: ['./dialog-especie-overview.component.scss']
})
export class DialogEspecieOverviewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEspecieOverviewComponent>,
    private especiePlantaService: EspeciePlantaService
  ) {
      this.data.umidadeMinima = 0;
      this.data.umidadeMaxima = 100;
   }

  ngOnInit() {
  }



}
