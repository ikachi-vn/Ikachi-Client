import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePerformancePage } from './employee-performance.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePerformancePageRoutingModule {}
