import { Component, OnInit } from '@angular/core';
import { UserModel } from 'app/models/user.model';
import { ClientService } from 'app/services/client.service';
import { NotificationsService } from 'app/services/notifications.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.scss']
})
export class EditclientComponent implements OnInit {

  
  client = new UserModel();

  constructor(private clientService: ClientService,
    private notify: NotificationsService) {
      
     }

  ngOnInit() {
    this.client = new UserModel();
  }

  getClientById(){    
    if(this.client.CLIdClient == null || this.client.CLIdClient == undefined || this.client.CLIdClient == 0){
      this.notify.showNotification('top','center','Debe digitar el documento del cliente.', 4);
    }else{
      let wclient = new UserModel();
      wclient.CLIdClient = this.client.CLIdClient;
      wclient.CLIsAdmon = false;
      this.clientService.getClientByIdNoAdmin(wclient).subscribe(
        result=>{
          if(result.entity.length > 0){
            this.client = result.entity[0];  
          }else{
            this.notify.showNotification('top','center','El cliente no existe.', 4);
          }
          
        }
      )
    }   
  }

  guardar(form: NgForm){
    if(form.invalid){
      this.notify.showNotification('top','center','Debe digitar todos los campos', 4);
      return;
    }else{

      let user = JSON.parse(localStorage.getItem('currentuser')) as UserModel;
      this.client.CLUsuMod = user.CLIdClient; 
      debugger;
      this.clientService.updateClient(this.client).subscribe(
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

  clear(){
    this.client = new UserModel();
  }

}
