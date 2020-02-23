import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'app/models/cliente/cliente.model';
import { ProductoModelFactura } from 'app/models/producto/producto.model';

@Component({
  selector: 'app-regcompra',
  templateUrl: './regcompra.component.html',
  styleUrls: ['./regcompra.component.scss']
})
export class RegcompraComponent implements OnInit {

  mProveedor = new ClienteModel();
  mProdcuto = new ProductoModelFactura();
  constructor() { }

  ngOnInit() {
  }

}
