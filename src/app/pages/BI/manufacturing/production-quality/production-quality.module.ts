import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionQualityPageRoutingModule } from './production-quality-routing.module';

import { ProductionQualityPage } from './production-quality.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ProductionQualityPageRoutingModule
  ],
  declarations: [ProductionQualityPage]
})
export class ProductionQualityPageModule {}
