import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehouseKpiPage } from './warehouse-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: WarehouseKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseKpiPageRoutingModule {}
