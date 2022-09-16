import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierDeliveryPage } from './supplier-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierDeliveryPageRoutingModule {}
