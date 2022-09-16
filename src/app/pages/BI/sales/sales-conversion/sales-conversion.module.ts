import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesConversionPageRoutingModule } from './sales-conversion-routing.module';

import { SalesConversionPage } from './sales-conversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesConversionPageRoutingModule
  ],
  declarations: [SalesConversionPage]
})
export class SalesConversionPageModule {}
