import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalPerformancePage } from './hospital-performance.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalPerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalPerformancePageRoutingModule {}
