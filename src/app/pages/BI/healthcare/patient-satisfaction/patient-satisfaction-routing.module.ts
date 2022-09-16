import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientSatisfactionPage } from './patient-satisfaction.page';

const routes: Routes = [
  {
    path: '',
    component: PatientSatisfactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientSatisfactionPageRoutingModule {}
