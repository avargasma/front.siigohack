import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultModel } from 'app/models/result.model';
import { environment } from 'environments/environment';
import { EntityModel } from 'app/models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class MaestrasService {

  constructor(private http: HttpClient) { }

  public getCities(): Observable<ResultModel> {
    let obj = new EntityModel();
    obj.metodo = "getCities";
    obj.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/maestras.controller.php`, JSON.stringify(obj));     
  }

  public getSuscripciones(): Observable<ResultModel> {
    let obj = new EntityModel();
    obj.metodo = "getSuscripciones";
    obj.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/maestras.controller.php`, JSON.stringify(obj));     
  }

}
