import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailStorePageRoutingModule } from './retail-store-routing.module';

import { RetailStorePage } from './retail-store.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RetailStorePageRoutingModule
  ],
  declarations: [RetailStorePage]
})
export class RetailStorePageModule {}
