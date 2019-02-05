import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
} from '@angular/material';

import { EspeciePlantaComponent } from './especie-planta.component';
import { EspeciePlantaRoutingModule } from './especie-planta-routing.module';

@NgModule({
  declarations: [EspeciePlantaComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    EspeciePlantaRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class EspeciePlantaModule { }
