import { Component, OnInit } from '@angular/core';
import { CityModel } from 'app/models/city.model';
import { NgForm } from '@angular/forms';
import { ClientService } from 'app/services/client.service';
import { UserModel } from 'app/models/user.model';
import { NotificationsService } from 'app/services/notifications.service';
declare var $: any;


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  cities: CityModel[];
  city = new CityModel();
  client = new UserModel();
  clients: UserModel[];
  repeatpass: string;

  constructor(private notify: NotificationsService
              ,private clientService: ClientService) {
    this.loadCities();
    this.client = new UserModel();
    this.getUsers();
   }

  ngOnInit() {
  }

  private loadCities(){
    /*  */  
  }

  getUsers(){
    this.clientService.getClients().subscribe(
      result=>{
        this.clients = null;       
      }
    )
  
  }

  changeCity(){
    if(this.city != null)this.client.CLCiudad = this.city.CTId;
  }

  clear(){
    this.client = new UserModel();
    
  }
  
  validaPass(pass, passval): boolean{
    if(pass != passval)
      return false;
    else
      return true;
  }

  guardar(form: NgForm){
    if(form.invalid){
      this.notify.showNotification('top','center','Debe digitar todos los campos', 4);
      return;
    }else{
      if(!this.validaPass(this.repeatpass, this.client.CLContrasena)){
        this.notify.showNotification('top','center','Las contraseñas no coinciden.', 4);
        return;
      }

        
      }        
  }

}
