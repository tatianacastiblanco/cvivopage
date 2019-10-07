import { Component, NgZone, Input } from '@angular/core';
import { NavController, LoadingController, App } from 'ionic-angular';
import firebase from "firebase";
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @Input()currentPage:string;
  text: string;
  menuhead:string='home';
  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private app: App,
    private zone: NgZone,
  ) {   

 


   
  };

     // ||||||||||||||||||||||||||||||||||||||||||||||||||||----------------------------------------||||||||||||||||||||||||||||||||||||||||||                 
     // ||||||||||||||||||||||||||||||||||||||||||||||||||||        Funciones Nav bar DESKTOP       ||||||||||||||||||||||||||||||||||||||||||
     // ||||||||||||||||||||||||||||||||||||||||||||||||||||----------------------------------------||||||||||||||||||||||||||||||||||||||||||

        
   
     home() {
      this.navCtrl.setRoot('HomePage');
    }
  
    parrilla() {
      this.navCtrl.setRoot('ComingSoonPage')
    }
  
    buscar() {
      this.navCtrl.setRoot('SearchPage')
    }
    perfil() {
      this.navCtrl.setRoot('ProfilePage')
    };

    terminos() {
      this.navCtrl.push('TermsPage')
    }
    
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
            this.zone.run(() => {
              this.app.getRootNav().setRoot('SignInPage');
            });
          });
      }, 500);
    };
  

}
