import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerServiceTeamPageRoutingModule } from './customer-service-team-routing.module';

import { CustomerServiceTeamPage } from './customer-service-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerServiceTeamPageRoutingModule
  ],
  declarations: [CustomerServiceTeamPage]
})
export class CustomerServiceTeamPageModule {}
