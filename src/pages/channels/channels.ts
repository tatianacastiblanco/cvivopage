import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { VimeoService } from './../../services/VimeoService';
import { map } from 'rxjs-compat/operator/map';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  @ViewChild(Slides) private slides: Slides;
  constructor(public navCtrl: NavController, private vimeoService:VimeoService, public navParams: NavParams) {
  
  
    let subs = this.vimeoService.getChannelsFromFB().subscribe(res=>{
      console.log(res)
    })

  }

  ionViewDidLoad() {
   
 
  }
  public ngOnInit() {
   
  }

}
