import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ClientComponent } from '../../components/client/client.component';
import { EditclientComponent } from 'app/components/editclient/editclient.component';
import { FacturaComponent } from 'app/components/factura/factura.component';
import { ProductoComponent } from 'app/components/producto/producto.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'client',        component: ClientComponent },
    { path: 'editclient', component: EditclientComponent },
    { path: 'factura', component: FacturaComponent },
    { path: 'producto', component: ProductoComponent },

];
