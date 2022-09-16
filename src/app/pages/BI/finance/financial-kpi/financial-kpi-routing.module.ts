import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialKpiPage } from './financial-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialKpiPageRoutingModule {}
