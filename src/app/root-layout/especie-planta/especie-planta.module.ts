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
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
} from '@angular/material';

import { EspeciePlantaComponent } from './especie-planta.component';
import { EspeciePlantaRoutingModule } from './especie-planta-routing.module';
import { DialogEspecieOverviewComponent } from './dialog-especie-overview/dialog-especie-overview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EspeciePlantaComponent, DialogEspecieOverviewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    EspeciePlantaRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  entryComponents: [DialogEspecieOverviewComponent]
})
export class EspeciePlantaModule { }
