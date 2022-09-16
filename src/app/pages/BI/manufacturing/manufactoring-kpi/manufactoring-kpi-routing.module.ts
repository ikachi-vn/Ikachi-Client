import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManufactoringKpiPage } from './manufactoring-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: ManufactoringKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufactoringKpiPageRoutingModule {}
