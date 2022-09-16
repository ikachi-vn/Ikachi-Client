import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkforceDashboardPageRoutingModule } from './workforce-dashboard-routing.module';

import { WorkforceDashboardPage } from './workforce-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkforceDashboardPageRoutingModule
  ],
  declarations: [WorkforceDashboardPage]
})
export class WorkforceDashboardPageModule {}
