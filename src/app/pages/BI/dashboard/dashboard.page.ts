import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, NavController, Platform } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { ReportService } from 'src/app/services/report.service';
import { lib } from 'src/app/services/static/global-functions';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';

import { CustomService } from 'src/app/services/custom.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss']
})
export class DashboardPage extends PageBase {
    isShowFeature = true;
    pageData: any = {};
    calendarHeatmapData: any = {};
    selectedHeatNode = { value: 5, color: ()=>lib.getCssVariableValue('--ion-color-primary'), opacity: 'ff' };

    charts;
    @ViewChild('soLuongTiecCanvas') soLuongTiecCanvas;
    @ViewChild('doanhThuChiTieuCanvas') doanhThuChiTieuCanvas;
    @ViewChild('chiPhiChiTieuCanvas') chiPhiChiTieuCanvas;

    @ViewChild('saleByServiceCanvas') saleByServiceCanvas;
    @ViewChild('inquiryBySourceCanvas') inquiryBySourceCanvas;
    @ViewChild('lostReasonCanvas') lostReasonCanvas;
    @ViewChild('funnelCanvas') funnelCanvas;
    @ViewChild('top10CustomerCanvas') top10CustomerCanvas;
    @ViewChild('pnlCanvas') pnlCanvas;
    @ViewChild('cashFlowCanvas') cashFlowCanvas;

    constructor(
        private pageService: CustomService,
        public actionSheetController: ActionSheetController,
        public env: EnvService,
        public navCtrl: NavController,
        private platform: Platform,
        public rpt: ReportService,
    ) {
        super();
        this.charts = {
            SoLuongTiec: { IsLoading: true, IsNoData: false, Chart: null },
            DoanhThuChiTieu: { IsLoading: true, IsNoData: false, Chart: null },
            ChiPhiChiTieu: { IsLoading: true, IsNoData: false, Chart: null },
            SaleByService: { IsLoading: true, IsNoData: false, Chart: null },
            InquiryBySource: { IsLoading: true, IsNoData: false, Chart: null },
            LostReason: { IsLoading: true, IsNoData: false, Chart: null },
            Funnel: { IsLoading: true, IsNoData: false, Chart: null },
            Top10Customer: { IsLoading: true, IsNoData: false, Chart: null },
            PNL: { IsLoading: true, IsNoData: false, Chart: null },
            CashFlow: { IsLoading: true, IsNoData: false, Chart: null },
        };
    }

    ionViewDidEnter() {
        this.buildCharts();
    }

    refresh() {
        this.updateChart();
    }

    changeDateFillter(type) {
        this.rpt.dateQuery(type).then(_ => {
            this.updateChart();
        }).catch(err => { let a = err });
    }

    changeFrequency(f) {
        this.rpt.rptGlobal.query.frequency = f.Id;

        if (f.Id == 1) {
            this.rpt.rptGlobal.query.fromDate = '2020-01-06';
            this.rpt.rptGlobal.query.toDate = '2020-01-12';
        }
        else if (f.Id == 2) {
            this.rpt.rptGlobal.query.fromDate = '2020-01-01';
            this.rpt.rptGlobal.query.toDate = '2020-01-31';
        }

        this.changeDateFillter('setdone');

    }

    updateChart() {
        for (var key in this.charts) {
            let c = this.charts[key].Chart;
            c?.destroy();
        }

        this.buildCharts();
    }

    toogleBranchDataset(b) {
        b.IsHidden = !b.IsHidden;
        for (var key in this.charts) {
            let c = this.charts[key].Chart;

            c.data.datasets.forEach(function (ds) {
                if (ds.IDBranch == b.Id) {
                    ds.hidden = b.IsHidden;
                }
            });
            c.update();
        }
        this.buildTopSum();
        this.buildCalendarHeatmapChart();
    }

    buildCharts() {
        
        this.buildTopSum();
        this.rpt.buildSoLuongTiecChart(this.soLuongTiecCanvas).subscribe(c => {
            this.charts.SoLuongTiec.Chart = c;
            this.charts.SoLuongTiec.IsLoading = false;
        });
        this.buildCalendarHeatmapChart();
        this.buildfunnelChart();
        this.buildDoanhThuChiTieuChart();
        this.buildChiPhiChiTieuChart();
        this.buildInquiryBySourceChart();
        this.buildSaleByServiceChart();
        this.buildLostReasonChart();
        this.buildTop10CustomerChart();

        this.buildPnLChart();
        this.buildCashFlowChart();
    }

    buildTopSum() {

        this.pageData.NumberOfEvents = 0;
        this.pageData.NumberOfGuests = 0;
        this.pageData.DoanhThu = 0;
        let datasets = this.rpt.buildDataset();
        let sumAll = 0;
        let sumAllDoanhThu = 0;
        let sumAllGuest = 0;
        for (let i = 0; i < datasets.length; i++) {
            const ds = datasets[i];
            if (!ds.hidden && ds.IDBranch != 1) {
                this.pageData.DoanhThu += ds.Data.map(m => m.DoanhThu).reduce((a, b) => a + b, 0);
                this.pageData.NumberOfEvents += ds.Data.map(m => m.Event).reduce((a, b) => a + b, 0);
                this.pageData.NumberOfGuests += ds.Data.map(m => m.NumberOfGuest).reduce((a, b) => a + b, 0);
                if (ds.IDBranch == 1) {
                    sumAll = ds.Data.map(m => m.Event).reduce((a, b) => a + b, 0);
                    sumAllDoanhThu = ds.Data.map(m => m.DoanhThu).reduce((a, b) => a + b, 0);
                    sumAllGuest = ds.Data.map(m => m.NumberOfGuest).reduce((a, b) => a + b, 0);
                }
            }

        }
        if (sumAll > 0) {
            this.pageData.NumberOfEvents = sumAll;
            this.pageData.NumberOfGuests = sumAllGuest;
            this.pageData.DoanhThu = sumAllDoanhThu;
        }
        this.pageData.DoanhThu = Math.round(this.pageData.DoanhThu / 100000000) / 10;
        this.pageData.NumberOfGuests = Math.round(this.pageData.NumberOfGuests / 1000);


    }

    buildDoanhThuChiTieuChart() {
        let ctx = this.doanhThuChiTieuCanvas.nativeElement;

        this.charts?.DoanhThuChiTieu?.Chart?.destroy();

        //ctx.height = 255;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildChiPhiChiTieuChart() {
        let ctx = this.chiPhiChiTieuCanvas.nativeElement;

        this.charts?.ChiPhiChiTieu?.Chart?.destroy();

        //ctx.height = 255;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildInquiryBySourceChart() {
        let ctx = this.inquiryBySourceCanvas.nativeElement;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildSaleByServiceChart() {
        let ctx = this.saleByServiceCanvas.nativeElement;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildLostReasonChart() {
        let ctx = this.lostReasonCanvas.nativeElement;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildfunnelChart() {
        let ctx = this.funnelCanvas.nativeElement;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildTop10CustomerChart1() {
        let ctx = this.top10CustomerCanvas.nativeElement;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildTop10CustomerChart() {
        let ctx = this.top10CustomerCanvas.nativeElement;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");

        
    }

    buildCalendarHeatmapChart() {
        
    }

    buildPnLChart() {
        let ctx = this.pnlCanvas.nativeElement;
        //ctx.height = 255;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");


        
    }

    buildCashFlowChart() {
        let ctx = this.cashFlowCanvas.nativeElement;
        //ctx.height = 255;
        var width = ctx.width;
        var height = ctx.height;
        ctx = ctx.getContext("2d");


        var data = {
            labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            datasets: []
        };

        
    }




}
