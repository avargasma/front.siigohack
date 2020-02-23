import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultModel } from 'app/models/result.model';
import { environment } from 'environments/environment';
import { EntityModel } from 'app/models/entity.model';
import { ProductoModel } from 'app/models/producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProductoById(pIdProd: number): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.apiUrl}Producto/GetById?pIdProd=${pIdProd}`);     
  }

  public getProductosByFilter(pValorBusqueda: string): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.apiUrl}Producto/Autocomplete?pValorBusqueda=${pValorBusqueda}`);     
  }

  public getSaldosProd(pIdProd: number): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.apiUrl}Producto/GetSaldoGlobal?pID=${pIdProd}`);     
  }

  public notificarProveedor(pMail: string, pNombreProducto: string, pNombreProveedor: string): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.apiUrl}Notificacion/SendMailProveedor?pMail=${pMail}&pNombreProducto=${pNombreProducto}pNombreProveedor=${pNombreProveedor}`);     
  }

}
