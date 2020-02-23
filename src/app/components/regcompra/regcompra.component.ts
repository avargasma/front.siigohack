import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'app/models/cliente/cliente.model';
import { ProductoModelFactura } from 'app/models/producto/producto.model';
import { ProductoService } from 'app/services/producto.service';
import { TerceroService } from 'app/services/tercero.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-regcompra',
  templateUrl: './regcompra.component.html',
  styleUrls: ['./regcompra.component.scss']
})
export class RegcompraComponent implements OnInit {

  mProveedor = new ClienteModel();
  mProdcuto = new ProductoModelFactura();
  constructor(private productoService: ProductoService,
      private terceroService: TerceroService,
      private notify: NotificationsService
  ) { }

  ngOnInit() {
  }

  
loadProveedor(pIdClient){    
  if (pIdClient == '' || pIdClient == undefined) {
    this.cleanProveedor();
  }else{
     this.terceroService.getClienteById(pIdClient).subscribe(
        result=>{
          if (result.datos.length <= 0) {
            this.notify.showNotification('top','center',`'El cliente con id${pIdClient} no existe`, 4);
            return;
          }
          this.mProveedor.TRPNombre = result.datos['trpNombre'];
          this.mProveedor.TRPApellido = result.datos['TRPApellido'];
        }
     );    
  }
}

 
loadProducto(pIdProd){    
  if (pIdProd == '' || pIdProd == undefined) {
    this.cleanProducto();
  }else{
     this.productoService.getProductoById(pIdProd).subscribe(
        result=>{
          if (result.datos.length <= 0) {
            this.notify.showNotification('top','center',`'Producto con id${pIdProd} no existe`, 4);
            return;
          }
          this.mProdcuto.PRNombre = result.datos['prNombre'];
        }
     );    
  }
}

cleanProveedor(){
  this.mProveedor = new ClienteModel();  
}

cleanProducto(){
  this.mProdcuto = new ProductoModelFactura();
}
}
