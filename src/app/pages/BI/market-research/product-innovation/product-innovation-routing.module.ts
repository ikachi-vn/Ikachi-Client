import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductInnovationPage } from './product-innovation.page';

const routes: Routes = [
  {
    path: '',
    component: ProductInnovationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductInnovationPageRoutingModule {}
