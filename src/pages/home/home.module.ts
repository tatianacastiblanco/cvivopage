import { ChatPageModule } from './../chat/chat.module';
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';
import { ChatPage } from '../chat/chat';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicImageLoader,
    ChatPageModule,
    ComponentsModule,
    
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
