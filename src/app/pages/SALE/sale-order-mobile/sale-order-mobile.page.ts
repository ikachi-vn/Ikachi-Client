import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController, NavParams, PopoverController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, SALE_OrderProvider } from 'src/app/services/static/services.service';
import { SaleOrderMobileDetailPage } from '../sale-order-mobile-detail/sale-order-mobile-detail.page';
import { Location } from '@angular/common';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { SaleOrderSplitModalPage } from '../sale-order-split-modal/sale-order-split-modal.page';
import { SaleOrderMergeModalPage } from '../sale-order-merge-modal/sale-order-merge-modal.page';
import { PopoverPage } from '../../SYS/popover/popover.page';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Capacitor } from '@capacitor/core';

@Component({
    selector: 'app-sale-order-mobile',
    templateUrl: 'sale-order-mobile.page.html',
    styleUrls: ['sale-order-mobile.page.scss']
})
export class SaleOrderMobilePage extends PageBase {

    selectedStatus = {
        Color: "warning",
        Name: 'Đơn cần duyệt',
    };

    constructor(
        public pageProvider: SALE_OrderProvider,
        public branchProvider: BRA_BranchProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
        public popoverCtrl: PopoverController,
    ) {
        super();
        // this.pageConfig.isShowSearch = true;
    }

    preLoadData(event) {
        this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;
        this.query.IDStatus = '[101,102,103,104,110]';

        this.sort.Id = 'Id';
        this.sortToggle('Id', true);
        super.preLoadData(event);
    }

    loadData(event) {
        this.pageProvider.apiPath.getList.url = function () { return ApiSetting.apiDomain("SALE/Order/MobileList") };
        super.loadData(event);
    }

    loadedData(event) {
        this.items.forEach(i => {
            i.OrderTimeText = i.OrderDate ? lib.dateFormat(i.OrderDate, 'hh:MM') : '';
            i.OrderDateText = i.OrderDate ? lib.dateFormat(i.OrderDate, 'dd/mm/yy') : '';
            i.OriginalTotalText = lib.currencyFormat(i.OriginalTotalAfterTax);
        });
        super.loadedData(event);
    }

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

    resetQuery() {
        this.query.IDStatus = '[101,102,103,104,110]';
        this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;
        this.query._saleman = this.query.IDOwner == 'all' ? null : { Id: this.env.user.StaffID, FullName: this.env.user.FullName }

        this.query.OrderDateFrom = '';
        this.query.OrderDateTo = '';

        this.refresh()
    }

    showDetail(i) {
        if (i.Id == 0 || !i.Status || i.Status.Id == 101 || i.Status.Id == 102 || (this.pageConfig.canChangeCustomerOfReviewOrder && i.IDStatus == 103)) {
            this.nav('sale-order-mobile/' + i.Id, 'forward');
        }
        else {
            this.nav('sale-order-mobile-viewer/' + i.Id, 'forward');
        }
    }

    add() {
        let newSaleOrderMobile = {
            Id: 0,
        };
        this.showDetail(newSaleOrderMobile);
    }

    splitOrder(i) {
        this.selectedItems = [];
        this.selectedItems.push(i);
        this.splitSaleOrder();
    }

    async splitSaleOrder() {
        let IDStatus = this.selectedItems[0].IDStatus;
        if (!(IDStatus == 101 || IDStatus == 102 || IDStatus == 103)) {
            this.env.showMessage('Đơn bạn chọn không thể tách. Vui lòng chỉ chọn đơn mới, đang chờ duyệt hoặc bị trả lại.', 'warning');
            return;
        }
        const modal = await this.modalController.create({
            component: SaleOrderSplitModalPage,
            swipeToClose: true,
            cssClass: 'modal90',
            componentProps: {
                'selectedOrder': this.selectedItems[0]
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();

        this.selectedItems = [];
        this.refresh();
    }

    async mergeSaleOrders() {
        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.IDStatus == 101 || i.IDStatus == 102 || i.IDStatus == 103));
        if (itemsCanNotProcess.length) {
            this.env.showMessage('Các đơn bạn chọn không gộp lại. Vui lòng chỉ chọn đơn mới, đang chờ duyệt hoặc bị trả lại.', 'warning');
            return;
        }

        const modal = await this.modalController.create({
            component: SaleOrderMergeModalPage,
            swipeToClose: true,
            cssClass: 'modal-merge-orders',
            componentProps: {
                'selectedOrders': this.selectedItems
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();

        this.selectedItems = [];
        this.refresh();
    }

    submitOrdersForApproval() {
        this.alertCtrl.create({
            header: 'Gửi duyệt',
            //subHeader: '---',
            message: 'Sau khi gửi duyệt, bạn không thể chỉnh sửa đơn hàng được nữa. Bạn chắc muốn gửi duyệt tất cả đơn hàng?',
            buttons: [
                {
                    text: 'Không',
                    role: 'cancel',
                    handler: () => {
                        //console.log('Không xóa');
                    }
                },
                {
                    text: 'Gửi duyệt',
                    cssClass: 'danger-btn',
                    handler: () => {

                        let publishEventCode = this.pageConfig.pageName;
                        let apiPath = {
                            method: "POST",
                            url: function () { return ApiSetting.apiDomain("SALE/Order/SubmitSalesmanOrdersForApproval/") }
                        };

                        if (this.submitAttempt == false) {
                            this.submitAttempt = true;

                            this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), null).toPromise()
                                .then((savedItem: any) => {
                                    if (publishEventCode) {
                                        this.env.publishEvent({ Code: publishEventCode });
                                    }
                                    this.env.showMessage('Đã lưu xong!', 'success');
                                    this.submitAttempt = false;

                                }).catch(err => {
                                    this.submitAttempt = false;
                                    //console.log(err);
                                });
                        }

                    }
                }
            ]
        }).then(alert => {
            alert.present();
        })
    }


    deleteItems() {
        let itemsCanNotDelete = this.selectedItems.filter(i => !(i.IDStatus == 101 || i.IDStatus == 102));
        if (itemsCanNotDelete.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể xóa. Vui lòng chỉ xóa đơn mới hoặc đơn không được duyệt.', 'warning')
        }
        else if (itemsCanNotDelete.length) {
            this.alertCtrl.create({
                header: 'Có ' + itemsCanNotDelete.length + ' đơn không thể xóa',
                //subHeader: '---',
                message: 'Bạn có muốn bỏ qua và tiếp tục xóa ' + (this.selectedItems.length - itemsCanNotDelete.length) + ' đơn?',
                buttons: [
                    {
                        text: 'Không',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Không xóa');
                        }
                    },
                    {
                        text: 'Đồng tiếp tục',
                        cssClass: 'danger-btn',
                        handler: () => {
                            itemsCanNotDelete.forEach(i => {
                                i.checked = false;
                            });
                            this.selectedItems = this.selectedItems.filter(i => (i.IDStatus == 101 || i.IDStatus == 102));
                            super.deleteItems();
                        }
                    }
                ]
            }).then(alert => {
                alert.present();
            })
        }
        else {
            super.deleteItems();
        }

    }

    currentPopover = null;
    async presentPopover(ev: any) {

        let popover = await this.popoverCtrl.create({
            component: PopoverPage,
            componentProps: {
                popConfig: {
                    isShowDateRange: true,
                    dateRangeLabel: 'Ngày lên đơn',

                    isShowSaleOrderStatusSelect: true,
                    isShowStaffSelect: this.pageConfig.canViewAllData,
                },
                popData: {
                    selectedBTNDate: this.query.selectedBTNDate,
                    fromDate: this.query.OrderDateFrom,
                    toDate: this.query._toDate,
                    IDSaleOrderStatus: this.query.IDStatus,
                    staff: this.query._saleman,
                }
            },
            event: ev,
            cssClass: 'sale-order-mobile-filter',
            translucent: true
        });

        popover.onDidDismiss().then((result: any) => {
            //console.log(result);
            if (result.data) {
                this.query.OrderDateFrom = result.data.fromDate;
                this.query._toDate = result.data.toDate;
                this.query.OrderDateTo = result.data.toDate + ' 23:59:59';
                this.query.IDStatus = result.data.IDSaleOrderStatus;
                this.query.selectedBTNDate = result.data.selectedBTNDate;

                this.selectedStatus = result.data.selectedStatus;

                this.query._saleman = result.data.staff;
                if (this.query._saleman) {
                    this.query.IDOwner = this.query._saleman.Id;
                }
                else {
                    this.query.IDOwner = 'all';
                }


                this.refresh();
            }
            console.log(this.selectedStatus)
        });
        this.currentPopover = popover;
        return await popover.present();
    }

    dismissPopover() {
        if (this.currentPopover) {
            this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
        }
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
