import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailsPage } from './movie-details';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    MovieDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailsPage),
    IonicImageLoader
    
  ],
})
export class MovieDetailsPageModule {}
