import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleKpiPage } from './sale-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: SaleKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleKpiPageRoutingModule {}
