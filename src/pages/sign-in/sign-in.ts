import { TabsPage } from './../tabs/tabs';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ViewController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { AuthService } from "../../services/AuthService";
import { TermsPage } from '../terms/terms';

@IonicPage()
@Component({
  selector: "page-sign-in",
  templateUrl: "sign-in.html"
})
export class SignInPage {
  loginData: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {
    this.loginData = { email: "", password: "" };
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignInPage");
  }


   /**
  * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
  * @param key codigo de la tecla presionada
  */
 keyPress(key){
  if( key === 13){
    this.signIn();
  }
};

  /**
   * Funcion para intercabiar el tipo de input de las contraseñas, para poder revelar y ocultar la  contraseña.
   */
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  };


  /**
   * Funcion para realizar el inicio de sesion en firebase auth, se utiliza el metodo signIn() de authService, retorna resolve o reject.
   */
  async signIn() {
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Ingresando..."
    });

    loading.present();

    await this.authService
      .signIn(this.loginData.email, this.loginData.password)
      .then(x => {  
          if(x.user.emailVerified === true){
            loading.dismiss();
            this.navCtrl.setRoot(TabsPage);
          } else{
            loading.dismiss();
            this.showAlert('Nos has verificado tu cuenta','Error de verificación ');
          } 
          
        
      },error =>{
        
        loading.dismiss();
        loading.dismiss();
        switch (error.code) {
           case 'auth/invalid-email':
            this.showAlert('Revisa el formato del correo ejemplo@cun.edu.co','Correo Invalido')
            break;
           case 'auth/user-disabled':
            this.showAlert('Este usuario esta suspendido.','Usuario deshabilitado')
            break;
            case 'auth/user-not-found':
            this.showAlert('No encontramos este usuario en nuestros registros. ','Usuario no existe')
            break;
            case 'auth/wrong-password':
            this.showAlert('La contraseña escrita es incorrecta  . ','Contraseña incorrecta')
            break;
        
          default:
            break;
        }        
        
      })
      
  };



/**
 * Funcion para ir a la pagina de registro 
 */
  goToSignUp() {
    if (this.navCtrl.canGoBack()) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.push("SignUpPage");
    }
  };

  goToHelp(){
    if (this.navCtrl.canGoBack()) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.push("HelpPage");
    }
  }

  /**
   * Funcion para incluir en el stack de navegacion la pagina de recuperar contraseña
   */
  openForgotPass() {
   this.navCtrl.push('ForgotPasswordPage')
  }

  showAlert(message,title){
    let alert = this.alertCtrl.create({
      title:title,
      message:message,
      buttons :[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass:'btnalert-cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',  
          cssClass: 'btnalert-ok',
          handler: data =>{            
          }
         }
      ]
    }).present();
  };
  
  terminos() {
    this.navCtrl.push(TermsPage)
  }

}
