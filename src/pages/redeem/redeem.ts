import { ViewController, AlertController } from 'ionic-angular';
import { Coupon } from './../../data/Coupon';
import { AuthService } from './../../services/AuthService';
import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RedeemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redeem',
  templateUrl: 'redeem.html',
})
export class RedeemPage {

  urlVideo:string;
  menu:boolean;
  coupon:any = {text:'',error:''};
  validRegex:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Platform: Platform,
              private authServie: AuthService,
              private viewCtrl: ViewController,
              private alertCtrl:AlertController) {

  

    Platform.ready().then(() => {
      let width = Platform.width();
      
      if(width <= 992){
        this.menu = true
        
        
      }else{
        this.menu = false
      }     
    });

    this.urlVideo = "https://player.vimeo.com/external/367123294.sd.mp4?s=d5ea4eb860dbb8086b75221f541433a694ad31c3&profile_id=165&oauth2_token_id=1180246399"
  }

  signIn() {
    if (this.navCtrl.canGoBack()) {
      this.viewCtrl.dismiss();
    } else {   
        this.navCtrl.setRoot('SignInPage');
      
      
    }
  
  };

  checkRegex(input){
    let regex = new RegExp('CP[0-9]+[A-Za-z0-9]+20+[0-9]')
    regex.test(input) == true ? this.validRegex = true :  this.validRegex = false;   
  }
  checkCoupon(e:Event){   

    e.preventDefault();
    e.stopPropagation();
    this.navCtrl.push('SignUpPage',{coupon:this.coupon.text});
    

    // this.authServie.checkCoupon(this.coupon.text).subscribe((res:any)=>{
    //   let couponRes:Coupon = res;
    //   if(res.length == 0){
    //     this.coupon.error = 'Este código no existe.'
    //   }else{
    //     if(couponRes[0].used || couponRes[0].finished){
    //       this.coupon.error = 'Este código ya se usó.'
    //     }else{
    //       this.navCtrl.pop().then(()=>{
    //         this.navCtrl.push('SignUpPage',{isCoupon:true,coupon:this.coupon.text});
    //       });
    //     }; 
        
    //   }
    // })
  }
}
  