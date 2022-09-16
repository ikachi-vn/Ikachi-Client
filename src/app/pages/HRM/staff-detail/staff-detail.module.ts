import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/share.module';
import { StaffDetailPage } from './staff-detail.page';
import {FileUploadModule} from 'ng2-file-upload';
import { StaffComponentsModule } from './components/staff-components.module';

const routes: Routes = [
  {
    path: '',
    component: StaffDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FileUploadModule,
    StaffComponentsModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StaffDetailPage]
})
export class StaffDetailPageModule {}
