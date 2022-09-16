import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalePerformancePageRoutingModule } from './sale-performance-routing.module';

import { SalePerformancePage } from './sale-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalePerformancePageRoutingModule
  ],
  declarations: [SalePerformancePage]
})
export class SalePerformancePageModule {}
