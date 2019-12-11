
import { Component, SimpleChanges, Input, ɵConsole} from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  LoadingController,
  ViewController,
  NavParams
} from "ionic-angular";
import { AuthService } from "../../services/AuthService";
import { AngularFireAuth } from "angularfire2/auth";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SQLite, SQLiteObject  } from "@ionic-native/sqlite";
import { AngularFirestore } from "angularfire2/firestore";
import { TermsPage } from "../terms/terms";
import undefined from "firebase/empty-import";



// tslint:disable-next-line: interface-name
export interface User {
  name:string;
  email:string;
  password: string;
  checked:boolean;
}

@IonicPage()
@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html"
})
export class SignUpPage   {
  signUpSegment: string = "cancel";
  passwordType: string = "password";
  passwordIcon: string = "eye-off";
  public signUpForm : FormGroup;
  errors = {correo:false,confirmPass:false,minLength:false};
  emailPattern: string;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public afs : AngularFirestore,
    private sqlite: SQLite,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private navParams: NavParams

  ) {

    this.emailPattern = "^[a-zA-Z0-9._%+-]+@cun.edu.co";

 this.signUpForm = this.formBuilder.group({
      name:["",Validators.required],
      email:["",[Validators.required, Validators.pattern(this.emailPattern)]],
      password: ["", Validators.required],
      password2: ["", Validators.required],
      checked:[ false, Validators.requiredTrue]
    },{validator:this.checkPasswords});

  }



  goToHelp():void {
      this.navCtrl.push("HelpPage");

  }


  showAlert(message:string,title:string):void {
    let alert:any = this.alertCtrl.create({
      title:title,
      message:message,
      buttons :[
        {
          text: "Cancelar",
          role: "cancel",
          cssClass:"btnalert-cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Ok",
          cssClass: "btnalert-ok",

         }
      ]
    }).present();
  }


  checkPasswords(group: FormGroup):any {
  let pass:string = group.controls.password.value;
  let confirmPass:string = group.controls.password2.value;

    return pass === confirmPass ? true : { notSame: true };
  }

  hideShowPassword():void {
     this.passwordType = this.passwordType === "text" ? "password" : "text";
     this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
  }

  signIn():void {
    this.navCtrl.pop().then(()=> {
      this.navCtrl.setRoot("SignInPage");
    });

  }

/**
 * Funcion para crear un registro de nuevo usuario en firebase,
 * dentro de esta funcion se encuentran subfunciones para realizar el regstro
 */
  async signUp():Promise<any> {

    let user:User = this.signUpForm.value;

  var loading:any = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Registrando..."
    });
    loading.present();

    try {

      /**
       * funcion de angularFirebase para crear un nuevo usuario con email / password
       */
      this.afAuth.auth
      .createUserWithEmailAndPassword( user.email, user.password)
        .then(userResult => {
          loading.dismiss();
          let email:any = user.email;
          let name:any = user.name;
          let uid:any = userResult.user.uid;
          let newUser:any= userResult.additionalUserInfo.isNewUser;




          /**
           * Funcion para crear documento en firebase
           * con los datos del nuevo usuario (nombre, email, uid).
           */
          this.afs.collection("users")
          .doc(uid).set({email,name,uid})
          .then(fsRes=> {
            console.log(fsRes);

            if(newUser) {

              this.afAuth.auth.currentUser.sendEmailVerification().then(res => {
                this.showAlert("Hemos enviado un link al correo "+ email + " para verificar tu cuenta","Verfica tu Email");
              });
              this.navCtrl.push("SignInPage");
              // this.navCtrl.insert(0,TabsPage);
              // this.navCtrl.popToRoot();
            }
          },err => {
            loading.dismiss();
            this.showAlert(err,"Error AFST");
          });

        },err => {
          loading.dismiss();
          switch (err.code) {
            case "auth/invalid-email":
            this.showAlert("Revisa el formato del correo ejemplo@cun.edu.co","Correo Invalido");
            break;
              case "auth/email-already-in-use":
              this.showAlert("Este correo ya se encuentra registrado","Correo en uso");
              break;
             case "auth/operation-not-allowed":
              this.showAlert("Este usuario se encuetra inactivo. ","Usuario inactivo");
              break;
            case "auth/weak-password":
              this.showAlert("Esta contraseña no cumple con los requerimientos de seguridad  . ","Contraseña Insegura");
              break;
            default:
              break;
          }
         });

    } catch(err) {
      this.showAlert(err,"Error FnSgup");
    }

  }

  terminos():void {
    this.navCtrl.push("TermsPage");
  }
}
