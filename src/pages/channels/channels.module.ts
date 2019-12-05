import { ChannelsPage } from './channels';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TooltipsModule, TooltipController } from 'ionic-tooltips';

@NgModule({
  declarations: [
    ChannelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelsPage),
    TooltipsModule,
    
  ],
  exports:[
    ChannelsPage
  ],
  providers:[
    TooltipController
  ]
})
export class ChannelsPageModule {}
