import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingPerformancePageRoutingModule } from './marketing-performance-routing.module';

import { MarketingPerformancePage } from './marketing-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketingPerformancePageRoutingModule
  ],
  declarations: [MarketingPerformancePage]
})
export class MarketingPerformancePageModule {}
