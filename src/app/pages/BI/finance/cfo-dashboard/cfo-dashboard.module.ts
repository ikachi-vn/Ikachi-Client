import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CfoDashboardPageRoutingModule } from './cfo-dashboard-routing.module';

import { CfoDashboardPage } from './cfo-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CfoDashboardPageRoutingModule
  ],
  declarations: [CfoDashboardPage]
})
export class CfoDashboardPageModule {}
