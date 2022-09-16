import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkforceDashboardPage } from './workforce-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: WorkforceDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkforceDashboardPageRoutingModule {}
