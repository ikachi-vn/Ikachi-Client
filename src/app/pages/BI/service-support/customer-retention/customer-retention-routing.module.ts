import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerRetentionPage } from './customer-retention.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerRetentionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRetentionPageRoutingModule {}
