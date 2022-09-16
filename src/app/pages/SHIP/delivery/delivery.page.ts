import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { SHIP_ShipmentProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Capacitor } from '@capacitor/core';

@Component({
    selector: 'app-delivery',
    templateUrl: 'delivery.page.html',
    styleUrls: ['delivery.page.scss']
})
export class DeliveryPage extends PageBase {
    selectedShipmentID = 0;
    sheets = [];
    isShowAll = false;
    constructor(
        public pageProvider: SHIP_ShipmentProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
        //private barcodeScanner: BarcodeScanner
    ) {
        super();
        // this.pageConfig.isShowSearch = true;
    }

    preLoadData(event) {

        // 301	NULL	Đã phân tài
        // 302	NULL	Chờ lấy hàng từ nhà bán
        // 303	NULL	Đã lấy hàng về kho
        // 304	NULL	Đang đóng gói
        // 305	NULL	Đang giao hàng
        // 306	NULL	Đã giao hàng
        // 328	NULL	Đã bàn giao
        if (this.pageConfig.canViewAllData) {
            this.query.IDShipper =  'all';
        }
        else{
            this.query.IgnoredBranch = true;
            this.query.IDShipper = this.env.user.StaffID;
        }
        
        this.query.IDStatus = '[301,302,303,304,305,306]';
        super.preLoadData(event);
    }

    loadData(event) {
        this.loadFromCache(event).then(_ => {
            this.loadedData(event);
            if (this.changedItems.length) {
                this.saveAllChange();
            }
            else {
                this.loadFromServer(event);
            }

        })

    }


    changedItems = [];

    loadFromCache(event) {
        return new Promise((resolve, reject) => {
            this.env.getStorage('deliveryData').then(data => {
                if (!data || !data.length) {
                    data = [];
                }
                this.changedItems = [];
                for (let i = 0; i < data.length; i++) {
                    let s = data[i];
                    for (let j = 0; j < s.ShipmentOrder.length; j++) {
                        let so = s.ShipmentOrder[j];

                        if (so?._state == 'waitSync') {
                            this.changedItems.push(so);
                        }
                    }

                    for (let j = 0; j < s.ShipmentDebt.length; j++) {
                        let so = s.ShipmentDebt[j];
                        if (so?._state == 'waitSync') {
                            this.changedItems.push(so);
                        }
                    }
                }

                this.sheets = data;
                resolve(true);
            });
        });
    }

    loadFromServer(event) {
        let apiPath = { method: "GET", url: function () { return ApiSetting.apiDomain("SHIP/Shipment/DeliveryShipment") } };
        this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), this.query)
            .toPromise()
            .then((resp: any) => {
                this.env.setStorage('deliveryData', resp).then(data => {
                    this.sheets = data;
                    this.loadedData(event);
                });
            }).catch(err => {
                this.env.showMessage(err.message ? err.message : 'Không tạo được danh sách.', 'danger');
                this.loadedData(event)
            });
    }

    clearStateOrders() {
        this.changedItems = [];
        this.loadFromServer(null);
    }

    saveAllChange() {
        let apiDeliveryOrderPath = { method: "PUT", url: function () { return ApiSetting.apiDomain("SHIP/Shipment/DeliveryAnOrder") } };
        let apiDeliveryCollectedDebtPath = { method: "PUT", url: function () { return ApiSetting.apiDomain("SHIP/Shipment/DeliveryCollectedDebt") } };


        let ToDoList = [];
        for (let i = 0; i < this.changedItems.length; i++) {
            const c = this.changedItems[i];
            if (c.IsDebt) {
                ToDoList.push(this.pageProvider.commonService.connect(apiDeliveryCollectedDebtPath.method, apiDeliveryCollectedDebtPath.url(), c).toPromise());
            }
            else {
                ToDoList.push(this.pageProvider.commonService.connect(apiDeliveryOrderPath.method, apiDeliveryOrderPath.url(), c).toPromise());
            }
        }

        Promise.all(ToDoList).then(values => {
            // for (let i = 0; i < values.length; i++) {
            //     const result = values[i];

            //     let idx = this.changedItems.findIndex(d=>d.Id == result.Id);
            //     if (idx > -1) {
            //         this.changedItems[idx]._state = 'Saved';
            //         this.changedItems.splice(idx, 1);
            //     }
            // }

            this.clearStateOrders();

        }).catch(err => {
            this.env.showMessage(err.message ? err.message : 'Lỗi cập nhật đơn hàng', 'danger');
        });

    }

    // refresh(event = null) {
    //     this.loadShipment(event);
    // }

    search(ev) {
        var val = ev.target.value;
        if (val == undefined) {
            val = '';
        }
        if (val.length > 2 || val == '') {
            this.query.CustomerName = val;
            this.query.Skip = 0;
            this.pageConfig.isEndOfData = false;
            this.loadData('search');
        }
    }

    loadedData(event) {
        this.sheets.forEach(s => {
            s.DeliveryDateText = lib.dateFormat(s.DeliveryDate, 'hh:MM dd/mm');
        });
        this.loadShipment(event);
    }

    showDetail(i) {
        this.navCtrl.navigateForward('/delivery/' + i.Id);
    }

    status: any = {};
    loadShipment(event) {
        if (this.selectedShipmentID == 0 && this.sheets.length) {
            this.selectedShipmentID = this.sheets[0].Id;
        }

        let shipment = this.sheets.find(d => d.Id == this.selectedShipmentID);
        if (shipment) {
            this.status = shipment.Status;
            this.status.IDShipment = shipment.Id;

            //shipment.ShipmentOrder.sort((a, b) => { if (a.Status.Id == 319) { return 1 } return -1 });

            let orders = shipment.ShipmentOrder.concat(shipment.ShipmentDebt).filter(d => (this.isShowAll || d.Status.Id == 314 || d.Status.Id == 320));


            for (let i = 0; i < orders.length; i++) {
                let o = orders[i];
                if (o) {
                    o.DebtText = lib.currencyFormat(o.Debt);

                    o.SaleOrder.OrderTimeText = o.SaleOrder.OrderDate ? lib.dateFormat(o.SaleOrder.OrderDate, 'hh:MM') : '';
                    o.SaleOrder.OrderDateText = o.SaleOrder.OrderDate ? lib.dateFormat(o.SaleOrder.OrderDate, 'dd/mm/yyyy') : '';
                    o.SaleOrder.OriginalTotalText = lib.currencyFormat(o.SaleOrder.OriginalTotalAfterTax);
                }
                else {
                    debugger;
                }
            }
            this.items = [...orders];
        }
        else {
            this.selectedShipmentID = 0;
            this.items = [];
        }

        super.loadedData(event);
    }

    segmentChanged(ev: any) {
        this.selectedShipmentID = ev.detail.value;
        this.loadShipment(null);
    }

    scanning = false;
    scanQRCode() {
        if (!Capacitor.isPluginAvailable('BarcodeScanner') || Capacitor.platform == 'web'){
            this.env.showMessage('Chức năng này chỉ dùng được trên điện thoại', 'warning');
            return;
        }
        BarcodeScanner.prepare().then(() => {
            BarcodeScanner.checkPermission({ force: true }).then(status => {
                if (status.granted) {
                    this.scanning = true;
                    document.querySelector('ion-app').style.backgroundColor = "transparent";
                    BarcodeScanner.startScan().then((result) => {
                        console.log(result);
                        let close: any = document.querySelector('#closeCamera');

                        if (!result.hasContent) {
                            close.click();
                        }

                        if (result.content.indexOf('O:') == 0) {
                            let IDSaleOrder = result.content.replace('O:', '');
                            this.navCtrl.navigateForward('/delivery/' + IDSaleOrder);
                            this.closeCamera();
                        } else {
                            this.env.showMessage('Bạn mới scan: ' + result.content + ', vui lòng scan QR code trên phiếu giao nhận thanh toán.');
                            setTimeout(() => this.scanQRCode(), 0);
                        }
                    })
                }
                else {
                    this.alertCtrl.create({
                        header: 'Quét QR code',
                        //subHeader: '---',
                        message: 'Bạn chưa cho phép sử dụng camera, Xin vui lòng cấp quyền cho ứng dụng.',
                        buttons: [
                            {
                                text: 'Không',
                                role: 'cancel',
                                handler: () => {}
                            },
                            {
                                text: 'Đồng ý',
                                cssClass: 'danger-btn',
                                handler: () => {
                                    BarcodeScanner.openAppSettings();
                                }
                            }
                        ]
                    }).then(alert => {
                        alert.present();
                    })
                }
            })
                .catch((e: any) => console.log('Error is', e));
        })

        

    }

    closeCamera() {
        if (!Capacitor.isPluginAvailable('BarcodeScanner') || Capacitor.platform == 'web'){
            return;
        }
        this.scanning = false;
        this.lighting = false;
        this.useFrontCamera = false;
        document.querySelector('ion-app').style.backgroundColor = "";
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

}