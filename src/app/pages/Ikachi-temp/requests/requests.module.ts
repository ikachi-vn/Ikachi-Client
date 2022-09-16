import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestsPageRoutingModule } from './requests-routing.module';
import { RequestsPage } from './requests.page';
import { ShareModule } from 'src/app/share.module';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    NgSelectModule,
    // PdfViewerModule,
    NgOptionHighlightModule,
    RequestsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: RequestsPage }])
  ],
  declarations: [RequestsPage]
})
export class RequestsPageModule {}
