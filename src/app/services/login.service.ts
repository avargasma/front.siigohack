import { Injectable } from '@angular/core';
import { UserModel, UserModelLogin } from 'app/models/user.model';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResultModel } from 'app/models/result.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  public login (usuario: UserModel): Observable<ResultModel> {

    usuario.metodo = 'dologin';
    
    return this.http.post<ResultModel>(`${environment.apiUrl}controllers/login.controller.php`, JSON.stringify(usuario));     
  }

  
}
