import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurementKpiPageRoutingModule } from './procurement-kpi-routing.module';

import { ProcurementKpiPage } from './procurement-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurementKpiPageRoutingModule
  ],
  declarations: [ProcurementKpiPage]
})
export class ProcurementKpiPageModule {}
