import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from 'angularfire2/firestore';
import { EmailComposer } from '@ionic-native/email-composer';
import { AboutUsPage } from './../about-us/about-us';
import { Component, NgZone, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  App,
  LoadingController,
  AlertController,
  Loading
} from "ionic-angular";
import { SignInPage } from "../sign-in/sign-in";
import firebase from "firebase";
import { AuthService } from "../../services/AuthService";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Base64 } from '@ionic-native/base64';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComingSoonPage } from '../coming-soon/coming-soon';
import { SearchPage } from '../search/search';
import { TermsPage } from '../terms/terms';


declare global {
  interface Window { constraints : any; stream:any;canvas:any; video:any }
}

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {

  @ViewChild('snapShotCanvas') canvast:ElementRef;

  userName: string = "";
  userPicture: string = "";
  myPhoto:any;
  uid:string = '';
  image;
  colectionName:string = '';
  isCordova:boolean = false;
  constraints;
  video;
  canvasref;
  isCordovaWithoutCamera:boolean = false;
  isCordovaWithCamera:boolean = false;

  private width:number;
  private heigth:number;
  menu = true;
  menuhead = 'perfil';
 
  constructor(
    private navCtrl: NavController,
    private app: App,
    private loadingCtrl: LoadingController,
    private zone: NgZone,
    private authService: AuthService,
    private camera: Camera,
    private streamingMedia:StreamingMedia,
    private Platform: Platform,
    private nativeStorage:NativeStorage,
    private db : AngularFirestore,
    private alertCtrl: AlertController,
    private base64: Base64,
    private _DomSanitizationService: DomSanitizer,
    public events: Events
  ) { 

    Platform.ready().then(() => {
      this.width = Platform.width();
      this.heigth = Platform.height();
      console.log(this.width);
      console.log(this.heigth +'height');
      
      if(this.width <= 992){
        this.menu = true
        
        
      }else{
        this.menu = false
      }     
    }); 
    
    this.constraints = window.constraints  = {
      audio: false,
      video: true
    };

    this.authService.afAuth.user.subscribe(user => {    
     this.userName = user.email;
     this.uid = user.uid;
     this.db.collection('photos').doc(this.uid).valueChanges().subscribe(photo =>{
       
       this.myPhoto = this._DomSanitizationService.bypassSecurityTrustResourceUrl(photo['base64']);
    })   
   
    });
  };


  async profilePhotobtn(e){

    // si esta en el navegador
    if (!this.Platform.is('cordova')) {     
      try {
        const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        this.handleSuccess(stream);
        e.target.disabled = true;
      
      } catch (e) {

        if(e.name === 'NotFoundError'){
          this.isCordovaWithCamera = false;
          this.isCordovaWithoutCamera = true;
        }else{
          this.handleError(e);
        }
        
      }  
    }else{
      this.openCamera();
    }
  }


  /**
   * if web rtc video media is succes
   * @param stream 
   */
  handleSuccess(stream) {

    this.isCordova = false;

   
    this.canvasref = this.canvast.nativeElement;
    this.canvasref.width = 480;
    this.canvasref.height = 360;

    this.isCordovaWithoutCamera = false;
    this.isCordovaWithCamera = true;
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', this.constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  };

  /**
   * take photo button
   */
  snapshotButton() {
    this.canvasref.getContext('2d').drawImage(this.video, 0, 0, 480, 360);
    let photoBase64= this.canvasref.toDataURL();

    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cargando..."
    });  
    loading.present();
    // Obtener el UID del usuario desde firebase para posteriromente guardar foto en base de datos con el nombre
    this.db.collection('users').doc(this.uid).get().subscribe(doc =>
      {   
        // Guardar en BD la foto {name:'',base64:''} 
         this.db.collection('photos').doc(this.uid).set({name:doc.data().name,base64:photoBase64})
          .then((res)=> {
            this.isCordovaWithCamera = false;
            loading.dismiss();
            this.showAlert('Tu foto se ha guardado','Bien'); 
            this.myPhoto = this._DomSanitizationService.bypassSecurityTrustResourceUrl(photoBase64)
            this.events.publish('user:photoChanged',photoBase64);})

  })
}


  /**
   * 
   * @param error if web rtc video fail
   */
   handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      let v = this.constraints.video;
      this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`,v);
    } else if (error.name === 'PermissionDeniedError') {
      this.errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.',error.name);
    }
    this.errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  /**
   * function to control de error of web rtc
   * @param msg 
   * @param error 
   */
   errorMsg(msg, error) {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }; 

  ionViewDidLoad() {     

    this.video = window.video = document.querySelector('video');
    if (this.Platform.is('cordova')) {
    

      this.nativeStorage.getItem('imgSource').then(res =>{
        if(res){
          this.myPhoto;
        }else{
          this.myPhoto = 'assets/imgs/photo-camera.png'
        }
      },err => this.myPhoto = 'assets/imgs/photo-camera.png')
    }else{
      this.isCordova = true;
      this.myPhoto = 'assets/imgs/user.png';
    }

    
  }

  goToUsers() {
    this.navCtrl.push("UsersPage");
  }

  goToHelp(){        
      this.navCtrl.push("HelpPage");      
  }

  goToNotifications() {
    this.navCtrl.push("NotificationsPage");
  }

  goToMyList() {
    this.navCtrl.push("MylistPage");
  }

  goToSettings() {
    this.navCtrl.push("SettingsPage");
  }

  goToAboutUs() {

    if (this.Platform.is('cordova')) {
      let options: StreamingVideoOptions = {
        successCallback: () => {
          console.log("Video played");
        },
        errorCallback: e => {
          console.log("Error streaming");
        },
        orientation: "landscape",
        shouldAutoClose: true,
        controls: true
      };
  
      this.streamingMedia.playVideo(
        "https://firebasestorage.googleapis.com/v0/b/cvivo-84315.appspot.com/o/C-VIVO%20introducci%C3%B3n%20v2.mp4?alt=media&token=c3610c01-6b2c-4c47-b009-396c513b4899",
        options
      );
    } else{
      this.navCtrl.push(AboutUsPage);
    } 
  };
    

  openCamera()
  {  

    if (this.Platform.is('cordova')) 
    {
      var loading = this.loadingCtrl.create({
        spinner: "bubbles",
        content: "Cargando..."
      });    

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,        
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation:true,
        allowEdit:true,
        targetWidth:100,
        targetHeight:100
      };
  
      // Abrir camara para tomar foto
      this.camera.getPicture(options).then((imageData) => 
      {
        // Codificar a base64 la foto tomada
        this.base64.encodeFile(imageData).then(res =>
          {
              loading.present();
              let imageBase64:string = res;
              // Obtener el UID del usuario desde firebase para posteriromente guardar foto en base de datos con el nombre
              this.db.collection('users').doc(this.uid).get().subscribe(doc =>
                {   
                  // Guardar en BD la foto {name:'',base64:''} 
                   this.db.collection('photos').doc(this.uid).set({name:doc.data().name,base64:res})
                    .then((res)=> {
                      loading.dismiss();
                      this.showAlert('Tu foto se ha guardado','Bien'); 
                      this.myPhoto = this._DomSanitizationService.bypassSecurityTrustResourceUrl(imageBase64)
                      this.events.publish('user:photoChanged',imageBase64);})
                    .catch((err)=> this.showAlert(err,'Error'))

                },err =>{ this.showAlert(err,'Error users'); loading.dismiss();})
           }); 
        this.nativeStorage.setItem('imgSource',imageData);
       }, (err) => {this.showAlert('err','Error de camara'); loading.dismiss(); });
     }
   };

  /**
   * Funcion  que se ejecuta cuando se selecciona una imagen desde web en el input file
   * @param $event recibe el target para obtener el "file"
   */
  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  /**
   * Funcion que sirve para leer el la foto seleccionada y convertirla en base 64 para poder almacenalra en BD
   * @param inputValue 
   */
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;  

      this.db.collection('users').doc(this.uid).get().subscribe(doc =>{
        this.colectionName = doc.data().name
        this.db.collection('photos', ref => ref.where('name','==',this.colectionName)).stateChanges().subscribe(res0=>{
          if(res0.length > 0){
            this.db.collection('photos').doc(res0[0].payload.doc.id).set({base64:this.image,name:this.colectionName}).then(()=>{
            this.showAlert('Tu foto se ha guardado','Bien');
            this.events.publish('user:photoChanged',this.image)
            this.myPhoto = this.image;
            return 
            
            },err =>  this.showAlert('Tu foto no se guardó ','Error'))
          }else{
            this.db.collection('photos').add({base64:this.image,name:this.colectionName}).then(()=>{
              this.showAlert('Tu foto se ha guardado','Bien');
              this.events.publish('user:photoChanged',this.image);
              this.myPhoto = this.image;
              return
              },err =>  this.showAlert('Tu foto no se guardó ','Error'))
          }
        },err =>{
         console.log(err)
        })    
       })

    }
    myReader.readAsDataURL(file);  
  };


/**
 * Alerta personalizada 
 * @param message 
 * @param title 
 */
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

  /**
   * Slair de sesion en firebase
   */
  home() {
    this.navCtrl.setRoot(HomePage);
  }
  
  parrilla() {
    this.navCtrl.push(ComingSoonPage)
  }
  
  buscar() {
    this.navCtrl.push(SearchPage)
  }
  perfil() {
    this.navCtrl.push(ProfilePage)
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

  terminos() {
    this.navCtrl.push(TermsPage)
  }

}
