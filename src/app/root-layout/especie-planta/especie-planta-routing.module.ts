import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EspeciePlantaComponent } from './especie-planta.component';


const route: Routes = [
    {
        path: '',
        component: EspeciePlantaComponent
    }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class EspeciePlantaRoutingModule { }
