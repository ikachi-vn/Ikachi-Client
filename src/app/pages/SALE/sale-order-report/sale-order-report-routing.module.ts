import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleOrderReportPage } from './sale-order-report.page';

const routes: Routes = [
  {
    path: '',
    component: SaleOrderReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleOrderReportPageRoutingModule {}
