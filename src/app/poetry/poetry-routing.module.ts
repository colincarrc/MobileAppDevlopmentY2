import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoetryPage } from './poetry.page';

const routes: Routes = [
  {
    path: '',
    component: PoetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoetryPageRoutingModule {}
