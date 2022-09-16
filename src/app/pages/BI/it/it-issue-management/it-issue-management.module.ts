import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItIssueManagementPageRoutingModule } from './it-issue-management-routing.module';

import { ItIssueManagementPage } from './it-issue-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItIssueManagementPageRoutingModule
  ],
  declarations: [ItIssueManagementPage]
})
export class ItIssueManagementPageModule {}
