import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleKpiPageRoutingModule } from './sale-kpi-routing.module';

import { SaleKpiPage } from './sale-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleKpiPageRoutingModule
  ],
  declarations: [SaleKpiPage]
})
export class SaleKpiPageModule {}
