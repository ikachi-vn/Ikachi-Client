import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ShareComponentsModule } from './components/share-components.module';
import { DynamicFormBuilderModule } from './components/dynamic-field.module';

@NgModule({
	declarations: [],
	exports: [
		ShareComponentsModule
	],
	imports: [IonicModule, CommonModule, ShareComponentsModule, DynamicFormBuilderModule],
})
export class ShareModule { }
