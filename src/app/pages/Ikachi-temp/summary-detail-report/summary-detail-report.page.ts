import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { IkachiService } from 'src/app/services/ikachi.service';
import { ReportService } from 'src/app/services/report.service';
import { lib } from 'src/app/services/static/global-functions';


@Component({
  selector: 'app-summary-detail-report',
  templateUrl: 'summary-detail-report.page.html',
  styleUrls: ['summary-detail-report.page.scss'],
})
export class SummaryDetailReportPage extends PageBase {

  constructor(
    // public pageProvider: SALE_OrderProvider,
    public actionSheetController: ActionSheetController,
    public env: EnvService,
    public navCtrl: NavController,
    public rpt: ReportService,
    public ikachiService: IkachiService
  ) {
    super();
  }

  test2Data = [
    {
      IDParent: null,
      Id: 1,
      Code: "1",
      Name: "Chuẩn đoán hình ảnh",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 1,
      Id: 2,
      Code: "1.1",
      Name: "Chụp bản đồ giác mạc",
      SoLuong: 1,
      BanHang: 1,
      GiamGia: 1,
      TongCong: 1,
    },
    {
      IDParent: 1,
      Id: 3,
      Code: "1.2",
      Name: "Chụp đáy mắt",
      SoLuong: 1,
      BanHang: 1,
      GiamGia: 1,
      TongCong: 2,
    },
    {
      IDParent: 1,
      Id: 4,
      Code: "1.3",
      Name: "Chụp OCT phần sau nhãn cầu (Gai thị, Hoàng điểm)",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 1,
      Id: 5,
      Code: "1.4",
      Name: "Chụp OCT phần sau nhãn cầu (Gai thị, Hoàng điểm) 2 mắt",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 1,
      Id: 6,
      Code: "1.5",
      Name: "Chụp OCT phần trước nhãn cầu (Góc TP, Vault, Giác mạc) 1 mắt",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 1,
      Id: 7,
      Code: "1.6",
      Name: "Chụp OCT phần trước nhãn cầu (Góc TP, Vault, Giác mạc) 2 mắt",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 1,
      Id: 8,
      Code: "1.7",
      Name: "Đếm tế bào nội mô",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: null,
      Id: 9,
      Code: "2",
      Name: "Dịch vụ khác",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 9,
      Id: 10,
      Code: "2.1",
      Name: "Giảm phí khám 150K",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 9,
      Id: 11,
      Code: "2.2",
      Name: "Giảm trừ voucher 100.000",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
    {
      IDParent: 9,
      Id: 12,
      Code: "2.3",
      Name: "Dịch vụ khác",
      SoLuong: 0,
      BanHang: 0,
      GiamGia: 0,
      TongCong: 0,
    },
  ]

  dataBalanceSheet = [];
  fromDate = '2022-06-01';
  toDate = '2022-06-30';
  selectedBranchID = 2;

  preLoadData(event) {
    this.fromDate = this.rpt.rptGlobal.query.fromDate;
    this.toDate = this.rpt.rptGlobal.query.toDate + ' 23:59:59';
    super.preLoadData(event);
  }

  loadData(event) {
    this.preBuildBSTree();
    super.loadedData(event);
  }

  preBuildBSTree() {
    let treeState = this.dataBalanceSheet;
    let treeItems = [];
    let listItems = [];
    return new Promise(resolve => {

      this.ikachiService.getCustomGroupSaleInvoice(this.fromDate,this.toDate,this.selectedBranchID).then((resp: any) => {
        let grouped = {};

        resp.forEach(function (a) {
          listItems[a.ItemGroupCode] = listItems[a.ItemGroupCode] || [];
          listItems[a.ItemGroupCode].push({ title: a.ItemDescription, totalAmount: a.TotalAmount });
        });
          let flatHeader = ["SoLuong", "BanHang", "GiamGia", "TongCong"];
          treeItems = [];
          try {
            this.buildTree(listItems, treeItems, null, flatHeader);
          } catch (error) {
            console.log(error)
            debugger;
          }
          let currentParent = null;
          treeItems.forEach(i => {

            currentParent = treeItems.find(d => d.Id == i.IDParent);

            let f = treeState.find(d => d.Id == i.Id);
            if (f) {
              i.show = !currentParent ? true : ((currentParent.showdetail && f.show) ? true : false);
              i.showdetail = f.showdetail ? true : false;

            }
            else {
              i.show = !currentParent ? true : currentParent.showdetail;
              i.showdetail = false;
            }
          });

          let needCalcItems = treeItems.filter(i => { return i.Name ? i.Name.indexOf('=') > -1 : false });


          flatHeader.forEach(h => {
            needCalcItems.forEach(c => {
              let fomular = c.Name.split('=')[1];
              let groups = fomular.match(/([0-9]+)/g);
              groups.forEach(g => {
                console.log(g)
                fomular = fomular.split(g).join('treeItems.find(i=> i.Code && i.Code.indexOf("' + g + '")==0)["' + h + '"]');
                console.log(fomular)
              });

              try {
                console.log(c[h])
                c[h] = eval(fomular);

              } catch (error) {
                debugger;
              }


            });

          });

          treeItems.forEach(i => {
            // i.HasChild = resp.findIndex(d => d.IDParent == i.Id) > -1;
            i.HasChild = this.test2Data.findIndex(d => d.IDParent == i.Id) > -1;
            flatHeader.forEach(h => {
              if (i[h]) {
                i[h] = lib.formatMoney(i[h], 0, '', '.');
              }
              else {
                i[h] = 0;
              }
            });
          });

          this.dataBalanceSheet = treeItems;
        });
    });
  }

  buildTree(listItem, treeItems, item, hierarchicalSumCols = []) {
    let idp = item == null ? null : item.Id;
    let childrent = listItem.filter(d => d.IDParent == idp);
    let level = (item && item.level >= 0) ? item.level + 1 : 1;

    if (item) {
      item.count = childrent.length;

    }

    let index = treeItems.findIndex(d => d.Id == idp)
    treeItems.splice(index + 1, 0, ...childrent);

    childrent.forEach(i => {
      i.levels = Array(level).fill('');
      i.level = level;
      i.show = item == null ? true : false;
      i.showdetail = false;

      this.buildTree(listItem, treeItems, i, hierarchicalSumCols);
      if (item) {
        hierarchicalSumCols.forEach(col => {
          if (!i[col]) {
            i[col] = 0;
          }
          // if(!item.IsRevenue){
          //     i[col] = i[col] * -1;
          // }
          item[col] += i[col];
        });
      }

    });
  }

  refresh() {
    this.preLoadData(null);
  }

  changeDateFilter(type) {
    this.rpt.dateQuery(type)
      .then(_ => {
        this.preLoadData(null);
      }).catch(err => { let a = err });
  }

  toggleRow(ls, ite, toogle = false) {

    if (ite && ite.showdetail && toogle) {
      //hide
      ite.showdetail = false;
      this.showHideAllNestedFolder(ls, ite.Id, false, ite.showdetail);

    }
    else if (ite && !ite.showdetail && toogle) {
      //show loaded
      ite.showdetail = true;
      this.showHideAllNestedFolder(ls, ite.Id, true, ite.showdetail);
    }
  }

  showHideAllNestedFolder(ls, Id, isShow, showDetail) {
    ls.filter(d => d.IDParent == Id).forEach(i => {
      if (!isShow || showDetail) {
        i.show = isShow;
      }
      this.showHideAllNestedFolder(ls, i.Id, isShow, i.showdetail);
    });
  }

}
