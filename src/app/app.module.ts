

import { VimeoService } from './../services/VimeoService';
import { ForgotPasswordPageModule } from './../pages/forgot-password/forgot-password.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from "@ionic-native/file";
import { IonicStorageModule } from '@ionic/storage';
import firebase from "firebase";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthService } from '../services/AuthService';
import { ComingSoonService } from '../services/ComingSoonService';
import { HomeScreenService } from '../services/HomeScreenService';
import { MoviesService } from '../services/MoviesService';
import { TvShowsService } from '../services/TvShowsService';
import { CategoriesService } from '../services/CategoriesService';
import { UserService } from '../services/UserService';
import { DownloadService } from '../services/DownloadService';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite';
import { SocketIoModule,SocketIoConfig} from 'ng-socket-io';
import { ChatService} from '../services/ChatService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Camera } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import { EmailComposer } from '@ionic-native/email-composer';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Base64 } from '@ionic-native/base64';
import { IonicImageLoader } from 'ionic-image-loader';

import { HelpDeskProvider } from '../providers/help-desk/help-desk';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AnalyticsProvider } from '../providers/analytics/analytics';
registerLocaleData(localeEs);
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA16S38r7aWz0FJBlZf5c3RVyyPYOkaXY0",
  authDomain: "cvivo-84315.firebaseapp.com",
  databaseURL: "https://cvivo-84315.firebaseio.com",
  projectId: "cvivo-84315",
  storageBucket: "cvivo-84315.appspot.com",
  messagingSenderId: "818528881307",
  timestampsInSnapshots: true
};
const config: SocketIoConfig = {url:'https://chatcvivotest.herokuapp.com/',options:{}};

firebase.initializeApp(firebaseConfig);
// EmbedVideo.forRoot()
@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

    IonicImageLoader.forRoot(),
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    SignInPageModule,
    SignUpPageModule,
    ForgotPasswordPageModule,
    NgCalendarModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    AuthService,
    ComingSoonService,
    HomeScreenService,
    MoviesService,
    TvShowsService,
    CategoriesService,
    UserService,
    DownloadService,
    ChatService,
    Facebook,
    GooglePlus,
    TwitterConnect,
    FileTransfer,     
    File,
    SQLite,
    NativeStorage,
    SpeechRecognition,
    GoogleAnalytics,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VimeoService,
    Camera,Base64,
    EmailComposer,
    HelpDeskProvider,
    AnalyticsProvider   

  ]
})
export class AppModule {}
