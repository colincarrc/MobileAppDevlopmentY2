import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PabloPageRoutingModule } from './pablo-routing.module';

import { PabloPage } from './pablo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PabloPageRoutingModule
  ],
  declarations: [PabloPage]
})
export class PabloPageModule {}

var slides = document.querySelector('ion-slides');

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
slides.options = {
  initialSlide: 1,
  speed: 400
}
