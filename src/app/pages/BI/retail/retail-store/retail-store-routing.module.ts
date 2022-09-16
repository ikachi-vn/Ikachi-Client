import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailStorePage } from './retail-store.page';

const routes: Routes = [
  {
    path: '',
    component: RetailStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailStorePageRoutingModule {}
