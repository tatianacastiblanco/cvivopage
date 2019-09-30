import { AboutUsPage } from './about-us';

import { IonicPageModule } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AboutUsPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(AboutUsPage),
  ],
  exports:[AboutUsPage],
 
})
export class ComingSoonPageModule {}
