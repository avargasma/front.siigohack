import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ClientComponent } from '../../components/client/client.component';
import { FacturaComponent } from 'app/components/factura/factura.component';
import { ProductoComponent } from 'app/components/producto/producto.component';
import { RegcompraComponent } from 'app/components/regcompra/regcompra.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { DxAutocompleteModule, 
        DxTemplateModule,
        DxNumberBoxModule,
        DxDataGridModule, 
        DxTextBoxModule,
        DxButtonModule } from 'devextreme-angular';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxAutocompleteModule, 
    DxTemplateModule,
    DxNumberBoxModule,
    DxButtonModule
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    NotificationsComponent,
    ClientComponent,
    FacturaComponent,
    ProductoComponent,
    RegcompraComponent
  ]
})

export class AdminLayoutModule {}
