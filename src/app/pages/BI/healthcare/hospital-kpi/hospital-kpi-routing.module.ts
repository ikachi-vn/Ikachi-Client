import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalKpiPage } from './hospital-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalKpiPageRoutingModule {}
