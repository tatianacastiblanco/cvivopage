
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ChatService } from './../../services/ChatService';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { UserInfo } from 'src/data/UserInfo';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

export interface Config { Idvivo: string; Vivo: boolean; chatEvent:string }

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  private ConfigCollection: any;
  configItems: Observable < Config[] > ;
  messages = [];
  nickname: string;
  emailUserChat: string;
  offStatus: boolean = false;
  private event;
  photosArray = new Array;
  message = '';
  isLoading: boolean = true;
  isTyping = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private db: AngularFirestore,
    private chatService: ChatService,
    private _DomSanitizationService: DomSanitizer,
    private alertCtrl: AlertController) {

      


    this.photosArray = [];
    this.messages = [];


    this.chatService.getMessages(sessionStorage.getItem('channelName').replace(/ /g,'')).subscribe(message => {
      let prueba = this.getCurrentUserPhoto(message['from']);
      
      message['picture'] = this._DomSanitizationService.bypassSecurityTrustResourceUrl(prueba);
      this.messages.push(message);
      setTimeout(() => {
        if (this.offStatus === false) {
          this.content.scrollToBottom(1000);
        }
      }, 50);
      let objToSave = {
        created: message['created'],
        from: message['from'],
        text: message['text']
      }
      this.db.collection('chats').doc(this.event).collection('chatLog').doc('chatLog' + message['created']).set(objToSave)
    })

  };
  //Fin constructor

  ionViewWillEnter() {
    this.getChatSection()
    if (this.photosArray.length == 0) {
      this.db.collection('photos').valueChanges().forEach(elem => {
        this.photosArray.push(elem);
      })
    }
  };


  /**
   * Observable para desactivar chat o para establecer nickname y evento.
   */
  getChatSection() {

    this.ConfigCollection = this.db.collection < Config > ('Config').doc(sessionStorage.getItem('channelName'));
    this.ConfigCollection.valueChanges().subscribe((res) => {
      if (!res['Vivo']) {
        this.viewCtrl.dismiss();
      }

      this.event = res['chatEvent'];
      this.chatService.joinChat(sessionStorage.getItem('channelName').replace(/ /g,''))
      .then((nickname: UserInfo) => {
        
        this.nickname = nickname.name.toString();
        this.emailUserChat = nickname.email.toString();
        this.loadMessges();
      }, err => this.showAlert(err, 'Error FbConfig'))
    })

  };

/**
 * Funcion para cargar mensajes y llenar array.
 */
  loadMessges() {

    if (this.messages.length === 0) {

      this.event = localStorage.getItem('chatEvent');

      var docref = this.db.collection('chats').doc(this.event).collection('chatLog', ref => ref.orderBy('created'));
      docref.get().subscribe(result => {
        result.forEach(res => {
          if (res.data().from !== undefined) {
            let ObjtResult;
            // this.photosArray[0].forEach(photo =>{  
            for (let index = 0; index < this.photosArray[0].length; index++) {
              if (this.photosArray[0][index]['name'] === res.data().from) {
                ObjtResult = {
                  created: res.data().created,
                  from: res.data().from,
                  text: res.data().text,
                  picture: this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.photosArray[0][index]['base64'])
                }
                break;
              } else {
                ObjtResult = {
                  created: res.data().created,
                  from: res.data().from,
                  text: res.data().text,
                  picture: 'assets/imgs/user.png'
                }
              }
            }
            this.messages.push(ObjtResult)
          } else {
            let ObjtResult;
            ObjtResult = {
              created: res.data().created,
              from: res.data().from,
              text: res.data().text,
              picture: 'assets/imgs/user.png'
            };
            this.messages.push(ObjtResult)
          }
        })
        setTimeout(() => {
          if (this.offStatus === false) {
            this.content.scrollToBottom(0);
            this.isLoading = false;

          }
        }, 0);
      })


    }
  };

  /**
   * Funcion que envia un mensaje por meido de SOCKET.IO
   */
  sendMessage() {
    if (this.message !== '') {
      this.chatService.sendMessage(this.message,sessionStorage.getItem('channelName').replace(/ /g,''))
      .subscribe(()=>{
        this.message = '';
      })
   
    }
  }

  getCurrentUserPhoto(name): string {
    let photo;
    let tmp = true;
    let index = 0;
    if (name == undefined) {
      photo = 'assets/imgs/user.png'
    } else {
      do {
        if (this.photosArray[0][index]['name'] === name) {
          photo = (this.photosArray[0][index]['base64']);
          tmp = false;
        } else {
          index += 1;
        };
        if (index == this.photosArray[0].length) {
          photo = 'assets/imgs/user.png'
          tmp = false;
        }
      } while (tmp);
    }
    return photo;
  }


  /**
   * Funcion para mostrar una alerta personalizada
   * @param message mensaje para mostrar en el body de la alerta
   * @param title  titulo para mostrar en el encabezado de la alerta
   */

  showAlert(message, title) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'btnalert-cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass: 'btnalert-ok',
          handler: data => {}
        }
      ]
    }).present();
  };


  /**
   * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
   * @param key codigo de la tecla presionada
   */
  keyPress(key) {
    this.isTyping = '';
    if (key === 13 && this.message !== '') {
      this.sendMessage()
      this.isTyping = ''
    }else{
      this.chatService.isTyping(this.nickname,sessionStorage.getItem('channelName').replace(/ /g,'')).subscribe(WhoTyping=>{
        this.isTyping =  WhoTyping['nickname']
        
      })
    }
  };
  isEmpty(ev){
    if(ev.data == null){
      this.isTyping = '';
      this.chatService.isTyping('',sessionStorage.getItem('channelName').replace(/ /g,''))
      .subscribe(()=>{

      })
    }
  }

  close() {
    this.viewCtrl.dismiss();
    this.chatService.disconnect();
    this.nickname = '';
    this.messages = [];

  }

};
