import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeanPageRoutingModule } from './jean-routing.module';

import { JeanPage } from './jean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeanPageRoutingModule
  ],
  declarations: [JeanPage]
})
export class JeanPageModule {}
