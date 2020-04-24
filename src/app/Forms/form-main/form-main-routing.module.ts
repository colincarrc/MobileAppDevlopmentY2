import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMainPage } from './form-main.page';

const routes: Routes = [
  {
    path: '',
    component: FormMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMainPageRoutingModule {}
