
import { HomeScreenGroup } from "./../data/HomeScreenGroup";
import { Component, NgZone, ViewChild } from "@angular/core";
import { Platform, AlertController, NavController, Nav, AlertOptions  } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";
import { DownloadService } from "../services/DownloadService";
import { TabsPage } from "../pages/tabs/tabs";
import { AnalyticsProvider } from "../providers/analytics/analytics";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "SignInPage";
  homeScreenGroups: HomeScreenGroup[] = [];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private authService: AuthService,
    private userService: UserService,
    private downloadService: DownloadService,
    private zone: NgZone,
    private alertCtrl:AlertController,
    private ga: GoogleAnalytics,
    public analyticsProvider:AnalyticsProvider
  ) {

    // this.initializeApp();
    this.platform.ready().then(() => {
      // okay, so the platform is ready and our plugins are available.
      // here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // this.downloadService.load();

    this.authService.afAuth.authState.subscribe((user: firebase.User) => {

      if (user.emailVerified === true) {
        let dataToPost:object = {email:user.email,timestamp:new Date().toLocaleString()};
        this.userService.postLog(dataToPost);

         this.rootPage = "RedeemPage";

        // this.userService.addUser(user);

        // this.zone.run(() => {
        //   this.rootPage = TabsPage;
        // });
      }
    }, error => {
      console.error(JSON.stringify(error));
    });
  }


  // tslint:disable-next-line: typedef
  showAlert(message: string,title: string) {
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
          cssClass: "btnalert-ok"
         }
      ]
    }).present();
  }

  // tslint:disable-next-line: typedef
  ionViewDidEnter() {
    this.analyticsProvider.startTrackerWithId("UA-138040570-1");
  }
  // initializeApp() {
  //   this.analyticsProvider.startTrackerWithId('UA-138040570-1');
  //   this.nav.viewDidEnter.subscribe((view) => {
  //     console.log(view.instance.constructor.name);
  //     alert('entra');
  //   });
  // }
}
