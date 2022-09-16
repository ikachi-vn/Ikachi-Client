import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurgeryAppointmentDetailPage } from './surgery-appointment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SurgeryAppointmentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurgeryAppointmentDetailPageRoutingModule {}
