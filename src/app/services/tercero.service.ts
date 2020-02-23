import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultModel } from 'app/models/result.model';
import { environment } from 'environments/environment';
import { EntityModel } from 'app/models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class TerceroService {

  constructor(private http: HttpClient) { }

  public getClienteById(pIdCliente: number): Observable<ResultModel> {
    return this.http.get<ResultModel>(`${environment.apiUrl}Tercero/GetByNit?pNit=${pIdCliente}`);     
  }
}
