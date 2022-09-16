import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryDetailReportPage } from './summary-detail-report.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryDetailReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryDetailReportPageRoutingModule {}
