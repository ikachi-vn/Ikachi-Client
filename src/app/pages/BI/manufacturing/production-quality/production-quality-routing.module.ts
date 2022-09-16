import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionQualityPage } from './production-quality.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionQualityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionQualityPageRoutingModule {}
