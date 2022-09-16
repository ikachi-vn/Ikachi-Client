import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurementCostPage } from './procurement-cost.page';

const routes: Routes = [
  {
    path: '',
    component: ProcurementCostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurementCostPageRoutingModule {}
