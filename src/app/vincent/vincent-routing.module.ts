import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VincentPage } from './vincent.page';

const routes: Routes = [
  {
    path: '',
    component: VincentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VincentPageRoutingModule {}
