import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantasComponent } from './plantas.component';

const routes: Routes = [
    {
        path: '',
        component: PlantasComponent
    },
    {
        path: 'especie/:id',
        component: PlantasComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PlantasRoutingModule { }
