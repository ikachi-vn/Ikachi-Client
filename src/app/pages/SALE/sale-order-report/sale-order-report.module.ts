import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleOrderReportPageRoutingModule } from './sale-order-report-routing.module';

import { SaleOrderReportPage } from './sale-order-report.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ShareChartComponentsModule } from 'src/app/components/charts/share-chart-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    NgOptionHighlightModule,
    ShareChartComponentsModule,
    SaleOrderReportPageRoutingModule,
  ],
  declarations: [SaleOrderReportPage ]
})
export class SaleOrderReportPageModule {}
