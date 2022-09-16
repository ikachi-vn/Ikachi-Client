import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailKpiPage } from './retail-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: RetailKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailKpiPageRoutingModule {}
