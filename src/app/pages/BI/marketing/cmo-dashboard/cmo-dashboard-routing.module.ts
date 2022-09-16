import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmoDashboardPage } from './cmo-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CmoDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmoDashboardPageRoutingModule {}
