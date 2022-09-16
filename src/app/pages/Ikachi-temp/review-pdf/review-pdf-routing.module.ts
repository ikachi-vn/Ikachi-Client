import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPdfPage } from './review-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewPdfPageRoutingModule {}
