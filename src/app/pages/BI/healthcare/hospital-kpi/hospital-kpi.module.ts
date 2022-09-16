import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalKpiPageRoutingModule } from './hospital-kpi-routing.module';

import { HospitalKpiPage } from './hospital-kpi.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    HospitalKpiPageRoutingModule
  ],
  declarations: [HospitalKpiPage]
})
export class HospitalKpiPageModule {}
