

import { Channel } from './../../data/Channel';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { VimeoService } from './../../services/VimeoService';
import { map } from 'rxjs-compat/operator/map';
import { DocumentChangeAction } from 'angularfire2/firestore';
import { TabsPage } from '../tabs/tabs';



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
  @ViewChild(Slides) private slides: Slides;
  constructor(public navCtrl: NavController,private Platform: Platform, private vimeoService:VimeoService, public navParams: NavParams) {

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
   
  }

}
