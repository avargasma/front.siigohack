import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'app/services/producto.service';
import { NotificationsService } from 'app/services/notifications.service';
import { FacturaModel } from 'app/models/factura/factura.model';
import { FacturaDetalleModel, FacturaDetalleModelFactuacion } from 'app/models/factura/facturadetalle.model';
import { ClienteModel } from 'app/models/cliente/cliente.model';
import { ProductoModel, ProductoModelFactura } from 'app/models/producto/producto.model';

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

  constructor(private productoService: ProductoService,
    private notify: NotificationsService) { }

  ngOnInit() {
    this.mProdcuto.PRId
  }

  getClientById(){    
    debugger;
      this.mFactura.FCCliente;
      this.productoService.getProductos().subscribe(
          result=>{
            console.log(result);
          }
      )
    }

    
  loadClient(pIdClient){    
    if (pIdClient == '' || pIdClient == undefined) {
      this.cleanCliente();
    }else{
      this.mCliente.TRPNombre = 'Arlington';
      this.mCliente.TRPApellido = 'Vargas';
    }
    
     /*  this.productoService.getProductos().subscribe(
          result=>{
            console.log(result);
          }
       )*/
  }

  loadProducto(pFilter){    
    debugger;
    if (pFilter == '' || pFilter == undefined) {
      this.cleanProducto();
    }else{
      this.mProdcuto.PRNombre = 'Arroz';
      this.mProdcuto.PRId = 1;
      this.mProdcuto.SaldoGeneral = 10;
      this.mProdcuto.SaldoSucursal = 6;
      this.mProdcuto.PorcentajeIva = 19;
      this.mProdcuto.PRImpuesto = 1;
      this.mCalculoIva = (this.mProdcuto.PRPrecio * this.mProdcuto.PorcentajeIva) / 100;
    }    
     /*  this.productoService.getProductos().subscribe(
          result=>{
            console.log(result);
          }
       )*/
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

  addProducto(){
    debugger;
    if(this.mProdcuto.PRId == null || this.mProdcuto.PRId == undefined) return;
    
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

}