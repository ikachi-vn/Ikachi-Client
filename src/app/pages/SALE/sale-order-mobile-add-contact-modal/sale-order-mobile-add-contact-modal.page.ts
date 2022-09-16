import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PageBase } from 'src/app/page-base';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { CRM_ContactProvider } from 'src/app/services/static/services.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-sale-order-mobile-add-contact-modal',
	templateUrl: './sale-order-mobile-add-contact-modal.page.html',
	styleUrls: ['./sale-order-mobile-add-contact-modal.page.scss'],
})
export class SaleOrderMobileAddContactModalPage extends PageBase {
	formGroup: FormGroup;
	constructor(
		public pageProvider: CRM_ContactProvider,
		public env: EnvService,
		public navCtrl: NavController,

		public modalController: ModalController,
		public formBuilder: FormBuilder,
		public cdr: ChangeDetectorRef,
		public loadingController: LoadingController,

	) {
		super();
		this.id = 0;

		this.pageConfig.isDetailPage = true;

		this.formGroup = formBuilder.group({
			Id: [''],
			Code: [''],
			Name: ['', Validators.required],

			Remark: [''],
			Address: this.formBuilder.group({
				Id: [''],
				Phone1: ['', Validators.required],
				Contact: ['', Validators.required],
				Province: ['', Validators.required],
				District: ['', Validators.required],
				Ward: ['', Validators.required],
				AddressLine1: ['', Validators.required],
				AddressLine2: [''],
			})

		});
	}

	loadedData() {
		super.loadedData();
		if(!this.item){
			this.item = {};
		}
		this.item.IDOwner = this.env.user.StaffID;
		this.pageConfig.pageName = 'add-contact';
	}

	async saveChange() {
		super.saveChange2();
	}

	savedChange(savedItem = null, form = this.formGroup) {
		form.controls.Id.setValue(savedItem.Id);
		form.controls.Address['controls'].Id.setValue(savedItem.IDAddress);
		this.env.publishEvent({ Code: this.pageConfig.pageName, data: form.getRawValue() });
		this.modalController.dismiss();
	}

}
