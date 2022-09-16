import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, NavController, NavParams, Platform, PopoverController } from '@ionic/angular';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { Chart, ChartOptions } from 'chart.js';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { CustomService } from 'src/app/services/custom.service';
import { ReportService } from 'src/app/services/report.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { BRA_BranchProvider } from 'src/app/services/static/services.service';
import { PopoverPage } from '../../SYS/popover/popover.page';

@Component({
	selector: 'app-sale-summary-mobile',
	templateUrl: './sale-summary-mobile.page.html',
	styleUrls: ['./sale-summary-mobile.page.scss'],
	providers: [PopoverPage, NavParams]
})
export class SaleSummaryMobilePage extends PageBase {
	segmentView = {
		Page: 's1',
		ShowSpinner: true
	}

	reportQuery: any = {
		selectedBTNDate: 'yesterday',
		frequency: 1,
		fromDate: lib.dateFormat(new Date(), 'yyyy-mm-dd'),
		toDate: lib.dateFormat(new Date(), 'yyyy-mm-dd'),
		IDOwner: this.env.user.StaffID,
		_saleman: { Id: this.env.user.StaffID, Code: '', FullName: this.env.user.FullName }
	};

	charts;
	@ViewChild('barCanvas') barCanvas;
	@ViewChild('pieCanvas') pieCanvas;


	constructor(
		public pageProvider: CustomService,
		public branchProvider: BRA_BranchProvider,
		public actionSheetController: ActionSheetController,
		public alertCtrl: AlertController,
		public loadingController: LoadingController,
		public env: EnvService,
		public navCtrl: NavController,
		public rpt: ReportService,
		public popoverCtrl: PopoverController,
		public pop: PopoverPage,
	) {
		super();
		let queryDate = new Date();
		queryDate.setDate(queryDate.getDate() - 1);
		this.reportQuery.fromDate = lib.dateFormat(queryDate, 'yyyy-mm-dd');
		this.reportQuery.toDate = lib.dateFormat(queryDate, 'yyyy-mm-dd');

		this.charts = {
			barCanvas: { IsLoading: true, IsNoData: false, Chart: null },
			pieCanvas: { IsLoading: true, IsNoData: false, Chart: null },
		};
	}

	segmentChanged(ev: any) {
		this.segmentView.Page = ev.detail.value;
		this.loadData(null);
	}

	async loadData(event) {
		if (this.segmentView.Page == 's1') {
			this.readSaleOrderData();
		}
		else {
			this.readSaleProductData();
		}

	}

	destroyChart() {
		for (var key in this.charts) {
			let c = this.charts[key].Chart;
			c?.destroy();
		}
	}

	currentPopover = null;
	async presentPopover(ev: any) {

		let popover = await this.popoverCtrl.create({
			component: PopoverPage,
			componentProps: {
				popConfig: {
					isShowDateRange: true,
					dateRangeLabel: 'Ngày lên đơn',

					isShowStaffSelect: this.pageConfig.canViewAllData,

				},
				popData: {
					selectedBTNDate: this.reportQuery.selectedBTNDate,
					fromDate: this.reportQuery.fromDate,
					toDate: this.reportQuery.toDate,
					staff: this.reportQuery._saleman,
				}
			},
			event: ev,
			cssClass: 'date-range-picker',
			translucent: true
		});
		popover.onDidDismiss().then((result: any) => {
			//console.log(result);
			if (result.data) {
				this.reportQuery.fromDate = result.data.fromDate;
				this.reportQuery.toDate = result.data.toDate;
				this.reportQuery.selectedBTNDate = result.data.selectedBTNDate;
				this.reportQuery._saleman = result.data.staff ? result.data.staff : { Id: this.env.user.StaffID, Code: '', FullName: this.env.user.FullName };
				this.reportQuery.IDOwner = this.reportQuery._saleman.Id;

				this.refresh();
			}

		});
		this.currentPopover = popover;
		return await popover.present();
	}

	dismissPopover() {
		if (this.currentPopover) {
			this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
		}
	}

	readSaleProductData() {
		this.submitAttempt = true;
		this.pageProvider.commonService.connect('GET', ApiSetting.apiDomain("SALE/Order/SaleProductReport/"), this.reportQuery).toPromise()
			.then((resp: any) => {
				this.submitAttempt = false;
				this.buildProductReport(resp);
				this.loadedData(null);
			}).catch(err => {
				this.env.showMessage(err.message ? err.message : 'Không lấy được dữ liệu.', 'danger');
				this.submitAttempt = false;
				this.refresh();
			})
	}

	buildProductReport(resp) {
		this.items = [];
		for (let i = 0; i < resp.length; i++) {
			const r = resp[i];

			let warehouse = this.items.find(d => d.Id == r.IDBranch);
			if (!warehouse) {
				warehouse = {
					Id: r.IDBranch,
					Name: r.BranchName,
					salemans: [],
				};
				this.items.push(warehouse);
			}

			let saleman = warehouse.salemans.find(d => d.IDSaleman == r.IDSaleman);
			if (!saleman) {
				saleman = {
					IDSaleman: r.IDSaleman,
					FullName: r.FullName,
					itemList: [],
					TotalBeforeDiscount: 0,
					TotalDiscount: 0,
					TotalAfterDiscount: 0,
				}
				warehouse.salemans.push(saleman);
			}

			let saleitem = saleman.itemList.find(d => d.IDItem == r.IDItem);
			if (!saleitem) {
				saleitem = {
					IDItem: r.IDItem,
					ItemCode: r.ItemCode,
					ItemName: r.ItemName,
					TotalBeforeDiscount: 0,
					TotalDiscount: 0,
					TotalAfterDiscount: 0,
					UoMs: [],
				}
				saleman.itemList.push(saleitem);
			}

			let itemUoM = saleitem.UoMs.find(d => d.Id == r.IDUoM);
			if (!itemUoM) {
				itemUoM = {
					Id: r.IDUoM,
					Name: r.UoM,
					PromotionQuantity: r.PromotionQuantity,
					ShippedQuantity: r.ShippedQuantity,
					TotalBeforeDiscount: r.TotalBeforeDiscount,
					TotalDiscount: r.TotalDiscount,
					TotalAfterDiscount: r.TotalAfterDiscount,

					TotalBeforeDiscountText: lib.currencyFormatFriendly(r.TotalBeforeDiscount),
					TotalDiscountText: lib.currencyFormatFriendly(r.TotalDiscount),
					TotalAfterDiscountText: lib.currencyFormatFriendly(r.TotalAfterDiscount),
				}
				saleitem.UoMs.push(itemUoM);
				saleitem.TotalBeforeDiscount += r.TotalBeforeDiscount;
				saleitem.TotalDiscount += r.TotalDiscount;
				saleitem.TotalAfterDiscount += r.TotalAfterDiscount;
			}

			saleman.TotalBeforeDiscount += r.TotalBeforeDiscount;
			saleman.TotalDiscount += r.TotalDiscount;
			saleman.TotalAfterDiscount += r.TotalAfterDiscount;
		}

		this.items.forEach(s => {
			s.salemans.forEach(i => {
				i.TotalBeforeDiscountText = lib.currencyFormat(i.TotalBeforeDiscount);
				i.TotalDiscountText = lib.currencyFormat(i.TotalDiscount);
				i.TotalAfterDiscountText = lib.currencyFormat(i.TotalAfterDiscount);
				i.itemList.sort((a, b) => b.TotalBeforeDiscount - a.TotalBeforeDiscount);

				let maxTotalBeforeDiscount = i.itemList[0].TotalBeforeDiscount;

				i.itemList.forEach(it => {
					it.UoMs.sort((a, b) => b.TotalBeforeDiscount - a.TotalBeforeDiscount);
					it.percent = Math.round(it.TotalBeforeDiscount / i.TotalBeforeDiscount * 1000) / 10;
					it.barPercent = Math.round(it.TotalBeforeDiscount / maxTotalBeforeDiscount * 1000) / 10;

					it.TotalBeforeDiscountText = lib.currencyFormatFriendly(it.TotalBeforeDiscount);
					it.TotalDiscountText = lib.currencyFormatFriendly(it.TotalDiscount);
					it.TotalAfterDiscountText = lib.currencyFormatFriendly(it.TotalAfterDiscount);


				});

			});

		});

		this.buildCharts();
	}

	readSaleOrderData() {
		this.submitAttempt = true;
		this.pageProvider.commonService.connect('GET', ApiSetting.apiDomain("SALE/Order/SaleOrderReport/"), this.reportQuery).toPromise()
			.then((resp: any) => {
				this.submitAttempt = false;
				this.buildSaleOrderReport(resp);
				this.loadedData(null);
			}).catch(err => {
				this.env.showMessage(err.message ? err.message : 'Không lấy được dữ liệu.', 'danger');
				this.submitAttempt = false;
				this.refresh();
			})
	}

	buildSaleOrderReport(resp) {
		this.items = resp;
		this.items.forEach(i => {
			i.OriginalTotalAfterDiscountText = lib.currencyFormat(i.OriginalTotalAfterDiscount);
			i.TotalAfterDiscountText = lib.formatMoney(i.TotalAfterDiscount,0);
		});
	}

	buildCharts() {
		//this.buildtotalBarChart();
		this.buildtotalPieChart();
	}

	async buildtotalPieChart() {
		console.log('buildtotalPieChart');
		let dataArray = [];
		let labelsArray = [];

		for (let b = 0; b < this.items.length; b++) {
			const br = this.items[b];
			for (let s = 0; s < br.salemans.length; s++) {
				const sa = br.salemans[s];
				for (let i = 0; i < sa.itemList.length; i++) {
					const it = sa.itemList[i];
					dataArray.push(it.TotalBeforeDiscount);
					labelsArray.push(it.ItemCode + ' - ' + it.ItemName);

				}
			}
		}

		var data = {
			labels: labelsArray,
			display: 'auto',
			datasets: [{
				label: 'Doanh thu',
				data: dataArray,
				backgroundColor: this.colorArray,
			}],
			hoverOffset: 50,
		};
		await this.charts.pieCanvas.Chart?.destroy();
		this.rpt.buildPieChart(this.charts.pieCanvas.Chart, this.pieCanvas.nativeElement, data);

	}

	myHeaderFn(record, recordIndex, records) {

		if (recordIndex == 0 || record.IDSaleOrder != records[recordIndex - 1].IDSaleOrder) {
			let sum = lib.sumInArray(records.filter(d=>d.IDSaleOrder == record.IDSaleOrder),'OriginalTotalAfterDiscount');
			return {
				ContactCode : record.ContactCode,
				ContactName : record.ContactName,
				OrderDate: lib.dateFormat(record.OrderDate),
				IDSaleOrder: record.IDSaleOrder,
				OriginalTotalAfterDiscount: sum,
				OriginalTotalAfterDiscountText: lib.currencyFormat(sum)
			}
		}

		return null;

		// let a: any = recordIndex == 0 ? new Date('2000-01-01') : new Date(records[recordIndex - 1].CreatedDate);
		// let b: any = new Date(record.CreatedDate);
		// let mins = Math.floor((b - a) / 1000 / 60);

		// if (mins < 30) {
		// 	return null;
		// }
		// return lib.dateFormatFriendly(record.CreatedDate);
		// return {
		//   CreatedTimeText: record.CreatedDate ? lib.dateFormat(record.CreatedDate, 'hh:MM') : '',
		//   CreatedDateText: record.CreatedDate ? lib.dateFormat(record.CreatedDate, 'dd/mm/yy') : ''
		// }

	}

	//colorArray = ['#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066',]

	colorArray = ['#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066', '#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFCC', '#99FFFF', '#99CCFF', '#9999FF', '#CC99FF', '#FF99FF', '#FF99CC', '#FF3333', '#FF9933', '#FFFF33', '#99FF33', '#33FF33', '#33FF99', '#33FFFF', '#3399FF', '#3333FF', '#9933FF', '#FF33FF', '#FF3399', '#CC0000', '#CC6600', '#CCCC00', '#66CC00', '#00CC00', '#00CC66', '#00CCCC', '#006600', '#0000CC', '#6600CC', '#CC00CC', '#CC0066',];



}



