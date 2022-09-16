import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePerformancePageRoutingModule } from './employee-performance-routing.module';

import { EmployeePerformancePage } from './employee-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePerformancePageRoutingModule
  ],
  declarations: [EmployeePerformancePage]
})
export class EmployeePerformancePageModule {}
