import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSupportKpiPageRoutingModule } from './customer-support-kpi-routing.module';

import { CustomerSupportKpiPage } from './customer-support-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerSupportKpiPageRoutingModule
  ],
  declarations: [CustomerSupportKpiPage]
})
export class CustomerSupportKpiPageModule {}
