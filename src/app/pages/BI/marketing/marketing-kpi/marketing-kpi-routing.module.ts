import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingKpiPage } from './marketing-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingKpiPageRoutingModule {}
