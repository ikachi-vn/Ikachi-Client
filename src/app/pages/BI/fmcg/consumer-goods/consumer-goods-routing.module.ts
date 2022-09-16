import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumerGoodsPage } from './consumer-goods.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumerGoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerGoodsPageRoutingModule {}
