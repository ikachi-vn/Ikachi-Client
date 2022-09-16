import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialPerformancePageRoutingModule } from './financial-performance-routing.module';

import { FinancialPerformancePage } from './financial-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialPerformancePageRoutingModule
  ],
  declarations: [FinancialPerformancePage]
})
export class FinancialPerformancePageModule {}
