import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfoDashboardPage } from './cfo-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CfoDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CfoDashboardPageRoutingModule {}
