import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingKpiPageRoutingModule } from './marketing-kpi-routing.module';

import { MarketingKpiPage } from './marketing-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketingKpiPageRoutingModule
  ],
  declarations: [MarketingKpiPage]
})
export class MarketingKpiPageModule {}
