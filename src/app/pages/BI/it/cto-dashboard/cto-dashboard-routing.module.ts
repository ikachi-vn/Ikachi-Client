import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtoDashboardPage } from './cto-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CtoDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtoDashboardPageRoutingModule {}
