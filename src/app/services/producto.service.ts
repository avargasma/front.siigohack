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

  public insertProducto(prod: ProductoModel): Observable<ResultModel> {
    return this.http.post<ResultModel>(`${environment.apiUrl}Product/insert`, JSON.stringify(prod));     
  }

  public updateProducto(prod: ProductoModel): Observable<ResultModel> { 
    return this.http.post<ResultModel>(`${environment.apiUrl}Product/update`, JSON.stringify(prod));     
  }

  public getProductoById(prod: ProductoModel): Observable<ResultModel> {
    return this.http.post<ResultModel>(`${environment.apiUrl}Product/getbyid`, JSON.stringify(prod));     
  }

  public getProductos(): Observable<ResultModel> {    
    return this.http.get<ResultModel>(`${environment.apiUrl}Product/`);
  }

  

}
