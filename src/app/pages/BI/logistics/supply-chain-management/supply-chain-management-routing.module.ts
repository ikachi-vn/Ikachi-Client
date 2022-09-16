import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplyChainManagementPage } from './supply-chain-management.page';

const routes: Routes = [
  {
    path: '',
    component: SupplyChainManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplyChainManagementPageRoutingModule {}
