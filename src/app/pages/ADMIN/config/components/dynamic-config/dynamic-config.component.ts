import { Component, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { SYS_ConfigProvider, WMS_PriceListProvider } from 'src/app/services/static/services.service';

@Component({
	selector: 'app-dynamic-config',
	templateUrl: './dynamic-config.component.html',
	styleUrls: ['./dynamic-config.component.scss'],
})
export class DynamicConfigComponent extends PageBase {
	configItems = null;
	priceList = [];
	selectedBranch;
	optionList = null;
	isPreloaded = false;

	@Input() set options(value){
		this.optionList = value;
		this.loadData(null);
	};

	@Input() set branch(value) {
		this.selectedBranch = value;
		this.loadData(null);
	}

	@Input() set configItem(value) {
		this.configItems = value;
		this.loadData(null);
	}

	@Output() savedConfig = new EventEmitter();


	constructor(
		public pageProvider: SYS_ConfigProvider,
		public priceListProvider: WMS_PriceListProvider,
		public env: EnvService,
		public route: ActivatedRoute,
		public alertCtrl: AlertController,
		public navCtrl: NavController,
		public formBuilder: FormBuilder,
		public cdr: ChangeDetectorRef,
		public loadingController: LoadingController,
	) {
		super();
		this.pageConfig.isDetailPage = true;
	}

	preLoadData(event) {
		this.priceListProvider.read().then(resp => {
			this.priceList = resp['data'];
			this.isPreloaded = true;
			super.preLoadData(event);
		});
	}

	async loadData(event) {
		if (!this.configItems || !this.selectedBranch || !this.optionList || !this.isPreloaded) {
			return;
		}
		this.item = {};
		this.optionList.forEach(g => {
			g.children.forEach(c => {
				c.type = c.DataType;
				c.label = c.Name;
				c.remark = c.Remark;
				c.labelForId = c.Code;
				c.disabled = !this.pageConfig.canEdit;

				if (c.type == 'select') {
					c.items = []; //select
					if (c.Code == 'BPDefaultPriceListForCustomer' || c.Code == 'BPDefaultPriceListForVendor') {
						c.items = this.priceList;
					}
					else{
						c.items = JSON.parse(c.SelectOptions);
					}

				}
				
				let setting = this.configItems ? this.configItems.find(d => d.Code == c.Code) : null;
				if (!setting) {
					setting = { IDBranch: this.selectedBranch.Id, Id: 0, Code: c.Code, Value: null };
					if(c.DefaultValue){
						setting.Value = c.DefaultValue;
					}
					this.configItems.push(setting);
				}
				if (setting?.Value) {
					try {
						setting.Value = JSON.parse(setting.Value);
					} catch (error) {
						//console.log(setting.Value, error);
					}
					
				}
				c.data = setting;
			});
		});
		super.loadedData(event);
	}

	emit(eventName, data) {
		this[eventName].emit(data);
	}

	saveChange(config) {
		return new Promise((resolve, reject) => {
			this.pageProvider.save(config).then((resp => {
				config.Id = resp['Id'];
				this.env.showMessage('Đã lưu xong!', 'success');
				this.emit('savedConfig', this.configItems);
			}));
		});
	}
}
