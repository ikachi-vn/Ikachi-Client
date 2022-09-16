import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiDashboardPage } from './kpi-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: KpiDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpiDashboardPageRoutingModule {}
