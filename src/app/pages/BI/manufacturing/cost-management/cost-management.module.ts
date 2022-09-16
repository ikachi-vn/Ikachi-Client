import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostManagementPageRoutingModule } from './cost-management-routing.module';

import { CostManagementPage } from './cost-management.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    CostManagementPageRoutingModule
  ],
  declarations: [CostManagementPage]
})
export class CostManagementPageModule {}
