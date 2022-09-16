import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesCycleLengthPageRoutingModule } from './sales-cycle-length-routing.module';

import { SalesCycleLengthPage } from './sales-cycle-length.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesCycleLengthPageRoutingModule
  ],
  declarations: [SalesCycleLengthPage]
})
export class SalesCycleLengthPageModule {}
