import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSupportKpiPage } from './customer-support-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSupportKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSupportKpiPageRoutingModule {}
