import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, observable } from 'rxjs';
import { AlertController, ToastController } from 'ionic-angular';
import { UserService } from './UserService';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { UserInfo } from '../data/UserInfo';

@Injectable()
export class ChatService {
   private uid:any;
  constructor(private socket: Socket,
              private afAuth:AngularFireAuth,
              private db :AngularFirestore,
              private UserService:UserService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {

   
  };

   joinChat(){
    this.socket.connect();
    const promise = new Promise((resolve,reject)=>{

      this.afAuth.authState.subscribe((user: firebase.User) => {
        if (user) {    
          
          this.uid = user.uid;
          this.UserService.getUserInfo(this.uid).then((userInfo:UserInfo)=>{
            
          this.socket.emit('set-nickname',userInfo.name)
          resolve({email:userInfo.email, name:userInfo.name})
           
          },err =>{
            reject(err);
            this.showAlert(err,'Error userInfo');
          })
        } else {
          this.uid = null;
        } 
    
      });
    })   
    return promise; 
   };
getUsers(){
    let observable = new Observable(observer =>{
      this.socket.on('users-changed',data =>{
        observer.next(data);        
      })
    })
    return observable
  };

  sendMessage(message:string){
    this.socket.emit('add-message',{text:message});
    // this.message = '';
  };

  getMessages(){
    let observable = new Observable(observer =>{
      this.socket.on('message',data =>{
        observer.next(data);
      })
    })
    return observable
  };

  /**
   * Funcion que trae de base de datos todas las fotos de los usuairos en Base64
   * @returns retorna un array de objetos con la forma [{base64:'',name:''}]
   */
 

  // getEspecificPhoto(name){

  //   let allPhotos = [];
  //   this.db.collection('photos').valueChanges().subscribe(objResult =>{
  //    objResult.forEach(element => {
  //      console.log
  //      allPhotos.push(element)
  //    })
  //    console.log(allPhotos)
  // }) 
   
   
    // photosArray.forEach(element =>{
    //   if(element['name'] === name){
    //     photo = element['base64'];
    //   }    
    // })
    // return photo
  

  disconnect(){
    this.socket.disconnect();
  }

  showToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000      
    });
    toast.present();
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
