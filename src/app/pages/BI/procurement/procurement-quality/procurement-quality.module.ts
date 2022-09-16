import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurementQualityPageRoutingModule } from './procurement-quality-routing.module';

import { ProcurementQualityPage } from './procurement-quality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurementQualityPageRoutingModule
  ],
  declarations: [ProcurementQualityPage]
})
export class ProcurementQualityPageModule {}
