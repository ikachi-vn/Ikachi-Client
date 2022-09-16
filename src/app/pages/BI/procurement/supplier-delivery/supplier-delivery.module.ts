import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierDeliveryPageRoutingModule } from './supplier-delivery-routing.module';

import { SupplierDeliveryPage } from './supplier-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierDeliveryPageRoutingModule
  ],
  declarations: [SupplierDeliveryPage]
})
export class SupplierDeliveryPageModule {}
