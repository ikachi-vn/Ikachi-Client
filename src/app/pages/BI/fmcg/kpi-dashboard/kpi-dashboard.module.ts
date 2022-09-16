import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KpiDashboardPageRoutingModule } from './kpi-dashboard-routing.module';

import { KpiDashboardPage } from './kpi-dashboard.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    KpiDashboardPageRoutingModule
  ],
  declarations: [KpiDashboardPage]
})
export class KpiDashboardPageModule {}
