import { Component, NgZone } from "@angular/core";
import { IonicPage, LoadingController, ModalController,AlertController, Platform, App, NavController } from "ionic-angular";
import * as moment from 'moment';
import firebase from "firebase";
import { SignInPage } from '../sign-in/sign-in';

@IonicPage()
@Component({
  selector: "page-coming-soon",
  templateUrl: "coming-soon.html"
})


//
// Planes de negocio 1 2 3  :Planea tu negocio
// Espíritu y proyecto :Proyectarse para emprender
// Opciones de grado: Ideas en acción
// Pensamiento cunista :Transformando con tus ideas
// //
export class ComingSoonPage {
  private loaded = false;
  eventSource = [];
  HorarioLunes = [
    {inicio:8,final:9,materia:''}, {inicio:10,final:11,materia:''}, {inicio:12,final:13,materia:'Opción de grado III'},
    {inicio:14,final:15,materia:'Proyecto de vida'},{inicio:16,final:17,materia:''},
  ]
  HorarioMartes = [
    {inicio:8,final:9,materia:''}, {inicio:10,final:11,materia:''}, {inicio:12,final:13,materia:'Opción de grado II'},
    {inicio:14,final:15,materia:''},{inicio:16,final:17,materia:'Opción de grado I'},
  ]
  HorarioMiercoles = [
    {inicio:8,final:9,materia:''}, {inicio:10,final:11,materia:''}, {inicio:12,final:13,materia:'Espiritu Emprendedor'},
    {inicio:14,final:15,materia:'Proyecto de vida'},{inicio:16,final:17,materia:''},
  ]
  HorarioJueves = [
    {inicio:8,inicio1:0,final:8,final1:15, materia:'TIPS propuesta de valor por Diego Casas'}, {inicio:8,inicio1:20,final:8,final1:35,materia:'TIPS redes sociales para emprendedores por Jhon Gonzalez'}, {inicio:8,inicio1:40,final:8,final1:55, materia:'TIPS finanzas personales para emprendedores por Miguel Gutierrez'},
    {inicio:9,inicio1:0, final:9,final1:15, materia:'TIPS objetivos de desarrollo sotenible para emprendedores por German Sarmiento'}
  ]
  HorarioViernes = [
    {inicio:8,final:9,materia:''}, {inicio:10,final:11,materia:''}, {inicio:12,final:13,materia:'Proyecto de vida'},
    {inicio:14,final:15,materia:'Opción de grado II'},{inicio:16,final:17,materia:' Opción de grado III'},
  ]
  selectedDay  = new Date();
  title:string;

  calendar={
    mode:'day',
    currentDate:this.selectedDay,
    labelAllDay:'Eventos',
    lockSwipes:false
  }

  private width:number;
  private heigth:number;
  menu = true;
  menuhead = 'parrilla';

  constructor ( private loadingCtrl: LoadingController,
                private navCtrl: NavController,
                private modalCtrl: ModalController,
                private alertCtrl:AlertController,
                private Platform: Platform,
                private app: App,
                private zone: NgZone,
  ) {
      
    this.events(1,this.HorarioLunes)
    this.events(2,this.HorarioMartes)
    this.events(3,this.HorarioMiercoles)
    this.events(4,this.HorarioJueves)
    this.events(5,this.HorarioViernes)

    Platform.ready().then(() => {
      this.width = Platform.width();
      this.heigth = Platform.height();
      
      if(this.width <= 992){
        this.menu = true       
      } else {
        this.menu = false
      }     
    });    
  }

  ionViewDidLoad() {    
    this.getComingSoon();
  }

  getComingSoon(): void {
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cargando parrilla..."
    });

    loading.present();

    setTimeout(() => {
      this.loaded = true;
      loading.dismiss();
    }, 2000);

    // this.comingSoonService.getComingSoon().then((result: any) => {
    //   this.comingSoonList = result.comingSoonList;
    //   this.loaded = true;
    //   loading.dismiss();
    // });
  }

onCurrentDateChanged($event){

}
reloadSource(startTime, endTime){}

onEventSelected(event){
let start = moment(event.startTime).calendar();     
let end = moment(event.endTime).calendar();
this.showAlert('<b>Desde:</b> '+ start +'<br><b>Hasta:</b> ' +end,''+event.title)

}
onViewTitleChanged(title){
  this.title = title;
}
onTimeSelected(ev){
  // this.selectedDay = ev.selectedTime;
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

events(index,arrayclasesDia){


    
      var d = new Date(),
      year = d.getFullYear()    
      d.setDate(index);
    // Get the first Monday in the month
    while (d.getDay() !== index) {
        d.setDate(d.getDate() + 1);
    }
    // Get all the other Mondays in the month
    while (d.getFullYear() === year) {
        var pushDate = new Date(d.getTime());

        arrayclasesDia.forEach(clase => {
          let obj = {
            title: clase.materia,
            startTime: new Date(pushDate.getFullYear(),pushDate.getMonth(),pushDate.getDate(),clase.inicio,clase.inicio1),
            endTime : new Date(pushDate.getFullYear(),pushDate.getMonth(),pushDate.getDate(),clase.final,clase.final1)
          }
          this.eventSource.push(obj);
        });    
       
        d.setDate(d.getDate() + 7);
    }

  }

  
  home() {
    this.navCtrl.setRoot('HomePage');
  }
  
  parrilla() {
    this.navCtrl.setRoot('ComingSoonPage')
  }
  
  buscar() {
    this.navCtrl.setRoot('SearchPage')
  }
  perfil() {
    this.navCtrl.setRoot('ProfilePage')
  }
  
  signOut() {
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cerrando sesión..."
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
  
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.zone.run(() => {
            this.app.getRootNav().setRoot(SignInPage);
          });
        });
    }, 500);
  };
}

