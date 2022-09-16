import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandAnalysisPageRoutingModule } from './brand-analysis-routing.module';

import { BrandAnalysisPage } from './brand-analysis.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    BrandAnalysisPageRoutingModule
  ],
  declarations: [BrandAnalysisPage]
})
export class BrandAnalysisPageModule {}
