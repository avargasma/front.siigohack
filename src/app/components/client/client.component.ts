import { Component, OnInit } from '@angular/core';
import { MaestrasService } from 'app/services/maestras.service';
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

  constructor(private maestrasService: MaestrasService
              ,private notify: NotificationsService
              ,private clientService: ClientService) {
    this.loadCities();
    this.client = new UserModel();
    this.getUsers();
   }

  ngOnInit() {
  }

  private loadCities(){
    this.maestrasService.getCities().subscribe(
      result=>{
        this.cities = result.entity as CityModel[];
        this.city = null;
      }
    )  
  }

  getUsers(){
    this.clientService.getClients().subscribe(
      result=>{
        this.clients = result.entity;       
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

      let user = JSON.parse(localStorage.getItem('currentuser')) as UserModel;
      this.client.CLUsuMod = user.CLIdClient;
      this.client.CLUsuCreated = user.CLIdClient;
      this.client.CLDireccion = '';
      this.client.CLEnableClicCompra = false;
      this.client.CLEnableCliclVenta = false;
      this.client.CLIsAdmon = false;
      this.client.CLVigente = true;
      this.client.CLCantClicsVenta = 0;
      this.client.CLCantClicsCompra = 0;
      this.client.CLCiudad = '11001';

      this.clientService.getClientById(this.client).subscribe(
        result=>{
          if(result.entity.length > 0){
            this.notify.showNotification('top','center','El id del cliente ya existe.', 4);
          }else{
            this.clientService.getClientByUserName(this.client).subscribe(
              result=>{
                if(result.entity.length > 0){
                  this.notify.showNotification('top','center','El nombre de usuario del cliente ya existe.', 4);
                }else{
                  this.clientService.insertClient(this.client).subscribe(
                    result=>{
                      if(result.resultado == 'si'){
                        this.notify.showNotification('top','center','Cliente insertado correctamente.', 2);
                        form.reset();
                      } else{
                        console.log(result);
                        this.notify.showNotification('top','center','Ocurrio un error.', 4);
                      }          
                    })
                }
              }
            )
          }
        }
      )

        
      }        
  }

}
