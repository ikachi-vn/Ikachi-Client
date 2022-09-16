import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActionSheetController, NavController, Platform } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { ReportService } from 'src/app/services/report.service';
import { lib } from 'src/app/services/static/global-functions';
import { CustomService } from 'src/app/services/custom.service';
import { formatDate } from '@angular/common';
import { FormBuilder, FormControl } from '@angular/forms';
import { BI_Finance_BalanceSheetsProvider, CRM_ContactProvider, FINANCE_GeneralLedgerProvider } from 'src/app/services/static/services.service';
import { FunnelChartComponent } from 'src/app/components/charts/funnel-chart/funnel-chart.component';
import { BarChartComponent } from 'src/app/components/charts/bar-chart/bar-chart.component';
import { BarImageChartComponent } from 'src/app/components/charts/bar-image-chart/bar-image-chart.component';
import { LineChartComponent } from 'src/app/components/charts/line-chart/line-chart.component';
import { PieChartComponent } from 'src/app/components/charts/pie-chart/pie-chart.component';
import { XyChartComponent } from 'src/app/components/charts/xy-chart/xy-chart.component';
import { GanttChartComponent } from 'src/app/components/charts/gantt-chart/gantt-chart.component';

@Component({
  selector: 'app-finance-balance-sheet',
  templateUrl: './finance-balance-sheet.page.html',
  styleUrls: ['./finance-balance-sheet.page.scss'],
})
export class FinanceBalanceSheetPage extends PageBase {

  @ViewChild(FunnelChartComponent) funnel;
  @ViewChild(BarChartComponent) bar;
  @ViewChild(BarImageChartComponent) barimage;
  @ViewChild(LineChartComponent) line;
  @ViewChild(PieChartComponent) pie;
  @ViewChild(XyChartComponent) xy;
  @ViewChild(GanttChartComponent) ganttchart;
  @ViewChild('gantt_here') ganttContainer: ElementRef;
  @ViewChild('myCover') coverContainer: ElementRef;

  dataDailyGeneral = []
  rawDailyGeneral = []

  selectedBranchID = 22;
  pageBranch = [];

  contacts = [];
  accounts = [];

  xyChartTestData = [
    {
      category: "Part 1",
      value1: 1000,
      value2: 588,
      value3: 700
    },
    {
      category: "Part 2",
      value1: 1200,
      value2: 1800,
      value3: 700
    },
    {
      category: "Part 3",
      value1: 850,
      value2: 1230,
      value3: 700
    }
  ];

  pieChartTestData = [
    {
      country1: "France",
      sales1: 100000
    }, {
      country1: "Spain",
      sales1: 160000
    }, {
      country1: "United Kingdom",
      sales1: 80000
    }
  ];

  barChartTestData = [
    {
      year: "2017",
      income: 23.5,
      expenses: 18.1
    }, {
      year: "2018",
      income: 26.2,
      expenses: 22.8
    }, {
      year: "2019",
      income: 30.1,
      expenses: 23.9
    }, {
      year: "2020",
      income: 29.5,
      expenses: 25.1
    }, {
      year: "2021",
      income: 24.6,
      expenses: 25
    }
  ];

  lineChartTestData = [

  ];

  funnelChartTestData = [
    { value1: 10, category1: "One" },
    { value1: 9, category1: "Two" },
    { value1: 6, category1: "Three" },
    { value1: 5, category1: "Four" },
    { value1: 4, category1: "Five" },
    { value1: 3, category1: "Six" },
    { value1: 1, category1: "Seven" }
  ];

  ganttChartTestData = [];

  //ChartName
  XYChartName = 'XYChartName';
  PieChartName = 'PieChartName';
  ConvertRateChart = 'FBSConvertRateChart';
  LineChartName = 'LineChartName';
  BarChartName = 'BarChartName';
  GanttChartName = 'GanttChartName';
  GanttID = 'gantt_here'
  


  toDay = new Date();
  defaultFromDate = formatDate(new Date(this.toDay.getFullYear(), this.toDay.getMonth(), 1), 'yyyy/MM/dd', 'en');
  defaultReportDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  defaultToDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  constructor(
    private pageService: CustomService,
    public pageProvider: BI_Finance_BalanceSheetsProvider,
    private contactProvider: CRM_ContactProvider,
    private generalLedgerProvider: FINANCE_GeneralLedgerProvider,
    public actionSheetController: ActionSheetController,
    public env: EnvService,
    public navCtrl: NavController,
    private platform: Platform,
    public rpt: ReportService,
    public formBuilder: FormBuilder,
  ) {
    super();
    this.formGroup = formBuilder.group({
      Name: [''],
      TaxCode: [''],
      Code: [''],
      CustomerCode: [''],
      AccountCode: [''],
    });

    //this.pageBranch  = ;
    this.rpt.rptGlobal.branch.forEach(val => this.pageBranch.push(Object.assign({}, val)));

    this.rpt.rptGlobal.query.fromDate = this.defaultFromDate;
    this.rpt.rptGlobal.query.toDate = this.defaultToDate;
    this.rpt.rptGlobal.query.reportDate = this.defaultReportDate;


    //this.pageBranch.splice(0,1);
    this.pageBranch.forEach((element, index) => {
      if (index != 0) this.pageBranch[index].IsHidden = true;
    });

    this.selectedBranchID = this.pageBranch[0].Id;

    this.loadData();
  }

  preLoadData() {
    Promise.all([
      this.contactProvider.read(),
      this.generalLedgerProvider.read(),
    ]).then(values => {
      // 2 arrays chứa thông tin của 2 cột ng-select.
      this.contacts = values[0]['data'];
      this.accounts = values[1]['data'];
      super.preLoadData(null);
    });
  }

  loadedData(event) {
    this.buildChart();
    super.loadedData(event);
  }

  buildChart() {
    this.bar.startingChart(this.BarChartName, this.barChartTestData);
    this.funnel.startingChart(this.ConvertRateChart,this.funnelChartTestData);
    this.line.startingChart(this.LineChartName, this.lineChartTestData);
    this.pie.startingChart(this.PieChartName, this.pieChartTestData);
    this.xy.startingChart(this.XYChartName, this.xyChartTestData);

    debugger
    // this.ganttchart.startingChart(this.GanttChartName, this.ganttChartTestData);


  }


  changeDateFillter(type) {
    this.rpt.dateQuery(type)
      .then(_ => {
        this.loadData();
      }).catch(err => { let a = err });
  }

  changeFrequency(f) {
    this.rpt.rptGlobal.query.frequency = f.Id;
    this.loadData();
  }

  toogleBranchDataset(b) {
    b.IsHidden = false;
    this.selectedBranchID = b.Id;

    this.pageBranch.forEach((element, index) => {
      if (element.Id != b.Id) this.pageBranch[index].IsHidden = true;
    });

    // this.preBuildDailyGeneralTree();
  }

  changeCustomerCodeFillter(i) {
    i.Code;

    var it = i.forEach(i => {
      i.Code;

      //Code to get value from Database here.
    })
  }

  changeAccountCodeFillter(i) {
    i.Code;

    var it = i.forEach(i => {
      i.Code;

      //Code to get value from Database here.
    })
  }



}
