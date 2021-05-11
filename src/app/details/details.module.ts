import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

export class LazyLoadImageHooks extends IntersectionObserverHooks {
  setup(attributes: Attributes) {
    // attributes.offset = 10;
    attributes.defaultImagePath = './assets/loading.svg';
    attributes.errorImagePath = './assets/cancel.svg';
    return super.setup(attributes);
  }
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    SharedDirectivesModule,
    LazyLoadImageModule
  ],
  declarations: [DetailsPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks}],
})
export class DetailsPageModule {}
