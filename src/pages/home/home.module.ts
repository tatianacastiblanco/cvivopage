import { ChatPageModule } from './../chat/chat.module';
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';
import { ChatPage } from '../chat/chat';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicImageLoader,
    ChatPageModule,
    
  ],
  exports:[
    HomePage
  ],
  entryComponents:[
    ChatPage
  ]
})
export class MovieDetailsPageModule {



}
