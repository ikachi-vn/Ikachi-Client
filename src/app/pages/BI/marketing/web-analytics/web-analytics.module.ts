import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebAnalyticsPageRoutingModule } from './web-analytics-routing.module';

import { WebAnalyticsPage } from './web-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebAnalyticsPageRoutingModule
  ],
  declarations: [WebAnalyticsPage]
})
export class WebAnalyticsPageModule {}
