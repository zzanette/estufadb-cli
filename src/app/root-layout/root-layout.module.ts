import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';


import { RootLayoutRoutingModule } from './root-layout-routing.module';
import { RootLayoutComponent } from './root-layout.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { TopnavComponent } from './nav/topnav/topnav.component';

@NgModule({
    declarations: [RootLayoutComponent, SidebarComponent, TopnavComponent],
    imports: [
        CommonModule,
        RootLayoutRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class RootLayoutModule { }
