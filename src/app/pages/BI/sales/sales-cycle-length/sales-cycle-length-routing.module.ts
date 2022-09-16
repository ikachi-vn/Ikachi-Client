import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesCycleLengthPage } from './sales-cycle-length.page';

const routes: Routes = [
  {
    path: '',
    component: SalesCycleLengthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesCycleLengthPageRoutingModule {}
