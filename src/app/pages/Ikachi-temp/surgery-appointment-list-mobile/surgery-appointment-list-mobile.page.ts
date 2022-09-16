import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Capacitor } from '@capacitor/core';
import { AlertController, LoadingController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { CustomService } from 'src/app/services/custom.service';
import { IkachiService } from 'src/app/services/ikachi.service';
import { lib } from 'src/app/services/static/global-functions';
import { SALE_OrderProvider } from 'src/app/services/static/services.service';
import { PopoverPage } from '../../SYS/popover/popover.page';

@Component({
  selector: "app-surgery-appointment-list-mobile",
  templateUrl: "surgery-appointment-list-mobile.page.html",
  styleUrls: ["surgery-appointment-list-mobile.page.scss"],
})
export class SurgeryAppointmentListMobilePage extends PageBase {

  constructor(
    public pageProvider: SALE_OrderProvider,
    // public branchProvider: BRA_BranchProvider,
    public modalController: ModalController,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public env: EnvService,
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public ikachiService: IkachiService
  ) {
    super();
    this.pageConfig.canAdd = true
  }

  statusList = [
    {
      Id: 0,
      Name: 'Chưa xác nhận',
      Color: 'warning'
    },
    {
      Id: 1,
      Name: 'Đã xác nhận',
      Color: 'success'
    },
    {
      Id: 2,
      Name: 'Đã đến',
      Color:  'success'
    },
    {
      Id: 3,
      Name: 'Đã hủy',
      Color: 'danger'
    },
  ]


  customQuery:any = {
    selectedBTNDate: 'today', //default
    selectedBTNBranch: {ID: this.env.selectedBranch, Code: 'HYEC'}, //default
    fromDate: lib.dateFormat(new Date(), 'yyyy-mm-dd'),
    toDate: lib.dateFormat(new Date(), 'yyyy-mm-dd'),
    _toDate: lib.dateFormat(new Date(), 'yyyy-mm-dd') + " 23:59:59",
    BranchID: this.env.selectedBranch,
  };

  search(ev) {
    this.selectedItems = [];
    var val = ev.target.value;
    if (val == undefined) {
        val = '';
    }
    if (val.length > 2 || val == '') {
        this.query.Keyword = val;
        this.query.Skip = 0;
        this.pageConfig.isEndOfData = false;
        this.loadData('search');
    }
  }

  loadData(event) {
    if (event == 'search') {
      this.pageProvider.read(this.query).then((result: any) => {
        if (result.data.length == 0) {
          this.pageConfig.isEndOfData = true;
        }
        this.items = result.data;
        this.loadedData(null);
      });
    }
    else {
      this.ikachiService.getCustomAppointmentList(this.customQuery.fromDate, this.customQuery._toDate, this.customQuery.BranchID).then((data: any) => {
        this.items = data.data;
        this.loadedData(event);
      });
    }
  }

  loadedData(event) {
    let counter = 0;
    this.items.forEach(i => {


      Promise.all([
        this.ikachiService.getAppointment(i.ID).toPromise()
      ])
      .then(values => {
        let data:any = values[0];

        let apt = this.items.find(i => i.ID == data.ID);
        apt.Status = data.Status;

        if (counter == this.items.length -1) {
          this.items.forEach((i) => {
            i.AptDateText = lib.dateFormat(i.AptDate, "yyyy-mm-dd");
            i.AptTimeText = lib.dateFormat(i.AptDate, "hh:MM");
            i.ApprovalStatus = this.statusList.find(st => st.Id == i.Status);

            this.items = this.items.sort((x, y) => +new Date(y.AptDate) - +new Date(x.AptDate));
            super.loadedData(event);
          });
        }

        counter++;
      })
    });

    if (this.items.length == 0) {
      super.loadedData(event);
    }
  }

  currentPopover = null;
  async presentPopover(ev: any) {
    let popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {
        popConfig: {
          isShowDateRange: true,
          isShowBranchesSelect: false,
          dateRangeLabel: "Ngày lịch hẹn",
          isShowAppoinmentStatusSelect: false,
        },
        popData: {
          selectedBTNDate: this.customQuery.selectedBTNDate,
          selectedBTNBranch: this.customQuery.selectedBTNBranch,
          fromDate: this.customQuery.fromDate,
          toDate: this.customQuery.toDate,
          _toDate: this.customQuery._toDate,
          BranchID: this.customQuery.BranchID
        },
      },
      event: ev,
      cssClass: "sale-order-mobile-filter",
      translucent: true,
    });

    popover.onDidDismiss().then((result: any) => {
      //console.log(result);
      if (result.data) {
        this.customQuery.fromDate = result.data.fromDate;
        this.customQuery.toDate = result.data.toDate;
        this.customQuery._toDate = result.data.toDate + " 23:59:59";
        // this.customQuery.BranchID = result.data.BranchID;
        this.customQuery.BranchID = this.env.selectedBranch;
        this.customQuery.selectedBTNDate = result.data.selectedBTNDate;
        this.customQuery.selectedBTNBranch = result.data.selectedBTNBranch;
        this.refresh();
      }
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  dismissPopover() {
    if (this.currentPopover) {
      this.currentPopover.dismiss().then(() => {
        this.currentPopover = null;
      });
    }
  }

  scanning = false;
  scanQRCode() {
    if (
      !Capacitor.isPluginAvailable("BarcodeScanner") ||
      Capacitor.platform == "web"
    ) {
      this.env.showMessage(
        "Chức năng này chỉ dùng được trên điện thoại",
        "warning"
      );
      return;
    }
    BarcodeScanner.prepare().then(() => {
      BarcodeScanner.checkPermission({ force: true })
        .then((status) => {
          if (status.granted) {
            this.scanning = true;
            document.querySelector("ion-app").style.backgroundColor =
              "transparent";
            BarcodeScanner.startScan().then((result) => {
              console.log(result);
              let close: any = document.querySelector("#closeCamera");

              if (!result.hasContent) {
                close.click();
              }

              if (result.content.indexOf("O:") == 0) {
                //text = text.replace('O:', '');
                //this.navCtrl.navigateForward('/delivery/' + text);
                this.query.CustomerName = result.content;
                setTimeout(() => {
                  if (close) {
                    close.click();
                  }
                  this.refresh();
                }, 0);
              } else {
                this.env.showMessage(
                  "Bạn mới scan: " +
                    result.content +
                    ", vui lòng scan QR code trên phiếu giao nhận thanh toán."
                );
                setTimeout(() => this.scanQRCode(), 0);
              }
            });
          } else {
            this.alertCtrl
              .create({
                header: "Quét QR code",
                //subHeader: '---',
                message:
                  "Bạn chưa cho phép sử dụng camera, Xin vui lòng cấp quyền cho ứng dụng.",
                buttons: [
                  {
                    text: "Không",
                    role: "cancel",
                    handler: () => {},
                  },
                  {
                    text: "Đồng ý",
                    cssClass: "danger-btn",
                    handler: () => {
                      BarcodeScanner.openAppSettings();
                    },
                  },
                ],
              })
              .then((alert) => {
                alert.present();
              });
          }
        })
        .catch((e: any) => console.log("Error is", e));
    });
  }

  closeCamera() {
    if (
      !Capacitor.isPluginAvailable("BarcodeScanner") ||
      Capacitor.platform == "web"
    ) {
      return;
    }
    this.scanning = false;
    this.lighting = false;
    this.useFrontCamera = false;
    document.querySelector("ion-app").style.backgroundColor = "";
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  lighting = false;
  lightCamera() {
    // if (this.lighting) {
    //     this.qrScanner.disableLight().then(() => {
    //         this.lighting = false;
    //     });
    // }
    // else {
    //     this.qrScanner.enableLight().then(() => {
    //         this.lighting = true;
    //     });
    // }
  }

  useFrontCamera = false;
  reversalCamera() {
    // if (this.useFrontCamera) {
    //     this.qrScanner.useBackCamera().then(() => {
    //         this.useFrontCamera = false;
    //     });
    // }
    // else {
    //     this.qrScanner.useFrontCamera().then(() => {
    //         this.useFrontCamera = true;
    //     });
    // }
  }

  ionViewWillLeave() {
    this.closeCamera();
  }

  showDetail(i) {
    this.nav("surgery-appointment/" + i.ID, "forward");
  }

  add() {
    let newAppoinmentMobile = {
      ID: 0,
    };
    this.showDetail(newAppoinmentMobile);
  }
}
