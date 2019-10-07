import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
  ]
  @ViewChild(Slides) private slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true; 
    this.slides.slidesPerView = 1.5;
    this.slides.slidesOffsetBefore = 10;
    this.slides.slidesOffsetAfter = 45;
    this.slides.spaceBetween = 25;
    this.slides.initialSlide = 1

    
    this.slides.coverflow = {
      rotate: 20,
      stretch: 50,
      depth: 10,
      modifier: 1,
      slideShadows: true,
    }
  }
  public ngOnInit() {
   
  }

}
