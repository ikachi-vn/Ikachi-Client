import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductInnovationPageRoutingModule } from './product-innovation-routing.module';

import { ProductInnovationPage } from './product-innovation.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ProductInnovationPageRoutingModule
  ],
  declarations: [ProductInnovationPage]
})
export class ProductInnovationPageModule {}
