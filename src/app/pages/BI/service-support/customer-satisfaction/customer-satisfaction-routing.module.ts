import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSatisfactionPage } from './customer-satisfaction.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSatisfactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSatisfactionPageRoutingModule {}
