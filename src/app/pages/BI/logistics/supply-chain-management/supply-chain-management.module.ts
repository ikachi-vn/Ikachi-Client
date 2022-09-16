import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplyChainManagementPageRoutingModule } from './supply-chain-management-routing.module';

import { SupplyChainManagementPage } from './supply-chain-management.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    SupplyChainManagementPageRoutingModule
  ],
  declarations: [
    SupplyChainManagementPage,
  ]
})
export class SupplyChainManagementPageModule {}
