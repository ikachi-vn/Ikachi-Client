import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfitAndLostPage } from './profit-and-lost.page';

const routes: Routes = [
  {
    path: '',
    component: ProfitAndLostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfitAndLostPageRoutingModule {}
