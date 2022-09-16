import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmcgFinancialPageRoutingModule } from './fmcg-financial-routing.module';

import { FmcgFinancialPage } from './fmcg-financial.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    FmcgFinancialPageRoutingModule
  ],
  declarations: [FmcgFinancialPage]
})
export class FmcgFinancialPageModule {}
