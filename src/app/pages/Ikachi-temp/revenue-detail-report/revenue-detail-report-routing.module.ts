import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueDetailReportPage } from './revenue-detail-report.page';

const routes: Routes = [
  {
    path: '',
    component: RevenueDetailReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenueDetailReportPageRoutingModule {}
