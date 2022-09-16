import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmcgFinancialPage } from './fmcg-financial.page';

const routes: Routes = [
  {
    path: '',
    component: FmcgFinancialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmcgFinancialPageRoutingModule {}
