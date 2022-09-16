import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesConversionPage } from './sales-conversion.page';

const routes: Routes = [
  {
    path: '',
    component: SalesConversionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesConversionPageRoutingModule {}
