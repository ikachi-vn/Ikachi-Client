import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenueDetailReportPageRoutingModule } from './revenue-detail-report-routing.module';

import { RevenueDetailReportPage } from './revenue-detail-report.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    NgOptionHighlightModule,
    RevenueDetailReportPageRoutingModule
  ],
  declarations: [RevenueDetailReportPage]
})
export class RevenueDetailReportPageModule {}
