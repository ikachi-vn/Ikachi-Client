import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailAnalyticsPageRoutingModule } from './retail-analytics-routing.module';

import { RetailAnalyticsPage } from './retail-analytics.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RetailAnalyticsPageRoutingModule
  ],
  declarations: [RetailAnalyticsPage]
})
export class RetailAnalyticsPageModule {}
