import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    SearchPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    ComponentsModule,
    LottieAnimationViewModule.forRoot()
  ]
})
export class SearchPageModule {}
