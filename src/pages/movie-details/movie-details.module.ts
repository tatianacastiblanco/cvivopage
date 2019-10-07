import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailsPage } from './movie-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MovieDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailsPage),
    ComponentsModule
    
  ],
})
export class MovieDetailsPageModule {}
