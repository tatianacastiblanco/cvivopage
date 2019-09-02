import { AuthService } from './../../services/AuthService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HelpDeskProvider {

  private userEmail: string = "";
  private freshDeskurl:string = 'https://cvivo.freshdesk.com/api/v2/';

  constructor(public http: HttpClient,private authService: AuthService) {
    this.authService.afAuth.user.subscribe(user => {
      this.userEmail = user.email
     });
  
  }

  

  getMyTickets(){

   
     
    const options = {
      headers:{
        "Content-Type":"application/json",
        "Authorization":"am9IRTRFbWp0V09rZDg2ZU1DVA=="
      }
    }

    return this.http.get(this.freshDeskurl + 'tickets?email='+this.userEmail+'&order_by=status&order_type=desc ',options);
  }

  createTicket(ticket){

    const options = {
      headers:{
        "Content-Type":"application/json",
        "Authorization":"am9IRTRFbWp0V09rZDg2ZU1DVA=="
      },
      body:JSON.stringify(ticket)
    } 
    return this.http.post(this.freshDeskurl+'tickets',options.body,options)
  }

}
