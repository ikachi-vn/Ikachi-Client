import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientSatisfactionPageRoutingModule } from './patient-satisfaction-routing.module';

import { PatientSatisfactionPage } from './patient-satisfaction.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    PatientSatisfactionPageRoutingModule
  ],
  declarations: [PatientSatisfactionPage]
})
export class PatientSatisfactionPageModule {}
