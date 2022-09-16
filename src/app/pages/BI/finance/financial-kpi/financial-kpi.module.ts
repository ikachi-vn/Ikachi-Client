import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialKpiPageRoutingModule } from './financial-kpi-routing.module';

import { FinancialKpiPage } from './financial-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialKpiPageRoutingModule
  ],
  declarations: [FinancialKpiPage]
})
export class FinancialKpiPageModule {}
