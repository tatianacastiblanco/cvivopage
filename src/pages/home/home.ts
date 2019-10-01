

import { AuthService } from './../../services/AuthService';
import { VimeoService } from './../../services/VimeoService';
import { UserInfo } from './../../data/UserInfo';
import { ChatService } from './../../services/ChatService';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, NgZone,  ElementRef,ViewChildren, QueryList } from '@angular/core';
import {
          NavController,
          LoadingController,
          Platform,
          AlertController,
          ToastController,
          Events,
          App,
          IonicPage,
          ModalController,
          ModalOptions
} from "ionic-angular";
import { Slides } from 'ionic-angular';
import { Helper } from "../../data/Helper";
import { HomeScreenGroupItem } from "../../data/HomeScreenGroupItem";
import { HomeScreenGroup } from "../../data/HomeScreenGroup";
import {  EmbedVideoService } from 'ngx-embed-video';
import { NativeStorage } from '@ionic-native/native-storage';
import {DomSanitizer} from '@angular/platform-browser';
import firebase from "firebase";
@IonicPage()

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  @ViewChildren(Slides) slides: QueryList<Slides>;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
  homeScreenGroups: HomeScreenGroup[] = [];
  iframe_html: any;
  segementHome = 'list';
  chatEnable:any;
  booleanchatEnable:boolean = false;
  messages = [];
  nickname = '';
  emailUserChat = ''
  message = '';
  photosArray = new Array;
  loaded:boolean = false;
  out:boolean = true;
  iscordova:boolean;
 private event;
 private width:number;
 private heigth:number;
 heightFrame:any
 widthFrame: any;
 menu = true;
 refrescarpag = false;
 menuhead = 'home';
 cur_segment: any
 isModalOpen:boolean = false;
 badge:any;
  //slides: any;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private alertCtrl: AlertController,
    private db:AngularFirestore,
    private embedService: EmbedVideoService,
    private chatService : ChatService,
    private toastCtrl: ToastController,
    private VimeoService: VimeoService,
    private nativeStorage: NativeStorage,
    private authService :AuthService,
    private _DomSanitizationService: DomSanitizer,
    public events: Events,
    private app: App,
    private zone: NgZone,
    private element: ElementRef,
    public modalCtrl: ModalController
  ) {
    this.gethomeVideo();
    this.getChatSection();      
    
    platform.ready().then(() => {
      this.width = platform.width();
      this.heigth = platform.height();
      
      if(this.width <= 992){
        this.menu = true
        this.refrescarpag = false
        this.widthFrame = "100%";
        this.heightFrame = 200;
      
      } else{
        this.menu = false
        this.refrescarpag = true
        this.widthFrame = "95%";
        this.heightFrame = 650;
      }
      
    });   
    this.chatService.getMessages().subscribe(message => { 
      if(this.isModalOpen == false){
        this.messages.push(message);
        this.badge = this.messages.length;    
      }else{
        this.badge = 0;
      }       
        
    })   



     
    
    };

    presentChatModal() {
      let options:ModalOptions={
        showBackdrop:false,
        enableBackdropDismiss:true,
        cssClass: 'custom-modal'
      }
      let chatModal = this.modalCtrl.create('ChatPage',{},options);
      chatModal.present().then(() =>{
          this.badge = 0;
      });

      chatModal.onDidDismiss(callback =>{
        this.isModalOpen = false;
      })
      
    }
  
  ionViewWillEnter(){ 
    // this.gethomeVideo();
    // this.getChatSection(); 
    // this.events.subscribe('user:photoChanged', (imageBase64) => {      
    //   this.photosArray = [];
    //   this.messages = [];
    //   this.db.collection('photos').valueChanges().forEach(elem =>{
    //   this.photosArray.push(elem);
    //     // this.messages = [];
    //   })
    //   this.loadMessges(); 
    // });

    // if(this.photosArray.length == 0) {
    //   this.db.collection('photos').valueChanges().forEach(elem =>{
    //     this.photosArray.push(elem);
    //   })
    // }
  }

  ionViewWillLeave() {
    this.iframe_html = '';
  }
  ionViewDidLeave() {
    this.iframe_html = '';
  }
  
  /**
   * funcion que utiliza la api de vimeo para traer las categorias de Vimeo
  **/

  getHomeGroups() { 
    
    this.nativeStorage.getItem('homeScreenGroups').then(res=>{
      console.log(res)
    })
    
    this.VimeoService.getHomeScreenGroups().subscribe(res=> {       
      this.homeScreenGroups = []       
      let collection:any = res
      collection.forEach(element => {  
        let homeGropuModel = new HomeScreenGroup();        
        homeGropuModel.name = element.name;
        homeGropuModel.groupId = element.metadata.connections.videos.uri;
        homeGropuModel.groupItems = [];
        this.homeScreenGroups.push(homeGropuModel)   
        this.homeScreenGroups = Helper.shuffle(this.homeScreenGroups)
      });
      this.homeScreenGroups.forEach(element => {
/************************** En  esta seccion se recorre cada categoria y se obtiene los videos de la misma por meido de la api de vimeo *******************************************/
        this.VimeoService.getHomeScreenGroupsVideos(element).subscribe(result=> {
          let videos:any = result         
          videos.data.forEach(item => {
            let video = new HomeScreenGroupItem();
            video.name = item.name;
            video.picture = item.files[2].link;
            video.description = item.description;
            video.detailsPicture = item.pictures.sizes[10].link;
            video.movieId = item.uri.split('/')[2];
            element.groupItems.push(video)
            element = Helper.shuffle(element)
          });
        })
      });
    })
  }

 /**
  * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
  * @param key codigo de la tecla presionada
  */

  keyPress(key) {
    if( key === 13 &&  this.message !== '') {
      this.sendMessage()
    }
  };

  /**
   * Funcion que sirve para obtener los mensajes de BD cuando el usuario cierra la aplicacion 
   */

  loadMessges() {     
    if(this.messages.length === 0 ) {
      this.db.collection('Config').valueChanges().subscribe(res=> {
        this.event = res[0]['chatEvent'];
        if(res[0]['Vivo']) {
          var docref = this.db.collection('chats').doc(this.event).collection('chatLog',ref => ref.orderBy('created'));         
          docref.get().subscribe(result => {           
            result.forEach(res=> {  
              if (res.data().from !== undefined) {
                let ObjtResult;
                // this.photosArray[0].forEach(photo =>{  
                for (let index = 0; index < this.photosArray[0].length; index++) {
                  if(this.photosArray[0][index]['name'] === res.data().from) {
                    ObjtResult = {
                      created:res.data().created,
                      from: res.data().from,
                      text: res.data().text,
                      picture:this._DomSanitizationService.bypassSecurityTrustResourceUrl(this.photosArray[0][index]['base64'])                     
                    }                     
                  break;              
                  } else {
                    ObjtResult = {
                      created:res.data().created,
                      from: res.data().from,
                      text: res.data().text,
                      picture:'assets/imgs/user.png'
                    }  
                  }                 
                }
                this.messages.push(ObjtResult)  
              } else {
                let ObjtResult;
                ObjtResult = {
                  created:res.data().created,
                  from: res.data().from,
                  text: res.data().text,
                  picture:'assets/imgs/user.png'
                };
                this.messages.push(ObjtResult)   
              } 
            })
          })
        }      
      })
    }
  };

  /**
   * Funcion que se ejecuta cuando se activa la seccion del chat, al mismo tiempo
   * realiza la conexion con SOCKET.io, y llama la funcion getMessages() para obtener los mensajes del Socket
   */

  getChatSection() {    
    this.db.collection('Config').valueChanges().subscribe(res=> {      
      this.chatEnable =res[0]['Vivo']; 
      this.event = res[0]['chatEvent'];
      this.segementHome = this.chatEnable ? 'chat' : 'list';  
      if(this.chatEnable === true) {
        this.booleanchatEnable = true;
        if(this.nickname === '') {         
          this.chatService.joinChat().then((nickname: UserInfo) => {                
            this.nickname = nickname.name.toString(); 
            this.emailUserChat = nickname.email.toString();        
          })        
        }             
      } else {
        this.booleanchatEnable = false;
        this.chatService.disconnect();
        this.nickname = '';
        this.messages = [];
      };    
    },err => this.showAlert(err,'Error FbConfig'));  
  };

  /**
   * Funcion que realiza consulta a BD para obtener ID del evento, para luego obtener el IFRAME
   * seguro para efectuar el INNERHTML en el DOM.
   */

  gethomeVideo() {
    const promise = new Promise((resolve,reject)=> {
      this.db.collection('Config').valueChanges().subscribe(res=> {           
        this.iframe_html = this.embedService.embed_vimeo(res[0]['Idvivo'],{
          query:{autoplay:1, loop:1, color:'ffff', portrait: 0},                
          attr: { width:this.widthFrame, height: this.heightFrame }                 
        });
        resolve({videoConfig: res})
      },err =>{ reject(err)}); 
    })
    return promise;
  };
 
  /**
   * Funcion que se ejecuta automaticamnete cuando la vista termina de cargar.
   */

  ionViewDidLoad() {
    this.slides;
    //console.log(this.slides)
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cargando..."
    });
    loading.present();
    this.getHomeGroups()
    this.gethomeVideo().then(()=> {
      this.loadMessges();         
      this.getHomeGroups()
      setTimeout(() => {     
        loading.dismiss();
      }, 1000);  
    },err=> {
      loading.dismiss();
      this.showAlert(err,'Error de conexion')
    });  
    setTimeout(() => {     
      loading.dismiss();
    }, 2000);

    this.loaded = true;
  }

  /**
   * Funcion que envia un mensaje por meido de SOCKET.IO
   */

  sendMessage() { 
    if(this.message !== '') {
      this.chatService.sendMessage(this.message); 
      this.message = '';
    }  
  }

  /**
   * Funcion para abrir la pagina de detalles del video 
   * @param groupItem objeto con la informacion del video
   */

  goToGroupItemDetails(groupItem: HomeScreenGroupItem) {
    this.navCtrl.push("MovieDetailsPage", { movieId: groupItem });   
  }; 
 
  /**
   * Funcion que se ejecuta al hacer swipe down en la pantalla
   * para recargar el video 
   * @param refresher 
   */

  doRefresh(refresher) {
    this.photosArray = [];
    this.messages = [];
    this.db.collection('photos').valueChanges().forEach(elem => {
     this.photosArray.push(elem);
     // this.messages = [];
    })
    this.loadMessges();      
    this.getHomeGroups()
    this.gethomeVideo().then(res => {
      console.log(res)
      refresher.complete();
    },err => {
      this.showAlert(err,'Error al cargar')
      refresher.complete();
    }).catch(()=> refresher.complete())
    setTimeout(() => {
      refresher.complete()
    }, 3000);   
  };

  /**
   * Funcion para mostrar un toaster con cualuiqer funcion/metodo
   * @param msg mensaje para mostrar en el toaster
   */

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000      
    });
    toast.present();
  };

  /**
   * Funcion para mostrar una alerta personalizada
   * @param message mensaje para mostrar en el body de la alerta
   * @param title  titulo para mostrar en el encabezado de la alerta
   */

  showAlert(message,title) {
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
          handler: data =>{ }
        }
      ]
    }).present();
  };

  getCurrentUserPhoto(name):string {   
    let photo;
    let tmp =true;
    let index = 0;
    if(name == undefined) {
      photo = 'assets/imgs/user.png'
    } else {
      do {        
        if (this.photosArray[0][index]['name'] === name) {
          photo = (this.photosArray[0][index]['base64']);
          tmp = false;
        } else {
          index += 1;
        };
        if(index == this.photosArray[0].length) {
          photo = 'assets/imgs/user.png'
          tmp = false;
        }
      } while (tmp);  
    }        
    return photo;
  }

  getOtherUserPhoto(name) {
    return this.db.collection('photos',ref => ref.where('name','==',name)).valueChanges();
  }

  ///////////////////////////////////////////////////////////  FUNCIONES NO UTLIZADAS EN ESTA VERSION /////////////////////////////////////////////////////////
  // getHomeScreenGroups() {
  //   var loading = this.loadingCtrl.create({
  //     spinner: "bubbles",
  //     content: "Loading Home..."
  //   });

  //   loading.present();

  //   this.homeScreenService.getHomeScreenGroups().then((result: any) => {
  //     this.homeScreenGroups = result.homeScreenGroups;

  //     this.homeScreenGroups.forEach(homeScreenGroup => {
  //       // Get home screen movies first
  //       this.homeScreenService
  //         .getHomeScreenGroupMovies(homeScreenGroup)
  //         .then((result: any) => {
  //           result.homeScreenGroupMovies.forEach((movie: Movie) => {
  //             var movieGroupItem = new HomeScreenGroupItem();

  //             movieGroupItem.itemId = movie.movieId;
  //             movieGroupItem.picture = movie.picture;
  //             movieGroupItem.isMovie = true;

  //             homeScreenGroup.groupItems.push(movieGroupItem);
  //           });

  //           // Then get home screen tv shows
  //           this.homeScreenService
  //             .getHomeScreenGroupTvShows(homeScreenGroup)
  //             .then((result: any) => {
  //               result.homeScreenGroupTvShows.forEach((tvShow: TvShow) => {
  //                 var movieGroupItem = new HomeScreenGroupItem();

  //                 movieGroupItem.itemId = tvShow.tvShowId;
  //                 movieGroupItem.picture = tvShow.picture;
  //                 movieGroupItem.isMovie = false;

  //                 homeScreenGroup.groupItems.push(movieGroupItem);
  //               });

  //               // Finally, shuffle them
  //               homeScreenGroup.groupItems = Helper.shuffle(
  //                 homeScreenGroup.groupItems
  //               );
  //             });
  //         });
  //     });

  //     loading.dismiss();
  //   });
  // }
  // playVideoTrailer() {
  //   if (!this.platform.is("cordova")) {
  //     let alert = this.alertController.create({
  //       title: "Run on device",
  //       subTitle: "This feature is only available on a device!",
  //       buttons: ["Dismiss"]
    //     });
  
  //     alert.present();
  //     return;
  //   }

  //   let options: StreamingVideoOptions = {
  //     successCallback: () => {
  //       console.log("Video played");
  //     },
  //     errorCallback: e => {
  //       console.log("Error streaming");
  //     },
  //     orientation: "landscape",
  //     shouldAutoClose: true,
  //     controls: true
  //   };

  //   this.streamingMedia.playVideo(
  //     "https://firebasestorage.googleapis.com/v0/b/ionnetflix-72e25.appspot.com/o/Watch%20the%20Black%20Lightning%20Trailer.mp4?alt=media&token=3331cd39-f38b-4add-8d83-cec4c213b571",
  //     options
  //   );
  // };

  home() {
    this.navCtrl.setRoot('HomePage');
  }

  parrilla() {
    this.navCtrl.push('ComingSoonPage')
  }

  buscar() {
    this.navCtrl.push('SearchPage')
  }
  perfil() {
    this.navCtrl.push('ProfilePage')
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
            this.app.getRootNav().setRoot('SignInPage');
          });
        });
    }, 500);
  };

  terminos() {
    this.navCtrl.push('TermsPage')
  }
  public moveNext(index: number){     
      
      this.slides.toArray()[index].slideNext();     
    
  }

  public movePrev(index: number){  
    
      this.slides.toArray()[index].slidePrev();  
  }

}
