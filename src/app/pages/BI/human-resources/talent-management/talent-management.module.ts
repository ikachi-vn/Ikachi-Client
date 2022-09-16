import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalentManagementPageRoutingModule } from './talent-management-routing.module';

import { TalentManagementPage } from './talent-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalentManagementPageRoutingModule
  ],
  declarations: [TalentManagementPage]
})
export class TalentManagementPageModule {}
