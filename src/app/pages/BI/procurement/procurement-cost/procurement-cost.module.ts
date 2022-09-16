import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurementCostPageRoutingModule } from './procurement-cost-routing.module';

import { ProcurementCostPage } from './procurement-cost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurementCostPageRoutingModule
  ],
  declarations: [ProcurementCostPage]
})
export class ProcurementCostPageModule {}
