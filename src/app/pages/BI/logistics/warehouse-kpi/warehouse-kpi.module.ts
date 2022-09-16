import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehouseKpiPageRoutingModule } from './warehouse-kpi-routing.module';

import { WarehouseKpiPage } from './warehouse-kpi.page';
import { ShareModule } from 'src/app/share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    WarehouseKpiPageRoutingModule
  ],
  declarations: [
    WarehouseKpiPage,
  ]
})
export class WarehouseKpiPageModule {}
