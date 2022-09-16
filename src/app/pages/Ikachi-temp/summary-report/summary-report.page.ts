import { inBounds } from '@amcharts/amcharts5/.internal/core/util/Math';
import { Component } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { concat, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { IkachiService } from 'src/app/services/ikachi.service';
import { ReportService } from 'src/app/services/report.service';
import { lib } from 'src/app/services/static/global-functions';
import { HRM_StaffProvider, SALE_OrderDetailProvider, SALE_OrderProvider, SYS_StatusProvider } from 'src/app/services/static/services.service';

@Component({
  selector: "app-summary-report",
  templateUrl: "summary-report.page.html",
  styleUrls: ["summary-report.page.scss"],
})
export class SummaryReportPage extends PageBase {
  saleOrderStatusList: any;

  constructor(
    // public pageProvider: SALE_OrderProvider,
    public orderDetailProvider: SALE_OrderDetailProvider,
    public staffProvider: HRM_StaffProvider,
    public statusProvider: SYS_StatusProvider,
    public actionSheetController: ActionSheetController,
    public env: EnvService,
    public navCtrl: NavController,
    public rpt: ReportService,
    public ikachiService: IkachiService
  ) {
    super();
    this.ikachiService.getBranchesList().toPromise().then((resp:any) => {
      this.pageBranch = resp;
      // this.toogleBranchDataset(this.env.selectedBranch);
    });
  }

  fromDate = "2022-06-01";
  toDate = "2022-06-30";
  selectedBranchID = 2;
  selectedBTNBranch = {ID: 2, Code: 'HYEC'}; //default
  listItems = [];
  listNames = [];
  pageBranch = [];

  // toogleBranchDataset(b) {
  //   // b.IsSelected = false;
  //   this.selectedBranchID = b.ID;

  //   debugger

  //   // this.pageBranch.forEach((element, index) => {
  //   //   if (element.ID == b.ID) {this.pageBranch[index].IsSelected = true;}
  //   //   else {this.pageBranch[index].IsSelected = false;}
  //   // });

  //   this.preLoadData(null);
  // }

  preLoadData(event) {
    this.fromDate = this.rpt.rptGlobal.query.fromDate;
    this.toDate = this.rpt.rptGlobal.query.toDate + " 23:59:59";
    this.selectedBranchID = this.env.selectedBranch;
    super.preLoadData(event);
  }

  loadData(event) {
    this.preBuildBSTree();
    super.loadedData(event);
  }

  preBuildBSTree() {
    this.listItems = [];
    this.listNames = [];
    return new Promise(() => {
      this.ikachiService.getCustomGroupService(this.fromDate, this.toDate, this.selectedBranchID).then((resp: any) => {

        let that = this;
        that.listItems = resp.data;

        that.listItems.forEach(element => {
          if (element.GroupType2 == null) {
            const index = that.listItems.indexOf(element, 0);
            that.listItems.splice(index, 1);
          }
        });
      });
    });
  }

  refresh() {
    this.preLoadData(null);
  }

  changeDateFilter(type) {
    this.rpt.dateQuery(type).then((_) => {
        this.preLoadData(null);
      })
      .catch((err) => {
        let a = err;
      });
  }
}
