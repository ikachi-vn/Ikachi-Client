import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { ReportService } from 'src/app/services/report.service';
import { lib } from 'src/app/services/static/global-functions';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';
import { CustomService } from 'src/app/services/custom.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { CommonService } from 'src/app/services/core/common.service';

@Component({
    selector: 'app-sale-saleman',
    templateUrl: 'sale-saleman.page.html',
    styleUrls: ['sale-saleman.page.scss']
})
export class SaleSalemanPage extends PageBase {
    today = '';
    charts;
    reportQuery: any = {};
    @ViewChild('chartName') chartName;


    constructor(
        public pageProvider: CommonService,
        public actionSheetController: ActionSheetController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        private platform: Platform,
        public rpt: ReportService,
    ) {
        super();
        this.today = lib.dateFormat(new Date, 'hh:MM dd/mm/yyyy');
        this.charts = {
            chartName: { IsLoading: true, IsNoData: false, Chart: null },
        };

        this.pageConfig.subscribeReport = this.rpt.Tracking().subscribe((data) => {
            console.log('subscribeReport');
            this.reportQuery = {
                fromDate: data.fromDate,
                toDate: data.toDate,
                IDBranch: data.IDBranch,
                IDOwner: data.saleman?.Id,
                IDSaleman: data.outlet?.Id,
                IsCalcShippedOnly: data.isCalcShippedOnly,
                saleman: data.saleman,
                outlet: data.outlet
            };

            if (data._cmd == 'exportSaleProductReport') {
                this.exportSaleSalemanReport();
            }
            else if (data._cmd == 'runReport') {
                this.readSaleSalemanReport();
            }
        })
    }

    ngOnDestroy() {
        this.pageConfig?.subscribeReport?.unsubscribe();
        super.ngOnDestroy();
    }

    loadData(event) {
        super.loadedData(event);
    }

    ionViewDidEnter() {
        this.buildCharts();
    }

    refresh() {
        for (var key in this.charts) {
            let c = this.charts[key].Chart;
            c?.destroy();
        }
        this.buildCharts();
    }


    buildCharts() {
        this.chartNameBuild();
    }

    chartNameBuild() {

    }

    warehouses = [];

    readSaleSalemanReport() {
        if (this.submitAttempt) {
            return;
        }

        this.submitAttempt = true;
        let apiPath = {
            method: "GET",
            url: function () { return ApiSetting.apiDomain("SALE/Order/SaleSalemanReport/") }
        };

        this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Đang tạo bảng kê, xin vui lòng chờ giây lát...'
        }).then(loading => {
            loading.present();

            this.pageProvider.connect(apiPath.method, apiPath.url(), this.reportQuery).toPromise()
                .then((resp: any) => {
                    this.submitAttempt = false;
                    if (loading) loading.dismiss();
                    this.buildBranchesReport(resp);
                    super.loadedData();

                }).catch(err => {
                    this.env.showMessage(err.message ? err.message : 'Không lấy được dữ liệu.', 'danger');
                    this.submitAttempt = false;
                    if (loading) loading.dismiss();
                    this.refresh();
                })
        });
    }

    buildBranchesReport(resp) {
        this.warehouses = [];
        for (let i = 0; i < resp.length; i++) {
            const r = resp[i];

            let warehouse = this.warehouses.find(d => d.Id == r.IDBranch);
            if (!warehouse) {
                warehouse = {
                    Id: r.IDBranch,
                    Name: r.BranchName,
                    count: 1,
                    itemList: [],
                    TotalBeforeDiscount: 0,
                    TotalDiscount: 0,
                    TotalAfterDiscount: 0,
                };
                this.warehouses.push(warehouse);
            }

            let saleitem = warehouse.itemList.find(d => d.IDSaleman == r.IDSaleman);
            if (!saleitem) {
                saleitem = {
                    IDSaleman: r.IDSaleman,
                    FullName: r.FullName,
                    WorkPhone: r.WorkPhone,
                    TotalBeforeDiscount: 0.0,
                    TotalDiscount: 0.0,
                    TotalAfterDiscount: 0.0
                }
                warehouse.itemList.push(saleitem);
            }


            saleitem.TotalBeforeDiscount += r.TotalBeforeDiscount;
            saleitem.TotalDiscount += r.TotalDiscount;
            saleitem.TotalAfterDiscount += r.TotalAfterDiscount;

            saleitem.TotalBeforeDiscountText = lib.currencyFormat(saleitem.TotalBeforeDiscount);
            saleitem.TotalDiscountText = lib.currencyFormat(saleitem.TotalDiscount);
            saleitem.TotalAfterDiscountText = lib.currencyFormat(saleitem.TotalAfterDiscount);

            warehouse.TotalBeforeDiscount += r.TotalBeforeDiscount;
            warehouse.TotalDiscount += r.TotalDiscount;
            warehouse.TotalAfterDiscount += r.TotalAfterDiscount;

        }
        this.warehouses.forEach(w => {
            w.TotalBeforeDiscountText = lib.currencyFormat(w.TotalBeforeDiscount);
            w.TotalDiscountText = lib.currencyFormat(w.TotalDiscount);
            w.TotalAfterDiscountText = lib.currencyFormat(w.TotalAfterDiscount);

            w.itemList.sort((a, b) => (parseFloat(b.TotalAfterDiscount) - parseFloat(a.TotalAfterDiscount)));
        });

    }

    exportSaleSalemanReport() {
        let apiPath = {
            getExport: {
                method: "GET",
                url: function () { return ApiSetting.apiDomain("SALE/Order/ExportSaleOutletReport/") }
            }
        };

        this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Đang tạo bảng kê, xin vui lòng chờ giây lát...'
        }).then(loading => {
            loading.present();
            this.pageProvider.export(apiPath, this.reportQuery).then((response: any) => {
                this.submitAttempt = false;
                if (loading) loading.dismiss();
                this.downloadURLContent(ApiSetting.mainService.base + response);
            }).catch(err => {
                this.env.showMessage(err.message ? err.message : 'Không lấy được dữ liệu.', 'danger');
                this.submitAttempt = false;
                if (loading) loading.dismiss();
                this.refresh();
            });

        });

    }
}
