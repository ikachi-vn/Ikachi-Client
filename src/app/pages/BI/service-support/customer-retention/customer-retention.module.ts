import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerRetentionPageRoutingModule } from './customer-retention-routing.module';

import { CustomerRetentionPage } from './customer-retention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRetentionPageRoutingModule
  ],
  declarations: [CustomerRetentionPage]
})
export class CustomerRetentionPageModule {}
