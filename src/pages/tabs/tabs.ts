import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SearchPage';
  tab3Root = 'ComingSoonPage';
  tab4Root = 'ProfilePage';  
  tab5Root = 'ChannelsPage';  
  homeParams:any;
  private width:number;
  private height:number;

  constructor(private navCtrl:NavController,private navParams:NavParams, private platform: Platform,) {
    this.homeParams = this.navParams.get('categories');
    platform.ready().then(() => {
      this.width = platform.width();
      console.log(this.width);
      if(this.width >= 992){
        this.navCtrl.setRoot('HomePage',this.homeParams)
        console.log(this.width);
      }
     
    });
   
  };

}
