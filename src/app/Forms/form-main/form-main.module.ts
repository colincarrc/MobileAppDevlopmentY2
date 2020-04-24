import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMainPageRoutingModule } from './form-main-routing.module';

import { FormMainPage } from './form-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMainPageRoutingModule
  ],
  declarations: [FormMainPage]
})
export class FormMainPageModule {}
