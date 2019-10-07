import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'SearchPage';
  tab3Root = 'ComingSoonPage';
  tab4Root = 'ProfilePage';

  private width:number;
  private height:number;

  constructor(private navCtrl:NavController, private platform: Platform,) {
    platform.ready().then(() => {
      this.width = platform.width();
      console.log(this.width);
      if(this.width >= 992){
        this.navCtrl.setRoot('HomePage')
        console.log(this.width);
      }
     
    });
   
  }

}
