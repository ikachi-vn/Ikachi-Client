import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActionSheetController, NavController } from '@ionic/angular';
import { concat, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { BarChartComponent } from 'src/app/components/charts/bar-chart/bar-chart.component';
import { BarImageChartComponent } from 'src/app/components/charts/bar-image-chart/bar-image-chart.component';
import { DonutChartComponent } from 'src/app/components/charts/donut-chart/donut-chart.component';
import { FunnelChartComponent } from 'src/app/components/charts/funnel-chart/funnel-chart.component';
import { PieChartComponent } from 'src/app/components/charts/pie-chart/pie-chart.component';
import { XyChartComponent } from 'src/app/components/charts/xy-chart/xy-chart.component';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { ReportService } from 'src/app/services/report.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { HRM_StaffProvider, SALE_OrderDetailProvider, SALE_OrderProvider, SYS_StatusProvider } from 'src/app/services/static/services.service';

@Component({
  selector: 'app-sale-order-report',
  templateUrl: './sale-order-report.page.html',
  styleUrls: ['./sale-order-report.page.scss'],
})
export class SaleOrderReportPage extends PageBase {

  @ViewChild(PieChartComponent) pie;
  @ViewChild(XyChartComponent) xy;
  @ViewChild(BarImageChartComponent) barimage;
  @ViewChild(BarChartComponent) bar;
  @ViewChild(DonutChartComponent) donut;
  @ViewChild(FunnelChartComponent) funnel;

  StaffInfo;
  saleOrderStatusList = [];

  SOSummaryData = [];
  SOConvertRateData = [];
  Top10SalemanData = [];
  Top10ProductsData = [];
  Top10SalesData = [];
  pageBranch = [];
  selectedBranchID = 22;
  ItemsSummary = {
    TotalAfterTaxText: '',
    TotalTaT: 0,
    TotalGuest: 0,
    TotalSO: 0,
  };
  
  // NameChart
  SOConvertRateChart = 'SOConvertRateChart';
  SOSummaryChart = 'SOSummaryChart';
  TopSaleMan = 'TopSaleMan';
  TopProduct = 'TopProduct';
  TopSale = 'TopSale';

  constructor(
    public pageProvider: SALE_OrderProvider,
    public orderDetailProvider: SALE_OrderDetailProvider,
    public staffProvider: HRM_StaffProvider,
    public statusProvider: SYS_StatusProvider,
    public actionSheetController: ActionSheetController,
    public env: EnvService,
    public navCtrl: NavController,
    public rpt: ReportService,
    public formBuilder: FormBuilder,
  ) {
    super();
    this.query.IDStatus = ''; //Tất cả
    this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;

    //set default to week;
    let toDay = new Date();
    let weekDates = lib.getWeekDates(toDay);
    this.rpt.rptGlobal.query.fromDate = lib.dateFormat(weekDates[0], 'yyyy-mm-dd');
    this.rpt.rptGlobal.query.toDate = lib.dateFormat(weekDates[6], 'yyyy-mm-dd');
    this.rpt.rptGlobal.query.type = 'dw';

    //this.pageBranch  = ;
    this.rpt.rptGlobal.branch.forEach(val => this.pageBranch.push(Object.assign({}, val)));

    //this.pageBranch.splice(0,1);
    this.pageBranch.forEach((element, index) => {
      if (index != 0) this.pageBranch[index].IsHidden = true;
    });
    this.selectedBranchID = this.pageBranch[0].Id;
    
    this.staffSearch();
    this.initSaleOrderStatus();
  }

  preLoadData(event) {
    // this.sort.Id = 'Id';
    this.sortToggle('OrderDate', true);
    super.preLoadData(event);
  }

  loadData(event) {
    this.query.IDOwner = this.StaffInfo ? this.StaffInfo.Id : 'all';
    this.query._saleman = this.query.IDOwner == 'all' ? null : this.StaffInfo;
    this.query.Take = 5000;
    this.query.Skip = 0;
    this.query.selectedBranchID = this.selectedBranchID;
    this.query.OrderDateFrom = this.rpt.rptGlobal.query.fromDate;
    this.query.OrderDateTo = this.rpt.rptGlobal.query.toDate + 'T23:59:59';
    this.query._toDate = this.rpt.rptGlobal.query.toDate;

    this.pageProvider.apiPath.getList.url = function () { return ApiSetting.apiDomain("SALE/Order/List") };
    super.loadData(event);
  }

  loadedData(event) {
    this.items.forEach(i => {
      i.OrderTimeText = i.OrderDate ? lib.dateFormat(i.OrderDate, 'hh:MM') : '';
      i.OrderDateText = i.OrderDate ? lib.dateFormat(i.OrderDate, 'dd/mm/yy') : '';
      i.TotalAfterTaxText = lib.currencyFormat(i.TotalAfterTax ? i.TotalAfterTax : 0);
    });
    this.items;
    
    this.buildSummary();
    this.buildXYChart(); // Done
    this.buildFunnelChart(); // Done
    this.buildTop10SalemanBarImageChart(); // Done
    this.buildTop10ProductsBarChart(); // Done
    this.buildTop10SalesBarChart(); //Done
    super.loadedData(event);
  }

  buildSummary() {
    let TotalTaT = 0;
    let uniqueIDContact;
    
    // build total
    for (let i = 0; i < this.items.length; i++) {
      let TaT = this.items[i].TotalAfterTax;
      TotalTaT += TaT;
    }

    uniqueIDContact = [...new Set(this.items.map(item => item.IDContact))];
    

    this.ItemsSummary.TotalTaT = TotalTaT;
    this.ItemsSummary.TotalAfterTaxText = lib.currencyFormat(this.ItemsSummary.TotalTaT);
    this.ItemsSummary.TotalSO = this.items.length;
    this.ItemsSummary.TotalGuest = uniqueIDContact.length;
  }

  //Sale Order Summary
  buildXYChart() {
    // resetData
    this.SOSummaryData = [];
    let uniqueDate = [];

    // get Date List
    // loop through each date, if same >> plus value
    uniqueDate = [...new Set(this.items.map(item => item.OrderDate))];
    uniqueDate.sort();

    for (let uD = 0; uD < uniqueDate.length; uD++) {
      let TotalTaT = 0;
      let sameDate = [];

      for (let so = 0; so < this.items.length; so++) {
        // sameDate Array hold SO having same date for each UniqeDate
        sameDate = this.items.filter(st => (st.OrderDate == uniqueDate[uD]));
      }
      
      for (let i = 0; i < sameDate.length; i++) {
        let TaT = sameDate[i].TotalAfterTax;
        TotalTaT += TaT;
      }

      var key = 'category'; // Do not change!
      var key1 = 'DoanhThu';  // Change according to Label of value;
      var key2 = 'SoLuong';  // Change according to Label of value;

      // Only Tong Doanh Thu SO;
      this.SOSummaryData.push({[key]: uniqueDate[uD].substring(0,10), [key1+`${1}`]: TotalTaT });

      // Doanh Thu SO + So luong SO;
      // this.SOSummaryData.push({[key]: uniqueDate[uD].substring(0,10), [key1+`${1}`]: TotalTaT, [key2+`${2}`]: TotalTaT});
    }
    if (this.SOSummaryData.length != 0) {
      this.xy.startingChart(this.SOSummaryChart,this.SOSummaryData);
    }
  }

  //Sale Order Conversion Rate
  buildFunnelChart() {
    // resetData
    this.SOConvertRateData = [];
    let uniqueStatus = [];

    // get Status List
    // loop through each status, if same >> plus quantity
      uniqueStatus = [...new Map(this.items.map(item =>[item.Status.IDStatus, item])).values()];
    if (uniqueStatus.length > 1) {
      uniqueStatus = uniqueStatus.sort((a,b) => a.Status.IDStatus - b.Status.IDStatus);
    }

    for (let uS = 0; uS < uniqueStatus.length; uS++) { 

      let sameUS = [];
      sameUS = this.items.filter(st => (st.Status.IDStatus == uniqueStatus[uS].Status.IDStatus));

      var key = 'category'; // Do not change!
      var key1 = 'value';  // Change according to Label of value;
      var key2 = 'SoLuong';  // Change according to Label of value;

      // push object into array >> sort according to TotalTaT
      this.SOConvertRateData.push({[key+`${1}`]: sameUS[0].Status.Name, [key1+`${1}`]: sameUS.length});
    }

    if(this.SOConvertRateData.length != 0) {
      this.donut.startingChart(this.SOConvertRateChart,this.SOConvertRateData);
    }
  }

  //Top 10 Saleman
  buildTop10SalemanBarImageChart() {
    this.Top10SalemanData = [];
    let uniqeSalemanID = [];

    uniqeSalemanID = [...new Set(this.items.map(item => item.Saleman.Id))];
    for (let uD = 0; uD < uniqeSalemanID.length; uD++) {
      let TotalTaT = 0;
      let sameID = [];

      for (let so = 0; so < this.items.length; so++) {
        // sameID Array hold SO having same Id for each uniqeSalemanID
        sameID = this.items.filter(st => (st.Saleman.Id == uniqeSalemanID[uD]));
      }
      
      for (let i = 0; i < sameID.length; i++) {
        let TaT = sameID[i].TotalAfterTax;
        TotalTaT += TaT;
      }

      var key = 'name'; // Do not change!
      var key1 = 'DoanhThu';  // Change according to Label of value;
      var key2 = 'SoLuong';  // Change according to Label of value;

      // push object into array >> sort according to TotalTaT
      this.Top10SalemanData.push({[key]: sameID[0].Saleman.FullName, [key1+`${1}`]: TotalTaT});
      this.Top10SalemanData.sort((a, b) => (b[key1+`${1}`]) - (a[key1+`${1}`]));
    }

    //get top 10;
    this.Top10SalemanData = this.Top10SalemanData.slice(0, 10);

    if (this.Top10SalemanData.length != 0) {
      this.barimage.startingChart(this.TopSaleMan, this.Top10SalemanData);
    }
  }

  //Top 10 Sales
  buildTop10SalesBarChart() {
    // resetData
    this.Top10SalesData = [];
    let tempArray;
    tempArray = this.items.sort((a, b) => b.TotalAfterTax - a.TotalAfterTax);
    //get top 10;
    tempArray = tempArray.slice(0, 10);

    var key = 'name'; // Do not change!
    var key1 = 'DoanhThu';  // Change according to Label of value;
    var key2 = 'SoLuong';  // Change according to Label of value;

    for (let so = 0; so < tempArray.length; so++) {
      this.Top10SalesData.push({ [key]: tempArray[so].Name? tempArray[so].Name : tempArray[so].CustomerName, [key1 + `${1}`]: tempArray[so].TotalAfterTax });
    }

    if (this.Top10SalesData.length != 0) {
      this.bar.startingChart(this.TopSale, this.Top10SalesData);
    }
  }

  //Top 10 Products
  buildTop10ProductsBarChart() {
    // resetData
    this.Top10ProductsData = [];
    var OrderLines = [];
    let uniqeIDItem = [];
    let TotalTaT = 0;
  
    this.orderDetailProvider.apiPath.getList.url = function () { return ApiSetting.apiDomain("SALE/OrderDetail/List") };
    this.items.forEach((i, idx, array) => {
      this.orderDetailProvider.read({ IDOrder: i.Id }).then((result: any) => {
        OrderLines = OrderLines.concat(result.data);
        OrderLines = OrderLines.sort((a, b) => b.TotalAfterTax - a.TotalAfterTax);

        if (idx === array.length - 1) {

          // Get uniqueIDItem
          // Get 10 first uniqueIDItem (list)
          // Loop through the list to get the TaT and times ordered.

          //Get UniqueIDItem
          uniqeIDItem = [...new Set(OrderLines.map(item => item.IDItem))];

          for (let uI = 0; uI < uniqeIDItem.length; uI++) {
            let TotalTaT = 0;
            let sameID = [];

            for (let so = 0; so < OrderLines.length; so++) {
              // sameID Array hold SO having same Id for each uniqeSalemanID
              sameID = OrderLines.filter(st => (st.IDItem == uniqeIDItem[uI]));
            }

            for (let i = 0; i < sameID.length; i++) {
              let TaT = sameID[i].TotalAfterTax;
              TotalTaT += TaT;
            }

            var key = 'name'; // Do not change!
            var key1 = 'DoanhThu';  // Change according to Label of value;
            var key2 = 'SoLuong';  // Change according to Label of value;
      
            // push object into array >> sort according to TotalTaT
            this.Top10ProductsData.push({[key]: sameID[0].ItemName, [key1+`${1}`]: TotalTaT, [key2+`${1}`]: sameID.length});
            this.Top10ProductsData.sort((a, b) => (b[key1+`${1}`]) - (a[key1+`${1}`]));

            // get top 10 product;
            this.Top10ProductsData = this.Top10ProductsData.slice(0, 10);
          }

          if (this.Top10ProductsData.length != 0) {
            this.bar.startingChart(this.TopProduct, this.Top10ProductsData);
          }
        }
      });
    });
  }

  refresh() {
    this.preLoadData(null);
  }

  staffList$
  staffListLoading = false;
  staffListInput$ = new Subject<string>();
  staffListSelected = [];
  staffSelected = null;
  staffSearch() {
    this.staffListLoading = false;
    this.staffList$ = concat(
      of(this.staffListSelected),
      this.staffListInput$.pipe(
        distinctUntilChanged(),
        tap(() => this.staffListLoading = true),
        switchMap(term => this.staffProvider.search({ Take: 5000, Skip: 0, IDDepartment: this.env.selectedBranchAndChildren, Term: term }).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.staffListLoading = false)
        ))
      )
    );
  }

  initSaleOrderStatus() {
    this.statusProvider.read({ IDParent: 1 }).then(response => {
      this.saleOrderStatusList = response['data'];
      this.saleOrderStatusList.unshift({ Id: '[101,102,103,104,110]', Name: 'Chưa giao', Color: 'primary' });
      this.saleOrderStatusList.unshift({ Id: '[104,113]', Name: 'Đơn chờ phân tài', Color: 'success' });
      this.saleOrderStatusList.unshift({ Id: '[103,110]', Name: 'Đơn chờ duyệt', Color: 'warning' });
      this.saleOrderStatusList.unshift({ Id: '', Name: 'Tất cả', Color: 'primary' });
    });
  }

  changeDateFillter(type) {
    this.rpt.dateQuery(type)
      .then(_ => {
        this.preLoadData(null);
      }).catch(err => { let a = err });
  }

  toogleBranchDataset(b) {
    b.IsHidden = false;
    this.selectedBranchID = b.Id;
    this.pageBranch.forEach((element, index) => {
      if (element.Id != b.Id) this.pageBranch[index].IsHidden = true;
    });

    this.preLoadData(null);
  }

  showDetail(i) {
    if (i.Id == 0 || !i.Status || i.Status.Id == 101 || i.Status.Id == 102 || (this.pageConfig.canChangeCustomerOfReviewOrder && i.IDStatus == 103)) {
      this.nav('sale-order-mobile/' + i.Id, 'forward');
    }
    else {
      this.nav('sale-order-mobile-viewer/' + i.Id, 'forward');
    }
  }

}
