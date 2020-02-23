import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultModel } from 'app/models/result.model';
import { environment } from 'environments/environment';
import { EntityModel } from 'app/models/entity.model';
import { UserModel } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public insertClient(user: UserModel): Observable<ResultModel> {
    user.metodo = "insertClient";
    user.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }

  public updateClient(user: UserModel): Observable<ResultModel> {
    user.metodo = "updateClient";
    user.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }


 

  public getClientById(user: UserModel): Observable<ResultModel> {
    user.metodo = "getClientById";
    user.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }

  public getSuscriptClienteVigente(user: UserModel): Observable<ResultModel> {
    user.metodo = "getSuscriptClienteVigente";
    user.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }

  public getClientByIdNoAdmin(user: UserModel): Observable<ResultModel> {
    user.metodo = "getClientByIdNoAdmin";
    user.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }

  public getClients(): Observable<ResultModel> {
    var user = {
      "metodo":"getClients",
      "token": localStorage.getItem(environment.currentoken)
    }
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }

  public getClientByUserName(user: UserModel): Observable<ResultModel> {
    user.metodo = "getClientByUserName";
    user.token = localStorage.getItem(environment.currentoken);    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/client.controller.php`, JSON.stringify(user));     
  }


}
