import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurgeryAppointmentListMobilePageRoutingModule } from './surgery-appointment-list-mobile-routing.module';

import { SurgeryAppointmentListMobilePage } from './surgery-appointment-list-mobile.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ShareModule } from 'src/app/share.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    NgOptionHighlightModule,
    ShareModule,
    NgxMaskModule.forRoot(),
    SurgeryAppointmentListMobilePageRoutingModule
  ],
  declarations: [SurgeryAppointmentListMobilePage]
})
export class SurgeryAppointmentListMobilePageModule {}
