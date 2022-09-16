import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestDetailPageRoutingModule } from './request-detail-routing.module';

import { RequestDetailPage } from './request-detail.page';
import { ShareModule } from 'src/app/share.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShareModule,
    NgSelectModule,
    RequestDetailPageRoutingModule
  ],
  declarations: [RequestDetailPage]
})
export class RequestDetailPageModule {}
