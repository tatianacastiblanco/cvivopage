
import { IonicPageModule } from 'ionic-angular';
import { ComingSoonPage } from './coming-soon';
import { NgCalendarModule  } from 'ionic2-calendar';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
@NgModule({
  declarations: [
    ComingSoonPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(ComingSoonPage),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}]
 
})
export class ComingSoonPageModule {}
