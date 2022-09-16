import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItCostPageRoutingModule } from './it-cost-routing.module';

import { ItCostPage } from './it-cost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItCostPageRoutingModule
  ],
  declarations: [ItCostPage]
})
export class ItCostPageModule {}
