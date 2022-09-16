import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialPerformancePage } from './financial-performance.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialPerformancePageRoutingModule {}
