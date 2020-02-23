import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductoService } from 'app/services/producto.service';
import { NotificationsService } from 'app/services/notifications.service';
import { FacturaModel } from 'app/models/factura/factura.model';
import { FacturaDetalleModel, FacturaDetalleModelFactuacion } from 'app/models/factura/facturadetalle.model';
import { ClienteModel } from 'app/models/cliente/cliente.model';
import { ProductoModel, ProductoModelFactura } from 'app/models/producto/producto.model';
import { DxTextBoxComponent } from 'devextreme-angular';
import { TerceroService } from 'app/services/tercero.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  mFactura = new FacturaModel();
  mCliente = new ClienteModel();
  mProdcuto = new ProductoModelFactura();
  mProductosFilter:ProductoModelFactura[] = [];
  mFacturaDetalle: FacturaDetalleModelFactuacion[] = [];
  mCant = 0;
  mTotal = 0;
  mCalculoIva = 0;
  nomprod = '';

  constructor(private productoService: ProductoService,
    private terceroService: TerceroService,
    private notify: NotificationsService) { }

  ngOnInit() {
    this.mProdcuto.PRId
  }
    
// #consultas

loadClient(pIdClient){    
  if (pIdClient == '' || pIdClient == undefined) {
    this.cleanCliente();
  }else{
     this.terceroService.getClienteById(pIdClient).subscribe(
        result=>{
          if (result.datos == null || result.datos.length <= 0) {
            this.notify.showNotification('top','center',`'El cliente con id ${pIdClient} no existe`, 4);
            return;
          }
          this.mCliente.TRPNombre = result.datos['trpNombre'];
          this.mCliente.TRPApellido = result.datos['TRPApellido'];
        }
     );    
  }
}

loadProducto(pFilter){
  if (pFilter == '' || pFilter == undefined) {
    this.cleanProducto();
  }else{
    this.productoService.getProductosByFilter(pFilter).subscribe(
      result=>{
        this.mProductosFilter = result.datos;
      }
   )

    /* this.mProdcuto.PRNombre = 'Arroz';
    this.mProdcuto.PRId = 1;
    this.mProdcuto.SaldoGeneral = 10;
    this.mProdcuto.SaldoSucursal = 6;
    this.mProdcuto.PorcentajeIva = 19;
    this.mProdcuto.PRImpuesto = 1;
    this.mCalculoIva = (this.mProdcuto.PRPrecio * this.mProdcuto.PorcentajeIva) / 100; */
  } 
}
// #endconsultas
  

// #Funciones
addProducto(){
  if(!this.validaAddProducto()){
    
    return;
  };

  var pFacturaDetalle = new FacturaDetalleModelFactuacion();
  pFacturaDetalle.FDCantidad = this.mCant;
  pFacturaDetalle.FDCodProducto = this.mProdcuto.PRId;
  pFacturaDetalle.FDDescription = this.mProdcuto.PRNombre;
  pFacturaDetalle.FDPrecioUnitario = this.mProdcuto.PRPrecio;
  pFacturaDetalle.FDSubtotal = this.mProdcuto.PRPrecio * this.mCant;
  pFacturaDetalle.TotalIva = this.mCalculoIva;
  pFacturaDetalle.FDCodiIva = this.mProdcuto.PRImpuesto;
  pFacturaDetalle.FDNetoItem = (this.mProdcuto.PRPrecio * this.mCant) + this.mCalculoIva; 
  pFacturaDetalle.FDItem = this.mFacturaDetalle.length+1;
  this.mFacturaDetalle.push(pFacturaDetalle);
}

calcularTotal(){
  this.mTotal = this.mProdcuto.PRPrecio * this.mCant;
  this.calcularIva();
}

calcularIva(){
  this.mCalculoIva = ((this.mProdcuto.PRPrecio * this.mProdcuto.PorcentajeIva) / 100)* this.mCant;
}

cleanProducto(){
  this.mProdcuto = new ProductoModelFactura();
}

cleanCliente(){
  this.mCliente = new ClienteModel();  
}
// #endfunciones

// #validaciones
validaAddProducto(){
    
  if(this.mProdcuto.PRId == null || this.mProdcuto.PRId == undefined) 
  {
    this.notify.showNotification('top','center','Debe seleccionar un producto..', 4);
    return false;
  }
  else if(this.mProdcuto.PRPrecio == null || this.mProdcuto.PRPrecio == undefined) 
  {
    this.notify.showNotification('top','center','Debe insertar el precio del producto.', 4);
    return false;
  }else if(this.mCant > 0) 
  {
    this.notify.showNotification('top','center','Debe ingregar la cantidad.', 4);
    return false;
  }else if(this.mProdcuto.SaldoGeneral <= 0) 
  {
    this.notify.showNotification('top','center','El producto no cuenta con saldo.', 4);
    return false;
  }else{
    return true;
  }
  
}

validaCrearFactura(){
  if(this.mFactura.FCCliente == null || this.mFactura.FCCliente == undefined) 
  {
    this.notify.showNotification('top','center','Debe digitar el documento del cliente.', 4);
    return false;
  }
  else if(this.mFacturaDetalle.length <= 0 ) 
  {
    this.notify.showNotification('top','center','No se han insertado items.', 4);
    return false;
  }else{
    return true;
  }    
}
// #endvalidaciones

}
