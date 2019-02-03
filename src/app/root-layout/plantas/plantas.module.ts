import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { PlantasRoutingModule } from './plantas-routing.module';
import { PlantasComponent } from './plantas.component';


@NgModule({
  declarations: [PlantasComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatGridListModule,
        StatModule,
        PlantasRoutingModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ]
})
export class PlantasModule { }
