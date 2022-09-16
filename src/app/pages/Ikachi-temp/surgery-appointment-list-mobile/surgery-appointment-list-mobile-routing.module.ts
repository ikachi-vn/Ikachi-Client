import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurgeryAppointmentListMobilePage } from './surgery-appointment-list-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: SurgeryAppointmentListMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurgeryAppointmentListMobilePageRoutingModule {}
