
import { VimeoService } from './../../services/VimeoService';
import { ChatService } from './../../services/ChatService';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component,ViewChildren, QueryList } from '@angular/core';
import {
          NavController,
          Platform,
          AlertController,
          ToastController,
          Events,
          App,
          IonicPage,
          ModalController,
          ModalOptions
} from "ionic-angular";
import { Slides, NavParams } from 'ionic-angular';
import { Helper } from "../../data/Helper";
import { HomeScreenGroupItem } from "../../data/HomeScreenGroupItem";
import { HomeScreenGroup } from "../../data/HomeScreenGroup";
import {  EmbedVideoService } from 'ngx-embed-video';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  chatEnable:boolean = false;
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
 badge:any = 0;
 hideBadge = true;
 currentPageVar = 'home';
 segment ="inicio";
 channelName="";
  //slides: any;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private alertCtrl: AlertController,
    private db:AngularFirestore,
    private embedService: EmbedVideoService,
    private chatService : ChatService,
    private toastCtrl: ToastController,
    private VimeoService: VimeoService,
    public events: Events,    
    public modalCtrl: ModalController,
    private navParams: NavParams

  ) { 
       
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
        this.widthFrame = "92%";
        this.heightFrame = 500;
      }
      
    });

    this.db.collection('Config').doc(sessionStorage.getItem('channelName')).valueChanges().subscribe(res=> {      
      
      this.event = res['chatEvent'];
      this.chatEnable = res['Vivo'];
      this.hideBadge = !this.chatEnable;
      localStorage.setItem('chatEvent',this.event); 

      
})

  };
  //Fin cosntructor

     // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||                 
     // ||||||||||||||||||||||||||||||||||||||||||||||||||||    Inicio funciones    ||||||||||||||||||||||||||||||||||||||||||
     // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||


     // Funicone de ciclo de vida (lifecycle)

     ionViewWillLeave() {
      this.iframe_html = '';
    };
    ionViewDidLeave() {
      this.iframe_html = '';
    };

    ionViewWillEnter(){        
      this.event = localStorage.getItem('chatEvent');
      var docref = this.db.collection('chats').doc(this.event).collection('chatLog',ref => ref.orderBy('created')); 
      docref.valueChanges().subscribe(res=>{  
        
        if(!this.isModalOpen && res.length > 0 && this.chatEnable){
          this.badge += 1;
          this.hideBadge = false;

        }     
        
      })    
      this.gethomeVideo().then(()=> {})
    }

    /**
     *Funcion de ciclo de vida que se ejecuta cuando la vista ha cargado,  
     * ejecuta la funcion gethomeVideo() y posteriormente getHomeGroups() 
     * @memberof HomePage
     */
    ionViewDidLoad() {  
       
      this.gethomeVideo().then(()=> {
                
        this.getHomeGroups().then(()=>{
          setTimeout(() => {
            this.loaded = true;
          }, 1000);          
        }).catch(err=>{
          this.showAlert(err,'Error de conexion')
        });
      },err=> {
        this.showAlert(err,'Error de conexion')
      });
      
     };
    // Fin funciones ciclo de vida
 
    
    /**
     * Funcion que realiza consulta a BD para obtener ID del evento, para luego obtener el IFRAME
     * seguro para efectuar el INNERHTML en el DOM.  
     * @returns
     * @memberof HomePage
     */
    gethomeVideo() {
      this.channelName = sessionStorage.getItem('channelName');
      const promise = new Promise((resolve,reject)=> {
        this.db.collection('Config').doc(this.channelName).valueChanges().subscribe(res=> {        
          this.iframe_html = this.embedService.embed_vimeo(res['Idvivo'],{
            query:{autoplay:1, loop:1, color:'ffff', portrait: 0},                
            attr: { width:this.widthFrame, height: this.heightFrame, }                 
          });
          resolve({videoConfig: res})
        },err =>{ reject(err)}); 
      })
      return promise;
    };
    //Fin gethomeVideo()

  /**
   *funcion que utiliza la api de vimeo para traer las categorias de Vimeo
   *
   * @returns
   * @memberof HomePage
   */
  getHomeGroups() { 

    const promise = new Promise((resolve,reject)=> {      
    
    let collection:any = JSON.parse(sessionStorage.getItem('categories'));
    collection.forEach(element => {  
      let homeGropuModel = new HomeScreenGroup();         
      homeGropuModel.name = element.name;
      homeGropuModel.groupId = element.uri;
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
                 video.detailsPicture = item.pictures.sizes[6].link;
                 video.movieId = item.uri.split('/')[2];
                 element.groupItems.push(video)
                 element = Helper.shuffle(element)
               });
             },err => reject(err))
           });
           resolve();  
 })//Fin promesa
 return promise;
 };
 // Fin getHomeGroups()
 
/**
 * FUncion que abre la modal de chatPage
 *
 * @memberof HomePage
 */
presentChatModal() {

    let CcssClass = this.menu == true ?'':'custom-modal';

      let options:ModalOptions={
        showBackdrop:false,
        enableBackdropDismiss:true,
        cssClass: CcssClass
      }      
      
      let chatModal = this.modalCtrl.create('ChatPage',{},options);
      chatModal.onWillDismiss(()=>{
        this.isModalOpen = false;
      })
      chatModal.present().then(()=>{
        this.isModalOpen = true;
        this.badge = 0;
        this.hideBadge = true;
      })

      
    };
    //Fin presentChatModal()
  
 
  /**
   *
   *Funcion para abrir la pagina de detalles del video
   * @param {HomeScreenGroupItem} groupItem objeto con la informacion del video
   * @memberof HomePage
   */
  goToGroupItemDetails(groupItem: HomeScreenGroupItem) {
    this.navCtrl.push("MovieDetailsPage", { movieId: groupItem });   
  }; 

  /**
   * Funcion para mover un slide hacia la derecha
   * @param {number} index
   * @memberof HomePage
   */
  public moveNext(index: number){        
    this.slides.toArray()[index].slideNext();     
  };
//Fin moveNext()

/** 
 * Funcion para mover un slide hacia la izquierda
 * @param {number} index
 * @memberof HomePage
 */
public movePrev(index: number){  
   this.slides.toArray()[index].slidePrev();  
};
//Fin movePrev()
 
 
/**
 * Funcion que se ejecuta al hacer swipe down en la pantalla
 * para recargar el video 
 * @param {*} refresher
 * @memberof HomePage
 */
doRefresh(refresher) {       
   
  this.loaded = false;
    this.gethomeVideo().then(res => {
      this.getHomeGroups().then(()=>{
        refresher.complete();
        this.loaded = true;
      })     
    },err => {
      this.showAlert(err,'Error al cargar')
      refresher.complete();
    }).catch(()=> refresher.complete())
    setTimeout(() => {
      refresher.complete()
    }, 3000);   
  };

  goToChannels(){    
    this.navCtrl.setRoot('ChannelsPage');
  }

   
    

     // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||                 
     // ||||||||||||||||||||||||||||||||||||||||||||||||||||        Helpers         ||||||||||||||||||||||||||||||||||||||||||
     // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||

 
     
/**
 * Funcion para mostrar un toaster con cualuiqer funcion/metodo
 *
 * @param {*} msg cadena de texto para mostrar
 * @memberof HomePage
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
   * @memberof HomePage
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
  buscar() {
    this.navCtrl.setRoot('SearchPage')
  };
  parrilla() {
    this.navCtrl.setRoot('ComingSoonPage')
  };
  perfil() {
    this.navCtrl.setRoot('ProfilePage')
  };
  canales() {
    this.navCtrl.setRoot('ChannelsPage')
  }


} // Fin homePage
