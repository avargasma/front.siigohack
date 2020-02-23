import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'app/models/user.model';
import { LoginService } from 'app/services/login.service';
import { ResultModel } from 'app/models/result.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new UserModel();
  
  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if(form.invalid){
      console.log('Form invalid');
      return;
    }else{
      this.router.navigate(['/dashboard']);
      return;
      this.loginService.login(this.usuario).subscribe((resp)=>
      {
       /*  if(resp != null) {
          
          this.usuario = resp.entity[0] as UserModel;
          if(this.usuario != undefined){
            localStorage.setItem(environment.currentuser, JSON.stringify(this.usuario));
            localStorage.setItem(environment.currentoken, resp.token);
            this.router.navigate(['/dashboard']);
          }else{
            this.usuario = new UserModel();
            alert('Usuario o contraseña incorrecto.');           
          }
        }else{
          alert(resp['mensaje']);
        } */
      },
      (err) => {console.log('error ',err)});
    }
  }

  

}
