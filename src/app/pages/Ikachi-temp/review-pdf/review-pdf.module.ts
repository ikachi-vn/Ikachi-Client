import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPdfPageRoutingModule } from './review-pdf-routing.module';

import { ReviewPdfPage } from './review-pdf.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ReviewPdfPageRoutingModule
  ],
  declarations: [ReviewPdfPage]
})
export class ReviewPdfPageModule {}
