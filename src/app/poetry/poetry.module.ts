import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoetryPageRoutingModule } from './poetry-routing.module';

import { PoetryPage } from './poetry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoetryPageRoutingModule
  ],
  declarations: [PoetryPage]
})
export class PoetryPageModule {}
