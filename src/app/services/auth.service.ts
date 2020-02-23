import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  public logout(): void {
    localStorage.removeItem(environment.currentuser);
    localStorage.removeItem(environment.currentoken);
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean{
    return localStorage.getItem(environment.currentoken) != null;
  }
 
}
