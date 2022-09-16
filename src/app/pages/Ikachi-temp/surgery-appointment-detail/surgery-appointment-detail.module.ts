import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurgeryAppointmentDetailPageRoutingModule } from './surgery-appointment-detail-routing.module';

import { SurgeryAppointmentDetailPage } from './surgery-appointment-detail.page';
import { FileUploadModule } from 'ng2-file-upload';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ShareModule } from 'src/app/share.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgSelectModule,
    NgOptionHighlightModule,
    ShareModule,
    NgxMaskModule.forRoot(),
    SurgeryAppointmentDetailPageRoutingModule
  ],
  declarations: [SurgeryAppointmentDetailPage]
})
export class SurgeryAppointmentDetailPageModule {}
