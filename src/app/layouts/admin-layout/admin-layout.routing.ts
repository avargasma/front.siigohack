import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ClientComponent } from '../../components/client/client.component';
import { FacturaComponent } from 'app/components/factura/factura.component';
import { ProductoComponent } from 'app/components/producto/producto.component';
import { RegcompraComponent } from 'app/components/regcompra/regcompra.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'client',        component: ClientComponent },
    { path: 'factura', component: FacturaComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'registrarcompra', component: RegcompraComponent },

];
