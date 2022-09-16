import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingPerformancePage } from './marketing-performance.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingPerformancePageRoutingModule {}
