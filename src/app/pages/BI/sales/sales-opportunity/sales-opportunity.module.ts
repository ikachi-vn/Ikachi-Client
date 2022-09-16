import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesOpportunityPageRoutingModule } from './sales-opportunity-routing.module';

import { SalesOpportunityPage } from './sales-opportunity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesOpportunityPageRoutingModule
  ],
  declarations: [SalesOpportunityPage]
})
export class SalesOpportunityPageModule {}
