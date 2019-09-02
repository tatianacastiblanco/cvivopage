import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ComingSoonPage } from '../coming-soon/coming-soon';
import { DownloadsPage } from '../downloads/downloads';
import { ProfilePage } from '../profile/profile';
import { NavController, Platform } from 'ionic-angular';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ComingSoonPage;
  tab4Root = ProfilePage;

  private width:number;
  private height:number;

  constructor(private navCtrl:NavController, private platform: Platform,) {
    platform.ready().then(() => {
      this.width = platform.width();
      console.log(this.width);
      if(this.width >= 992){
        this.navCtrl.setRoot(HomePage)
        console.log(this.width);
      }
     
    });
   
  }

}
