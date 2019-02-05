import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootLayoutComponent } from './root-layout.component';

const routes: Routes = [
    {
        path: '',
        component: RootLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'plantas',
                loadChildren: './plantas/plantas.module#PlantasModule'
            },
            {
                path: 'plantas/especie/:id',
                loadChildren: './plantas/plantas.module#PlantasModule'
            },
            {
                path: 'especies-planta',
                loadChildren: './especie-planta/especie-planta.module#EspeciePlantaModule'
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RootLayoutRoutingModule { }
