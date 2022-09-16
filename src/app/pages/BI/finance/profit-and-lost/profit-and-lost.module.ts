import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfitAndLostPageRoutingModule } from './profit-and-lost-routing.module';

import { ProfitAndLostPage } from './profit-and-lost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfitAndLostPageRoutingModule
  ],
  declarations: [ProfitAndLostPage]
})
export class ProfitAndLostPageModule {}
