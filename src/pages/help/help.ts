import { AuthService } from './../../services/AuthService';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ticket } from './help';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelpDeskProvider } from './../../providers/help-desk/help-desk';
import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';
import * as moment from 'moment';
export interface ticket {
  subject:string
  id?:number,
  description?:string,
  status?: number,
  email?:string,
  phone?:string,
  created_at?:string,
  statusText?:string,
  statusColor:string
}


@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  segementTickets:string = 'create'
  myPhoto:string ; 
  myTickets:ticket[]=[];
  userEmail:string;
  hideSegment:boolean ;
  private ticketFormGroup : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private emailComposer: EmailComposer,
              private ticketService: HelpDeskProvider,
              private nativeStorage : NativeStorage,
              private formBuilder: FormBuilder,
              private alertCtrl:AlertController,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private platform: Platform) {

                this.authService.afAuth.user.subscribe(user => {
                  if(user == null){
                    this.hideSegment = true;
                  }
                  this.userEmail = user.email
                
                 });

                this.ticketFormGroup = this.formBuilder.group({
                  email: ['', Validators.required],
                  phone: ['', Validators.required],
                  subject: ['', Validators.required],
                  description: ['', Validators.required],
                  type: ['', Validators.required],
                  status:[''],
                  priority:['']
                });

              

                if (this.platform.is('cordova')) {
                  this.nativeStorage.getItem('imgSource').then(res =>{
                    if(res){
                      this.myPhoto = res;
                    }else{
                      this.myPhoto = 'assets/imgs/photo-camera.png'
                    }
                  },err => this.myPhoto = 'assets/imgs/photo-camera.png')
                }else{
                  this.myPhoto = 'assets/imgs/user.png'
  }
}

  getTickets() {
    this.myTickets = [];
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cargando tickets..."
    });

    loading.present();
    this.ticketService.getMyTickets().subscribe((res:ticket[]) =>{

      if(res.length == 0){
        this.showAlert('No tienes tickets','Tickets');
        this.segementTickets = 'create';
        loading.dismiss();
      }

     let temp = res;
      temp.forEach(element => {
        let objTemp: ticket = {id:0,subject:'',created_at:'',status:0,statusColor:''};

        switch (element.status) {
            case 2:
            objTemp.statusText = 'Abierto'
            objTemp.statusColor = 'Abierto'
            break;
            case 3:
            objTemp.statusText = 'En progreso'
            objTemp.statusColor = 'Pendiente'
            break;
            case 4:
            objTemp.statusText = 'Resuelto'
            objTemp.statusColor = 'Cerrado'
            break;
        
          default:
            break;
        }
        
        objTemp.created_at =moment(element.created_at).startOf('day').fromNow();
        objTemp.subject = element.subject;
        objTemp.id = element.id
        this.myTickets.push(objTemp)
        loading.dismiss();
      });

    }, err =>{
      console.log(err)
      loading.dismiss();
      this.showAlert(err,'Error al cargar tickets')
    } );     
  };

  /**
 * Funcion que se ejecuta al hacer swipe down en la pantalla
 * para recargar el video 
 * @param refresher 
 */
doRefresh(refresher) {  
      
    this.getTickets()
    refresher.complete();
  setTimeout(() => {
    refresher.complete()
  }, 3000);
 
};

  createTicket(){
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Creando ticket..."
    });

    loading.present();
    this.ticketFormGroup.controls.status.setValue(2);
    this.ticketFormGroup.controls.priority.setValue(1);
    this.ticketFormGroup.controls.email.setValue(this.userEmail);    
    this.ticketService.createTicket(this.ticketFormGroup.value).subscribe(result=>{
      this.ticketFormGroup.reset();
      
      loading.dismiss()
      this.showAlert('Tu ticket fue creado con el ID: '+ result['id'],'Ticket Creado')
    },err =>{
      loading.dismiss()
      this.showAlert(err,'Error al crear ticket')
    })
  }

  showAlert(message,title){
    let alert = this.alertCtrl.create({
      title:title,
      message:message,
      buttons :[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass:'btnalert-cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',  
          cssClass: 'btnalert-ok',
          handler: data =>{            
          }
         }
      ]
    }).present();
  };

}
