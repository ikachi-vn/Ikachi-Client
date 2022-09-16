import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerGoodsPageRoutingModule } from './consumer-goods-routing.module';

import { ConsumerGoodsPage } from './consumer-goods.page';
import { ShareModule } from 'src/app/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ConsumerGoodsPageRoutingModule
  ],
  declarations: [ConsumerGoodsPage]
})
export class ConsumerGoodsPageModule {}
