import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostManagementPage } from './cost-management.page';

const routes: Routes = [
  {
    path: '',
    component: CostManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostManagementPageRoutingModule {}
