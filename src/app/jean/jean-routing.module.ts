import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeanPage } from './jean.page';

const routes: Routes = [
  {
    path: '',
    component: JeanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeanPageRoutingModule {}
