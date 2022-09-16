import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManufactoringKpiPageRoutingModule } from './manufactoring-kpi-routing.module';

import { ManufactoringKpiPage } from './manufactoring-kpi.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ManufactoringKpiPageRoutingModule
  ],
  declarations: [ManufactoringKpiPage]
})
export class ManufactoringKpiPageModule {}
