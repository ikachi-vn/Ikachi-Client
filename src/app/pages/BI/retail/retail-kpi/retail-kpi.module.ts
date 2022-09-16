import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailKpiPageRoutingModule } from './retail-kpi-routing.module';

import { RetailKpiPage } from './retail-kpi.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RetailKpiPageRoutingModule
  ],
  declarations: [RetailKpiPage]
})
export class RetailKpiPageModule {}
