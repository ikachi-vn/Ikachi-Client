import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalePerformancePage } from './sale-performance.page';

const routes: Routes = [
  {
    path: '',
    component: SalePerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalePerformancePageRoutingModule {}
