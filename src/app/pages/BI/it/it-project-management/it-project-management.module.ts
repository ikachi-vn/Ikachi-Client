import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItProjectManagementPageRoutingModule } from './it-project-management-routing.module';

import { ItProjectManagementPage } from './it-project-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItProjectManagementPageRoutingModule
  ],
  declarations: [ItProjectManagementPage]
})
export class ItProjectManagementPageModule {}
