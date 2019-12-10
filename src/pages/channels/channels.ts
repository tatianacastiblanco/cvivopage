import { AuthService } from './../../services/AuthService';
import { App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


import { Channel } from './../../data/Channel';
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { VimeoService } from './../../services/VimeoService';
import { map } from 'rxjs-compat/operator/map';
import { DocumentChangeAction } from 'angularfire2/firestore';
import { TabsPage } from '../tabs/tabs';
import firebase from "firebase";



@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {
  public slidePages = [
    { text: 'Slide 1', color: 'red' },
    { text: 'Slide 2', color: 'blue' },
    { text: 'Slide 3', color: 'green' },
    { text: 'Slide 4', color: 'orange' },
    { text: 'Slide 5', color: 'magenta' },
    { text: 'Slide 6', color: 'brown' },
    { text: 'Slide 7', color: 'gray' },
    { text: 'Slide 8', color: 'yellow' },
    { text: 'Slide 9', color: 'orange' },
    { text: 'Slide 10', color: 'magenta' },
  ]
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  channels:Channel[] = [];
  showVideo:boolean= false;
  urlVideo:string;
  menu:any;
  private zone: NgZone;
  private app: App
  @ViewChild(Slides) private slides: Slides;
  constructor(private authService: AuthService,public navCtrl: NavController,private loadingCtrl: LoadingController,private Platform: Platform, private vimeoService:VimeoService, public navParams: NavParams) {

    this.authService.afAuth.authState.subscribe((user: firebase.User) => {

      if (user === null) {      
        this.navCtrl.setRoot('SignInPage')
        
      }
    }, error => {
      console.error(JSON.stringify(error));
    });
    
    
    Platform.ready().then(() => {
      let width = Platform.width();
      
      if(width <= 992){
        this.menu = true
        
        
      }else{
        this.menu = false
      }     
    }); 
  
  }

  ionViewDidLoad() {   

  this.getChannels();
 
  };


  private getChannels(){
    let subs = this.vimeoService.getChannelsFromFB().subscribe((_channels)=>{
      this.channels = [];
      _channels.forEach(_channel => {
        let id = _channel.payload.doc.id;
        let img = 'assets/channels/2.jpg';
        let data = _channel.payload.doc.data();
        this.channels.push({id,img,...data} as Channel);
        
      });
    })
  };

  private goToChannel(channel:any){   
     this.vimeoService.getCategoriesFromFB(channel).subscribe(categoriesArray=>{      
      sessionStorage.setItem('categories', JSON.stringify(categoriesArray));
      sessionStorage.setItem('channelName',channel.name);
      this.navCtrl.setRoot('HomePage',{channelName:channel.name})
    })
    
  }

  private playVideo(channel){
   this.showVideo= true;
   this.urlVideo = channel.urlVideo

  }

  public ngOnInit() {
   
  };

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
        
            this.navCtrl.setRoot('SignInPage');
            this.navCtrl.popAll();
            this.navCtrl.popToRoot();   
           
        });
    }, 500);
  };

}
