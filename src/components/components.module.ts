import { SkeletonItemComponent } from './skeleton-item/skeleton-item';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [MenuComponent,SkeletonItemComponent],
	imports: [IonicModule],
	exports: [MenuComponent,SkeletonItemComponent]
})
export class ComponentsModule {}
