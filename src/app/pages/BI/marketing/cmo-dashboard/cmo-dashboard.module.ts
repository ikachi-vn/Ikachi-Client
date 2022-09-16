import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmoDashboardPageRoutingModule } from './cmo-dashboard-routing.module';

import { CmoDashboardPage } from './cmo-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmoDashboardPageRoutingModule
  ],
  declarations: [CmoDashboardPage]
})
export class CmoDashboardPageModule {}
