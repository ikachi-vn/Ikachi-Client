import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSatisfactionPageRoutingModule } from './customer-satisfaction-routing.module';

import { CustomerSatisfactionPage } from './customer-satisfaction.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    CustomerSatisfactionPageRoutingModule
  ],
  declarations: [CustomerSatisfactionPage]
})
export class CustomerSatisfactionPageModule {}
