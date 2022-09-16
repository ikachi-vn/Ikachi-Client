import { Component, OnInit } from "@angular/core";
import { ActionSheetController, NavController } from "@ionic/angular";
import { PageBase } from "src/app/page-base";
import { EnvService } from "src/app/services/core/env.service";
import { IkachiService } from "src/app/services/ikachi.service";
import { ReportService } from "src/app/services/report.service";
import { lib } from "src/app/services/static/global-functions";
import { SYS_StatusProvider } from "src/app/services/static/services.service";

@Component({
  selector: "app-revenue-detail-report",
  templateUrl: "revenue-detail-report.page.html",
  styleUrls: ["revenue-detail-report.page.scss"],
})
export class RevenueDetailReportPage extends PageBase {

  constructor(
    // public pageProvider: SALE_OrderProvider,
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
      // this.toogleBranchDataset(this.selectedBTNBranch);
    });
  }

  fromDate = "2022-06-01";
  toDate = "2022-06-30";
  selectedBranchID = 2;
  // selectedBTNBranch = {ID: 2, Code: 'HYEC'}; //default
  listItems = [];
  pageBranch = [];

  // toogleBranchDataset(b) {
  //   b.IsSelected = false;
  //   this.selectedBranchID = b.ID;

  //   this.pageBranch.forEach((element, index) => {
  //     if (element.ID == b.ID) {this.pageBranch[index].IsSelected = true;}
  //     else {this.pageBranch[index].IsSelected = false;}
  //   });

  //   this.preLoadData(null);
  // }

  preLoadData(event) {
    this.fromDate = this.rpt.rptGlobal.query.fromDate;
    this.toDate = this.rpt.rptGlobal.query.toDate + 'T23:59:59';
    this.selectedBranchID = this.env.selectedBranch;
    super.preLoadData(event);
  }

  loadData(event) {
    this.preBuildBSTree();
    super.loadedData(event);
  }
  
  preBuildBSTree() {
    this.listItems = [];
    return new Promise((resolve) => {
      this.ikachiService.getCustomGroupSaleInvoice(this.fromDate, this.toDate, this.selectedBranchID).then((resp: any) => {

          let that = this;
          let data = resp.data;
          const names = data.map((element) => element.ItemGroupCode);
          const uniqueNames = [...new Set(names)];

          uniqueNames.forEach((element) => {
            let tempArray = [];

            let sumQuantity = 0;
            let sumSaleAmount = 0;
            let sumDiscountAmount = 0;
            let sumTotalAmount = 0;

            let sumQuantityText;
            let sumSaleAmountText;
            let sumDiscountAmountText;
            let sumTotalAmountText;

            data.forEach((element2) => {
              if (element === element2.ItemGroupCode) {
                tempArray.push(element2);

                sumQuantity += element2.Quantity;
                sumSaleAmount += element2.SaleAmount;
                sumDiscountAmount += element2.DiscountAmount;
                sumTotalAmount += element2.TotalAmount;
              }
            });

            tempArray.forEach((i) => {
              i.QuantityText = lib.formatMoney(i.Quantity, 0);
              i.SaleAmountText = lib.formatMoney(i.SaleAmount, 0);
              i.DiscountAmountText = lib.formatMoney(i.DiscountAmount, 0);
              i.TotalAmountText = lib.formatMoney(i.TotalAmount, 0);
            });

            sumQuantityText = lib.formatMoney(sumQuantity, 0);
            sumSaleAmountText = lib.formatMoney(sumSaleAmount, 0);
            sumDiscountAmountText = lib.formatMoney(sumDiscountAmount, 0);
            sumTotalAmountText = lib.formatMoney(sumTotalAmount, 0);

            tempArray.push({
              SumLine: true,
              ItemGroupCode: "Total: " + tempArray[0].ItemGroupCode,
              QuantityText: sumQuantityText,
              SaleAmountText: sumSaleAmountText,
              DiscountAmountText: sumDiscountAmountText,
              TotalAmountText: sumTotalAmountText,
            });

            that.listItems.push({ Code: element, DataList: tempArray });
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
