import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesOrderOverviewPageRoutingModule } from './sales-order-overview-routing.module';

import { SalesOrderOverviewPage } from './sales-order-overview.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    SalesOrderOverviewPageRoutingModule
  ],
  declarations: [SalesOrderOverviewPage]
})
export class SalesOrderOverviewPageModule {}
