import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesOpportunityPage } from './sales-opportunity.page';

const routes: Routes = [
  {
    path: '',
    component: SalesOpportunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesOpportunityPageRoutingModule {}
