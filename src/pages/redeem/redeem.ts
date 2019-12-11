import { ViewController, AlertController, ToastController } from "ionic-angular";
import { Coupon } from "./../../data/Coupon";
import { AuthService } from "./../../services/AuthService";
import { Platform } from "ionic-angular";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the RedeemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-redeem",
  templateUrl: "redeem.html",
})
export class RedeemPage {

  urlVideo:string;
  menu:boolean;
  coupon:any = {text:"",error:""};
  validRegex:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Platform: Platform,
              private authServie: AuthService,
              private viewCtrl: ViewController,
              private alertCtrl:AlertController,
              private toastCtrl:ToastController) {



    Platform.ready().then(() => {
      let width:number = Platform.width();

      if(width <= 992) {
        this.menu = true;


      } else {
        this.menu = false;
      }
    });

    this.urlVideo = "https://player.vimeo.com/external/367123294.sd.mp4?s=d5ea4eb860dbb8086b75221f541433a694ad31c3&profile_id=165&oauth2_token_id=1180246399";
  }


  signIn():void {
    if (this.navCtrl.canGoBack()) {
      this.viewCtrl.dismiss();
    } else {
        this.navCtrl.setRoot("SignInPage");


    }

  }

  checkRegex(input:string):void {
    let regex:RegExp = new RegExp("CP[0-9]+[A-Za-z0-9]+20+[0-9]");
    regex.test(input) === true ? this.validRegex = true :  this.validRegex = false;
  }
  checkData(data:any):boolean {
    let pass:string = data.password;
    let confirmPass:string = data.password2;
    let regex:RegExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(!regex.test(data.email)) {
            this.createToast(" Tu correo tiene que tener el siguiente formato ejemplo@dominio.com");
      return false;
    }
    if(!data.email || !data.name || !data.password || !data.password2) {
      this.createToast("Llena todos los campos");
      return false;
    }
    if(pass.length < 6 ) {
    this.createToast("la contraseña debe tener minimo 6 caracteres");
    return false;
  }
    if(pass !== confirmPass ) {
      this.createToast("Las contraseñas no coinciden");
      return false;
    }
      // return pass === confirmPass ? true : false;
      return true;
    }


  checkCoupon(e:Event):void {

    e.preventDefault();
    e.stopPropagation();
    // this.navCtrl.push('SignUpPage',{coupon:this.coupon.text});


    this.authServie.checkCoupon(this.coupon.text).subscribe((res:any)=> {
      let couponRes:Coupon = res;
      if(res.length === 0) {
        this.coupon.error = "Este código no existe.";
      } else {
        if(couponRes[0].used || couponRes[0].finished) {
          this.coupon.error = "Este código ya se usó.";
        } else {
          let alert:any = this.alertCtrl.create({
            title:"Registro",
            inputs: [
              {
                name: "email",
                placeholder: "Correo",
                type: "email"
              },
              {
                name: "name",
                placeholder: "Nombre completo",
                type: "text"
              },
              {
                name: "password",
                placeholder: "Contraseña"
              },
              {
                name: "password2",
                placeholder: "Confirmar contraseña"
              }
            ],
            buttons:[
              {
                text: "Cancelar",
                role: "cancel",
                cssClass:"btnalert-cancel"
              },
              {
                text: "Registrar",
                cssClass:"btnalert-ok",
                handler: data => {
                 if(this.checkData(data)) {
                  console.log('bien')
                 } else {
                  console.log('mal')
                 }
                }

              }
            ]
          }).present();
        }

      }
    });
  }

  createToast(message:string):void {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom"
    }).present();
  }


}
