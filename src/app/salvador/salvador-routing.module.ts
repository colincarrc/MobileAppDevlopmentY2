import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvadorPage } from './salvador.page';

const routes: Routes = [
  {
    path: '',
    component: SalvadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvadorPageRoutingModule {}
