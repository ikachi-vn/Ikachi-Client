import { Injectable } from '@angular/core';
import { APIList } from './static/global-variable';
import { CommonService, exService } from './core/common.service';
import { SearchConfig } from './static/search-config';
import { Observable } from 'rxjs';
import { lib } from './static/global-functions';
import { EnvService } from './core/env.service';
import { Subject } from 'rxjs';
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Injectable({
    providedIn: 'root'
})
export class ReportService extends exService {
    public reportTracking = new Subject<any>();



    rptGlobal: any = {
        branch: [
            { Id: 0, Code: 'INGROUP', Name: 'INGROUP', IsHidden: false, IsHiddenDetailColumn: true, Color: '#84ff00' },
            { Id: 21, Code: 'InHoldings', Name: 'InHoldings', IsHidden: false, IsHiddenDetailColumn: true, Color: '#00ffae' },
            { Id: 22, Code: 'InHospitality', Name: 'InHospitality', IsHidden: false, IsHiddenDetailColumn: true, Color: '#ff4200' },
            { Id: 23, Code: 'InDevelopment', Name: 'InDevelopment', IsHidden: false, IsHiddenDetailColumn: true, Color: '#ffe400' },
            { Id: 24, Code: 'DongXuan', Name: 'Đồng Xuân', IsHidden: false, IsHiddenDetailColumn: true, Color: '#2b9a00' },
            { Id: 25, Code: 'MyXuan', Name: 'Mỹ Xuân', IsHidden: false, IsHiddenDetailColumn: true, Color: '#c000ff' },
            { Id: 26, Code: 'XuanNam', Name: 'Xuân Nam', IsHidden: false, IsHiddenDetailColumn: true, Color: '#ff00ae' },
            { Id: 27, Code: 'PQC', Name: 'PQC', IsHidden: false, IsHiddenDetailColumn: true, Color: '#000000' },
            { Id: 466, Code: 'Central', Name: 'Central', IsHidden: false, IsHiddenDetailColumn: true, Color: '#772727' },
            { Id: 467, Code: '06NBK', Name: '06NBK', IsHidden: false, IsHiddenDetailColumn: true, Color: '#541922' }

        ],
        frequency: [
            { Id: 1, Name: 'day' },
            { Id: 2, Name: 'month' },
            { Id: 3, Name: 'quarter' },
            { Id: 4, Name: 'year' }
        ],
        reportType: [
            { Id: 1, Name: 'MTD' },
            { Id: 2, Name: 'YTD' }
        ],
        query: {
            fromDate: '2021-01-01',
            toDate: '2021-01-01',
            reportDate: '2021-01-01',
            reportType: 'MTD',
            branch: '0,21,22,23,24,25,26,27,466,467',
            frequency: 1
        },
        rptOptions: {
            lineChart: {
                maintainAspectRatio: false,
                responsive: true,

                layout: {
                    padding: {
                        right: 20,
                    }
                },
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#FFF',
                        usePointStyle: true,
                        boxWidth: 8,

                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                hover: {
                    mode: 'index',
                    intersect: false
                },
                elements: {
                    point: {
                        radius: 1,
                        hoverRadius: 4,
                        backgroundColor: ()=>lib.getCssVariableValue('--ion-color-primary') + 'e6',
                        borderWidth: 1,
                        hoverBorderWidth: 2
                    },
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontColor: ()=>lib.getCssVariableValue('--ion-color-primary-contrast') + "aa",
                                fontSize: 8,
                                maxTicksLimit: 5,
                                padding: 10
                            },
                            gridLines: {
                                display: false,
                                drawTicks: true,
                                drawBorder: false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: {
                                fontColor: ()=>lib.getCssVariableValue('--ion-color-primary-contrast') + "ee",
                                fontSize: 8,
                                //maxTicksLimit: 7,
                                padding: 7
                            },
                            gridLines: {
                                display: false,
                                zeroLineColor: "transparent",
                                drawTicks: false,
                                drawBorder: false
                            }
                        }
                    ]
                },
            },
            barChart: {
                maintainAspectRatio: false,
                responsive: true,

                layout: {
                    padding: {
                        top: 20,
                    }
                },
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#FFF',
                        usePointStyle: true,
                        boxWidth: 8,

                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 1)',

                    bodyFontSize: 8.5,  // << change fontsize and color
                    bodyFontColor: '#fff',  // << change fontsize and color
                    bodyFontStyle: 'bold',
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ₫';   // // << change value format, seperate per 1,000 with ₫ currency.
                        },
                    },
                },
                hover: {
                    mode: 'index',
                    intersect: false
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 4,
                        backgroundColor: ()=>lib.getCssVariableValue('--ion-color-primary') + 'e6',
                        borderWidth: 1,
                        hoverBorderWidth: 2
                    },
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontColor: ()=>lib.getCssVariableValue('--ion-color-primary'),
                                fontSize: 12,
                                maxTicksLimit: 8,
                                padding: 20,
                                beginAtZero: true,
                                // callback:
                                //     function (value) {
                                //         return value.toLocaleString();
                                //     },

                                callback: function (label, index, labels) {
                                    return label / 1000000 + 'M ₫';
                                },   // this return from 300.000.000 to 300M ₫
                            },
                            gridLines: {
                                color: ()=>lib.getCssVariableValue('--ion-color-primary') + '80',
                                display: true,
                                drawTicks: false,
                                drawBorder: false,
                                zeroLineColor: ()=>lib.getCssVariableValue('--ion-color-primary') + 'e6',
                            }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: {
                                fontColor: ()=>lib.getCssVariableValue('--ion-color-primary'),
                                fontSize: 10,
                                //maxTicksLimit: 7,
                                padding: 15
                            },
                            gridLines: {
                                display: false,
                                drawTicks: false,
                                drawBorder: false,
                            }
                        },
                    ]
                },
                plugins: {
                    labels: {
                        render: () => { },
                        fontSize: 12,
                    },
                },
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                    }
                },
            },
            pieChart: {
                responsive: true,
                maintainAspectRatio: false,
                borderColor: ()=>lib.getCssVariableValue('--ion-color-primary'),
                borderWidth: 5,
                hoverBorderWidth: 3,
                tooltips: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            //var label = ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' đơn ' + data.labels[tooltipItem.index];
                            //return label;
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            var label = data.labels[tooltipItem.index];
                            if (value >= 1000000) {
                                return  Intl.NumberFormat().format(value / 1000000.0) + 'M - ' + label;
                            }
                            else {
                                return Intl.NumberFormat().format(value / 1000.0) + 'K - '+ label;
                            }


                        }
                    }
                },
                legend: {
                    display: false,
                },
                elements: {
                    arc: {
                        borderWidth: 1
                    },
                },
                plugins: {

                    labels: {
                        position: 'outside', // << display data label outside piechart segment
                        //arc: true,  // << make label curve above piechart segment
                        textMargin: 6,   // << spacing
                        // render: 'percentage',  // << display in percent
                        precision: 0,  // << display same as .toFixed(1), ex: 30.1%
                        fontSize: 10,
                        fontStyle: 'bold',
                        anchor: 'center',
                        fontColor: ()=>lib.getCssVariableValue('--ion-color-dark'),
                        // offset: 10,

                        // render: (args) => {
                        // return `${args.label}: ${args.value}%`;
                        // return `${args.value}`;
                        // }  // display item Name + Value at the same type (shouldn't use this since names are too long)

                        render: (args) => {
                            if (args.percentage < 2.5) {
                                return '';
                            }
                            return args.percentage + '%';
                        },   // if percentage value smaller than limit, then hide, else display. (to minimize and avoid overlapping datalabels)
                    },
                    afterDraw: function (chart) {
                        if (chart.data.datasets.length === 0) {
                            // No data is present
                            var ctx = chart.chart.ctx;
                            var width = chart.chart.width;
                            var height = chart.chart.height
                            chart.clear();

                            ctx.save();
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.font = "16px normal 'Helvetica Nueue'";
                            ctx.fillText('No data to display', width / 2, height / 2);
                            ctx.restore();
                        }
                    }
                },
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                    }
                },
            },
            dougnutChart: {
                maintainAspectRatio: false,
                responsive: true,
                // cutoutPercentage: 70,
                // rotation: 1 * Math.PI,
                // circumference: 1 * Math.PI,

                borderWidth: 5,
                hoverBorderWidth: 3,


                legend: {
                    display: false
                },
                title: {
                    display: false,
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            //var label = ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' đơn ' + data.labels[tooltipItem.index];
                            //return label;
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            var label = data.labels[tooltipItem.index];
                            if (value >= 1000000) {
                                return label + ': ' + Intl.NumberFormat().format(value / 1000000.0) + ' triệu';
                            }
                            else {
                                return label + ': ' + Intl.NumberFormat().format(value / 1000.0) + ' K';
                            }


                        }
                    }
                },
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    }
                },
                plugins: {

                    labels: [
                        {
                            render: 'label',
                            position: 'outside',
                            fontColor: ()=>lib.getCssVariableValue('--ion-color-primary-contrast'),
                            // outsidePadding: 40,
                            textMargin: 8
                            // showZero: true,
                        },
                        {
                            render: 'percentage',
                            fontColor: '#FFF',
                            precision: 0,
                            //arc: true,
                            //position: 'outside',

                            position: 'border'

                        }]
                },
            }
        },

    };

    mockData = [];

    mockPO = [];


    constructor(
        public commonService: CommonService,
        public env: EnvService,

    ) {
        super(APIList.ACCOUNT_ApplicationUser, SearchConfig.getSearchFields('ACCOUNT_ApplicationUser'), commonService);
        //this.rptGlobal.branch = [];
        this.dateQuery('d');
    }

    publishChange(data: any) {
        this.reportTracking.next(data);
    }

    Tracking(): Subject<any> {
        return this.reportTracking;
    }

    dateQuery(type) {
        return new Promise((resolve, reject) => {
            this.rptGlobal.query.type = type;
            let toDay = new Date();

            if (type == 'd') {
                this.rptGlobal.query.fromDate = lib.dateFormat(toDay, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(toDay, 'yyyy-mm-dd');
            }
            else if (type == 'dw') {
                let weekDates = lib.getWeekDates(toDay);
                this.rptGlobal.query.fromDate = lib.dateFormat(weekDates[0], 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(weekDates[6], 'yyyy-mm-dd');
            }
            else if (type == 'dm' || type == 'm') {
                var first = new Date(toDay.getFullYear(), toDay.getMonth(), 1);
                var lastday = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }
            else if (type == 'cm') {//current month
                var first = new Date(toDay.getFullYear(), toDay.getMonth(), 1);
                var lastday = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }
            else if (type == 'pm') {//previous month
                var first = new Date(toDay.getFullYear(), toDay.getMonth() - 1, 1);
                var lastday = new Date(toDay.getFullYear(), toDay.getMonth(), 0);
                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }
            else if (type == 'm3') {
                var first = new Date(toDay.getFullYear(), toDay.getMonth() - 2, 1);
                var lastday = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }
            else if (type == 'm6') {
                var first = new Date(toDay.getFullYear(), toDay.getMonth() - 5, 1);
                var lastday = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }
            else if (type == 'q' || type == 'q2' || type == 'q3') {
                var backMonth = type == 'q' ? 3 : (type == 'q2' ? 6 : 9)

                var month = toDay.getMonth() + 1;
                var quarter = (Math.ceil(month / 3));

                var first = new Date(toDay.getFullYear(), quarter * 3 - backMonth, 1);
                var lastday = new Date(toDay.getFullYear(), quarter * 3, 0);

                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }
            else if (type == 'my' || type == 'qy' || type == 'y' || type == 'y2' || type == 'y3') {
                var backYear = (type == 'my' || type == 'qy' || type == 'y') ? 0 : ((type == 'y2') ? 1 : 2)

                var first = new Date(toDay.getFullYear() - backYear, 0, 1);
                var lastday = new Date(toDay.getFullYear(), 12, 0);
                this.rptGlobal.query.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
                this.rptGlobal.query.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
            }

            else if (type == 'setdone') {
                this.rptGlobal.query.type = 'set';

            }
            else if (type == 'set') {
                reject(true);
            }

            if (type != 'set') {
                this.updateGroupFromFrequency();
                this.publishChange(this.rptGlobal.query);
                //this.reportTracking.next({Code:'Date'});
                resolve(true);
            }

        });

    }

    branchQuery(branch) {
        
    }

    getData(IDBranch) {
        return this.mockData.filter(d => d.IDBranch == IDBranch && this.rptGlobal.query.fromDate <= d.Date && d.Date <= this.rptGlobal.query.toDate);
    }

    buildDataset() {
        let datasets = [];
        for (let i = 0; i < this.rptGlobal.branch.length; i++) {
            const b = this.rptGlobal.branch[i];
            let dataset = {
                _b: b,
                hidden: b.IsHidden,
                label: b.Name,
                borderColor: lib.colorLightenDarken(b.Color, 30),
                hoverBackgroundColor: ()=>lib.getCssVariableValue('--ion-color-primary') + 'e6',
                color: b.Color,
                IDBranch: b.Id,
                Data: this.getData(b.Id), //raw data
                data: [] //calc data
            };

            datasets.push(dataset);
        }

        return datasets;
    }

    timeGroups = [];
    private updateGroupFromFrequency() {
        this.timeGroups = [];
        let dates = [];
        let beginDate = new Date(this.rptGlobal.query.fromDate);
        let endDate = new Date(this.rptGlobal.query.toDate);
        let rundate = new Date(beginDate);
        while (rundate <= endDate) {

            let d = rundate.getDate();
            let m = rundate.getMonth() + 1;
            let q = m < 4 ? 1 : m < 7 ? 2 : m < 10 ? 3 : 4;
            let y = rundate.getFullYear();

            dates.push({
                Date: new Date(rundate),
                Day: d,
                Month: m,
                Quarter: q,
                Year: y
            });
            rundate.setDate(rundate.getDate() + 1);
        };

        if (this.rptGlobal.query.frequency == 1) {
            for (let i = 0; i < dates.length; i++) {
                const d = dates[i];

                let l = d.Day;
                if (dates.length < 8) {
                    let ds = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                    l = ds[d.Date.getDay()];
                }

                this.timeGroups.push({ Label: l, Day: d.Day, Month: d.Month, Quarter: d.Quarter, Year: d.Year });
            }
        }
        else if (this.rptGlobal.query.frequency == 2) {
            for (let i = 0; i < dates.length; i++) {
                const d = dates[i];

                let ms = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
                let l = ms[d.Month - 1];

                let f = this.timeGroups.find(e => e.Month == d.Month && e.Year == d.Year);
                if (!f) {
                    this.timeGroups.push({ Label: l, Month: d.Month, Quarter: d.Quarter, Year: d.Year });
                }
            }
        }
        else if (this.rptGlobal.query.frequency == 3) {
            for (let i = 0; i < dates.length; i++) {
                const d = dates[i];
                let l = 'Q' + d.Quarter;

                let f = this.timeGroups.find(e => e.Quarter == d.Quarter && e.Year == d.Year);
                if (!f) {
                    this.timeGroups.push({ Label: l, Quarter: d.Quarter, Year: d.Year });
                }
            }
        }
        else if (this.rptGlobal.query.frequency == 4) {
            for (let i = 0; i < dates.length; i++) {
                const d = dates[i];
                let l = 'Y' + d.Year;

                let f = this.timeGroups.find(e => e.Year == d.Year);
                if (!f) {
                    this.timeGroups.push({ Label: l, Year: d.Year });
                }
            }
        }
    }

    timeGroupCompare(e, g) {
        //Label: l, Day: d.Day, Month: d.Month, Quarter : d.Quarter, Year: d.Year
        let rundate = new Date(e.Date);

        let d = rundate.getDate();
        let m = rundate.getMonth() + 1;
        let q = m < 4 ? 1 : m < 7 ? 2 : m < 10 ? 3 : 4;
        let y = rundate.getFullYear();

        if (g.Day) {
            return g.Day == d && g.Month == m && g.Year == y;
        }
        else if (g.Month) {
            return g.Month == m && g.Year == y;
        }
        else if (g.Quarter) {
            return g.Quarter == q && g.Year == y;
        }
        else if (g.Year) {
            return g.Year == y;
        }

        return false;
    }

    calcSumGroupData(ds, sumby) {
        let group = [];
        for (let j = 0; j < this.timeGroups.length; j++) {
            const g = this.timeGroups[j];
            let sum = ds.Data.filter((e) => {
                return this.timeGroupCompare(e, g)
            }).map(m => m[sumby]).reduce((a, b) => a + b, 0);
            group.push(sum);
        }
        return group;
    }

    buildSoLuongTiecChart(canvasElement) {
        let result = new Observable(ob => {
            let datasets = this.buildDataset();


            for (let i = 0; i < datasets.length; i++) {
                const ds = datasets[i];
                ds.showLine = true;
                ds.fill = false;
                ds.data = this.calcSumGroupData(ds, 'Event');
            }

            let ctx = canvasElement.nativeElement.getContext("2d");

            var data = {
                labels: this.timeGroups.map(m => m.Label),
                datasets: datasets,
            };

            let chart = new Chart(ctx, {
                type: 'line',
                options: this.rptGlobal.rptOptions.lineChart,
                data: data,
            });

            ob.next(chart);
        });
        return result;
    }


    //Tính tổng tất cả. vd: chi nhánh
    sumDatasetGroupCalc(datasets) {
        let ds = datasets[0];
        for (let i = 0; i < ds.data.length; i++) {
            ds.data[i] = 0;
            for (let j = 1; j < datasets.length; j++) {
                const d = datasets[j];
                ds.data[i] += d.data[i];
            }
        }
    }

    randomScalingFactor(min = 30, max = 100) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    createHorizontalGradientStroke(ctx, width, color) {
        var gradientStroke = ctx.createLinearGradient(width, 0, 0, 0);
        gradientStroke.addColorStop(0, color + 'FF');
        gradientStroke.addColorStop(0.9, color + '00');
        gradientStroke.addColorStop(1, color + '00');
        return gradientStroke;
    }

    createVerticalGradientStroke(ctx, height, color) {
        var gradientStroke = ctx.createLinearGradient(0, 0, 0, height);
        gradientStroke.addColorStop(0, color + 'FF');
        gradientStroke.addColorStop(0.9, color + '00');
        gradientStroke.addColorStop(1, color + '00');
        return gradientStroke;
    }



    buildBarChart(chart, ctx, data) {

        //ctx.height = 255;
        // var width = ctx.width;
        // var height = ctx.height;
        ctx = ctx.getContext("2d");

        if (chart != null)
            chart.destroy();

        chart = new Chart(ctx, {
            type: 'bar',
            options: this.rptGlobal.rptOptions.barChart,
            data: data,
        });
    }



    buildPieChart(chart, ctx, data) {
        // ctx.height = 200;
        // ctx.weight = 200;
        // var width = ctx.width;
        // var height = ctx.height;
        ctx = ctx.getContext("2d");

        if (chart != null)
            chart.destroy();

        chart = new Chart(ctx, {
            type: 'pie',
            options: this.rptGlobal.rptOptions.pieChart,
            data: data,
        });


    }

    //// amcharts Code 
    amColumnRoot;
    amPieRoot;
    amGaugeRoot;
    amLineRoot;
    amTwoLevelPieRoot;
    amColumnLineMixRoot;
    amTrendLinesRoot;
    amHighlightingRoot;
    amSortedBarRoot;
    amClusterColumnRoot;
    amStackedBarRoot;
    amStackedColumnRoot;
    amGroupedSortedColumnRoot;
    amMultilevelTreeRoot;

    DisposeChart(chart) {
        if(chart) {
            chart?.dispose();
        }
    }

    newColumnRoot(string) {
        this.DisposeChart(this.amColumnRoot)
        return this.amColumnRoot = am5.Root.new(string);
    }

    newPieRoot(string) {
        this.DisposeChart(this.amPieRoot)
        return this.amPieRoot = am5.Root.new(string);
    }

    newGaugeRoot(string) {
        this.DisposeChart(this.amGaugeRoot)
        return this.amGaugeRoot = am5.Root.new(string);
    }

    newLineRoot(string) {
        this.DisposeChart(this.amLineRoot)
        return this.amLineRoot = am5.Root.new(string);
    }

    newTwoLevelPieRoot(string) {
        this.DisposeChart(this.amTwoLevelPieRoot)
        return this.amTwoLevelPieRoot = am5.Root.new(string);
    }

    newColumnLineMixRoot(string) {
        this.DisposeChart(this.amColumnLineMixRoot)
        return this.amColumnLineMixRoot = am5.Root.new(string);
    }

    newTrendLinesRoot(string) {
        this.DisposeChart(this.amTrendLinesRoot)
        return this.amTrendLinesRoot = am5.Root.new(string);
    }

    newHighlightingRoot(string) {
        this.DisposeChart(this.amHighlightingRoot)
        return this.amHighlightingRoot = am5.Root.new(string);
    }

    newSortedBarRoot(string) {
        this.DisposeChart(this.amSortedBarRoot)
        return this.amSortedBarRoot = am5.Root.new(string);
    }

    newClusterColumnRoot(string) {
        this.DisposeChart(this.amClusterColumnRoot)
        return this.amClusterColumnRoot = am5.Root.new(string);
    }

    newStackedBarRoot(string) {
        this.DisposeChart(this.amStackedBarRoot)
        return this.amStackedBarRoot = am5.Root.new(string);
    }

    newStackedColumnRoot(string) {
        this.DisposeChart(this.amStackedColumnRoot)
        return this.amStackedColumnRoot = am5.Root.new(string);
    }

    newGroupedSortedColumnRoot(string) {
        this.DisposeChart(this.amGroupedSortedColumnRoot)
        return this.amGroupedSortedColumnRoot = am5.Root.new(string);
    }

    newMultilevelTreeRoot(string) {
        this.DisposeChart(this.amMultilevelTreeRoot)
        return this.amMultilevelTreeRoot = am5.Root.new(string);
    }

    AmChartGlobal: any = {
        pieOpt: {
            Chart: {
                // startAngle: 0,  // 
                endAngle: 270,  // Tạo hình vòng tròn (0 >> 360), hoặc tạo thành nửa vòng tròn ( -270 >> 90 )
                // radius: am5.percent(60), // Độ to, nhỏ của vòng tròn pie chart
                // innerRadius: am5.percent(0) // Độ rỗng của pie chart >> để tạo donut chart
            }

        },
        gaugeOpt: {
            Chart: {
                panX: false,
                panY: false,
                startAngle: 160,
                endAngle: 380
            },
            AxisRenderer: {
                innerRadius: -40
            },
            ClockHand: {
                pinRadius: am5.percent(20),
                radius: am5.percent(100),
                bottomWidth: 40
            },
            Label: {
                fill: am5.color(0xffffff),
                centerX: am5.percent(50),
                textAlign: "center",
                centerY: am5.percent(50),
                fontSize: "3em"
            }
        },
        twolevelpieOpt: {

        },
        columnlinemixOpt: {

        },
        trendlinesOpt: {
            Chart: {
                focusable: true,
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX"
            }
        },
        highlightingOpt: {
            Chart: {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                maxTooltipDistance: 0
            }
        },
        stackedbarOpt: {
            Chart: {}
        }
    }




}
