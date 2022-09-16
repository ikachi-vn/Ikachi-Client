import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceBalanceSheetPageRoutingModule } from './finance-balance-sheet-routing.module';

import { FinanceBalanceSheetPage } from './finance-balance-sheet.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { ShareChartComponentsModule } from 'src/app/components/charts/share-chart-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    ReactiveFormsModule,
    ShareChartComponentsModule,
    FinanceBalanceSheetPageRoutingModule,
  ],
  declarations: [FinanceBalanceSheetPage]
})
export class FinanceBalanceSheetPageModule {}
