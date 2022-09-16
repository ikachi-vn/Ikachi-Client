import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, SALE_OrderProvider, SHIP_ShipmentProvider, SHIP_VehicleProvider, SYS_StatusProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { SALE_MasanImportProvider } from 'src/app/services/custom.service';
import { SaleOrderSplitModalPage } from '../sale-order-split-modal/sale-order-split-modal.page';
import { SaleOrderMergeModalPage } from '../sale-order-merge-modal/sale-order-merge-modal.page';



@Component({
    selector: 'app-sale-order',
    templateUrl: 'sale-order.page.html',
    styleUrls: ['sale-order.page.scss']
})
export class SaleOrderPage extends PageBase {
    branchList = [];
    statusList = [];
    vehicleList = [];
    shipmentList = [];

    segmentView = 's1';
    shipmentQuery: any = { IDStatus: 301, DeliveryDate: '', SortBy: 'IDVehicle' };

    masanImportParam: any = {
        featureDate: lib.dateFormat(new Date, 'yyyy-mm-dd'),
        wareHouse: 'KF1652T01',
    };

    constructor(
        public pageProvider: SALE_OrderProvider,
        public branchProvider: BRA_BranchProvider,
        public statusProvider: SYS_StatusProvider,
        public shipmentProvider: SHIP_ShipmentProvider,
        public vehicleProvider: SHIP_VehicleProvider,
        public masanImportProvider: SALE_MasanImportProvider,

        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
    ) {
        super();
        // this.pageConfig.isShowFeature = true;
        this.pageConfig.isShowSearch = false;
        let today = new Date;
        today.setDate(today.getDate() + 1);
        this.shipmentQuery.DeliveryDate = lib.dateFormat(today, 'yyyy-mm-dd');
    }

    events(e){
        if (e.Code == 'shipment') {
            this.loadShipmentList();
            this.refresh();
        }
    }

    preLoadData(event) {
        this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;
        //this.query.OrderDate = this.pageConfig.canViewAllData? 'all' : new Date();
        //this.query.IDStatus = '[1,2,3]';
        if (!this.sort.Id) {
            this.sort.Id = 'Id';
            this.sortToggle('Id', true);
        }
        if (!this.query.IDStatus) {
            this.query.IDStatus = '[101,102,103,104,110]';
        }
        

        this.statusProvider.read({ IDParent: 1 }).then(response => {
            this.statusList = response['data'];
            super.preLoadData(event);

        });

        this.loadVehicleList();
        this.loadShipmentList();

    }

    loadData(event) {
        this.pageProvider.apiPath.getList.url = function () { return ApiSetting.apiDomain("SALE/Order/List") };
        super.loadData(event);
    }

    loadedData(event) {
        this.items.forEach(i => {
            i.OrderTimeText = i.OrderDate ? lib.dateFormat(i.OrderDate, 'hh:MM') : '';
            i.OrderDateText = i.OrderDate ? lib.dateFormat(i.OrderDate, 'dd/mm/yy') : '';
            i.Query = i.OrderDate ? lib.dateFormat(i.OrderDate, 'yyyy-mm-dd') : '';
            i.OriginalTotalText = lib.currencyFormat(i.OriginalTotalAfterTax);
        });
        super.loadedData(event);
    }

    loadVehicleList(){
        this.vehicleProvider.read({ IgnoredBranch: true }).then(response => {
            this.vehicleList = response['data'];
            this.vehicleList.forEach(v => {
                if (v.ShipperName) {
                    v.Name = v.Name + ' - ' + v.ShipperName;
                }

            });
        });
    }

    loadShipmentList() {
        this.shipmentProvider.apiPath.getList.url = function () { return ApiSetting.apiDomain("SHIP/Shipment/List") };
        this.shipmentProvider.read(this.shipmentQuery).then((resp: any) => {
            this.shipmentList = resp.data;
            this.shipmentList.forEach(i => {
                i.DeliveryDateText = lib.dateFormat(i.DeliveryDate, 'dd/mm/yy hh:MM');
            });
        });
    }

    showDetail(i) {
        this.navCtrl.navigateForward('/sale-order/' + i.Id);
    }

    add() {
        let newSaleOrder = {
            Id: 0,
        };
        this.showDetail(newSaleOrder);
    }

    masanImport() {
        if (this.submitAttempt) {
            this.env.showMessage("Đang import đơn từ Masan, xin vui lòng chờ hoàn tất.", 'primary')
            return;
        }
        this.submitAttempt = true;
        this.env.publishEvent({ Code: 'app:ShowAppMessage', IsShow: true, Id: 'MasanImport', Icon: 'flash', IsBlink: true, Color: 'danger', Message: 'đang import đơn Masan' });
        this.masanImportProvider.MasanImport({
            JobId: 1,
            Kho: this.masanImportParam.wareHouse,
            StartDate: this.masanImportParam.featureDate,
            EndDate: this.masanImportParam.featureDate
        }).then((fileurl) => {
            this.submitAttempt = false;
            this.env.publishEvent({ Code: 'app:ShowAppMessage', IsShow: false, Id: 'MasanImport' });
            this.pageConfig.isShowSearch = true;
            this.query.IDStatus = '';
            this.refresh()
            this.download(fileurl);
        })
            .catch(err => {
                debugger;
                this.submitAttempt = false;
                this.env.publishEvent({ Code: 'app:ShowAppMessage', IsShow: false, Id: 'MasanImport' });
                //this.refresh();
                this.env.showMessage(err.error && err.error.Message ? err.error.Message : "Import bị lỗi, xin vui lòng kiểm tra lại.\n", 'danger');
            })
    }

    @ViewChild('importfile2') importfile: any;
    onClickImport() {
        this.importfile.nativeElement.value = "";
        this.importfile.nativeElement.click();
    }

    async import2(event) {
        if (this.submitAttempt) {
            this.env.showMessage("Đang import file, xin vui lòng chờ hoàn tất.", 'primary')
            return;
        }
        this.submitAttempt = true;
        this.env.publishEvent({ Code: 'app:ShowAppMessage', IsShow: true, Id: 'FileImport', Icon: 'flash', IsBlink: true, Color: 'danger', Message: 'đang import' });

        let wareHouse = this.masanImportParam.wareHouse;
        this.pageProvider.apiPath.postImport.method = "UPLOAD";
        this.pageProvider.apiPath.postImport.url = function () { return ApiSetting.apiDomain("SALE/Order/ImportFile?Kho=" + wareHouse) };

        this.pageProvider.import(event.target.files[0])
            .then((response) => {
                this.submitAttempt = false;
                this.env.publishEvent({ Code: 'app:ShowAppMessage', IsShow: false, Id: 'FileImport' });
                this.refresh();
                this.download(response);

            })
            .catch(err => {
                this.submitAttempt = false;
                this.env.publishEvent({ Code: 'app:ShowAppMessage', IsShow: false, Id: 'FileImport' });
                this.refresh();
                this.env.showMessage("Import bị lỗi, xin vui lòng kiểm tra lại.\n", 'danger');
            })


    }

    async splitSaleOrder() {
        let IDStatus = this.selectedItems[0].Status.IDStatus;
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
        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status.IDStatus == 101 || i.Status.IDStatus == 102 || i.Status.IDStatus == 103));
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
        if (!this.pageConfig.canApprove) {
            return;
        }

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status.IDStatus == 101 || i.Status.IDStatus == 102));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể gửi duyệt. Vui lòng chỉ chọn đơn mới hoặc đơn bị trả lại.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status.IDStatus == 101 || i.Status.IDStatus == 102));

            this.alertCtrl.create({
                header: 'Gửi duyệt ' + this.selectedItems.length + ' đơn hàng',
                //subHeader: '---',
                message: 'Bạn chắc muốn gửi duyệt ' + this.selectedItems.length + ' đơn hàng đang chọn?',
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
                                url: function () { return ApiSetting.apiDomain("SALE/Order/SubmitOrdersForApproval/") }
                            };

                            if (this.submitAttempt == false) {
                                this.submitAttempt = true;

                                let postDTO = { Ids: [] };
                                postDTO.Ids = this.selectedItems.map(e => e.Id);

                                this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), postDTO).toPromise()
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
    }

    approveOrders() {
        if (!this.pageConfig.canApprove) {
            return;
        }

        let itemsCanNotProcess = this.selectedItems.filter(i => !( i.Status.IDStatus == 103 || i.Status.IDStatus == 110));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể duyệt. Vui lòng chỉ chọn đơn đang chờ duyệt.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => ( i.Status.IDStatus == 103 || i.Status.IDStatus == 110));

            this.alertCtrl.create({
                header: 'Duyệt ' + this.selectedItems.length + ' đơn hàng',
                //subHeader: '---',
                message: 'Bạn chắc muốn xác nhận ' + this.selectedItems.length + ' đơn hàng đang chọn?',
                buttons: [
                    {
                        text: 'Không',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Không xóa');
                        }
                    },
                    {
                        text: 'Duyệt',
                        cssClass: 'danger-btn',
                        handler: () => {

                            let publishEventCode = this.pageConfig.pageName;
                            let apiPath = {
                                method: "POST",
                                url: function () { return ApiSetting.apiDomain("SALE/Order/ApproveOrders/") }
                            };

                            if (this.submitAttempt == false) {
                                this.submitAttempt = true;

                                let postDTO = { Ids: [] };
                                postDTO.Ids = this.selectedItems.map(e => e.Id);

                                this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), postDTO).toPromise()
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
    }

    disapproveOrders() {
        if (!this.pageConfig.canApprove) {
            return;
        }

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status.IDStatus == 103 || i.Status.IDStatus == 104));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể trả lại. Vui lòng chỉ chọn đơn đang chờ duyệt và đơn đã được duyệt.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status.IDStatus == 103 || i.Status.IDStatus == 104));

            this.alertCtrl.create({
                header: 'Trả lại ' + this.selectedItems.length + ' đơn hàng',
                //subHeader: '---',
                message: 'Bạn chắc muốn trả lại ' + this.selectedItems.length + ' đơn hàng đang chọn?',
                buttons: [
                    {
                        text: 'Không',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Không xóa');
                        }
                    },
                    {
                        text: 'Trả lại',
                        cssClass: 'danger-btn',
                        handler: () => {

                            let publishEventCode = this.pageConfig.pageName;
                            let apiPath = {
                                method: "POST",
                                url: function () { return ApiSetting.apiDomain("SALE/Order/DisapproveOrders/") }
                            };

                            if (this.submitAttempt == false) {
                                this.submitAttempt = true;

                                let postDTO = { Ids: [] };
                                postDTO.Ids = this.selectedItems.map(e => e.Id);

                                this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), postDTO).toPromise()
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
    }

    cancelOrders() {

        if (!this.pageConfig.canCancel) {
            return;
        }

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status.IDStatus == 101 || i.Status.IDStatus == 102 || i.Status.IDStatus == 103 || i.Status.IDStatus == 110));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể hủy. Vui lòng chỉ chọn đơn chưa duyệt hoặc đơn đang chờ giao lại.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status.IDStatus == 101 || i.Status.IDStatus == 102 || i.Status.IDStatus == 103 || i.Status.IDStatus == 110));

            this.alertCtrl.create({
                header: 'HỦY ' + this.selectedItems.length + ' đơn hàng',
                //subHeader: '---',
                message: 'Bạn chắc muốn HỦY ' + this.selectedItems.length + ' đơn hàng đang chọn?',
                buttons: [
                    {
                        text: 'Không',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Không xóa');
                        }
                    },
                    {
                        text: 'Hủy',
                        cssClass: 'danger-btn',
                        handler: () => {

                            let publishEventCode = this.pageConfig.pageName;
                            let apiPath = {
                                method: "POST",
                                url: function () { return ApiSetting.apiDomain("SALE/Order/CancelOrders/") }
                            };

                            if (this.submitAttempt == false) {
                                this.submitAttempt = true;

                                let postDTO = { Ids: [] };
                                postDTO.Ids = this.selectedItems.map(e => e.Id);

                                this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), postDTO).toPromise()
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

    }

    deleteItems() {
        let itemsCanNotDelete = this.selectedItems.filter(i => !(i.Status.IDStatus == 101 || i.Status.IDStatus == 102));
        if (itemsCanNotDelete.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể xóa. Vui lòng chỉ xóa đơn mới hoặc đơn không được duyệt.', 'warning')
        }
        else if (itemsCanNotDelete.length) {
            this.alertCtrl.create({
                header: 'Có ' + itemsCanNotDelete.length + ' đơn không thể xóa',
                //subHeader: '---',
                message: 'Bạn có muốn bỏ qua ' + this.selectedItems.length + ' đơn này và tiếp tục xóa?',
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
                            this.selectedItems = this.selectedItems.filter(i => (i.Status.IDStatus == 101 || i.Status.IDStatus == 102));
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

    addSOtoShipment(s) {
        let OrderIds = this.selectedItems.filter(i => i.Status.IDStatus == 104 || i.Status.IDStatus == 110); //Đã duyệt || chờ giao lại
        let DebtOrderIds = this.selectedItems.filter(i => i.Status.IDStatus == 113); // Đang nợ
        if (!(OrderIds.length || DebtOrderIds.length)) {
            this.env.showMessage('Các đơn bạn chọn không thể phân tài. Vui lòng chỉ chọn đơn đã duyệt và đơn nợ.', 'warning');
            return;
        }

        let shipment = {
            Id: s.Id,
            OrderIds: OrderIds.map(e => e.Id),
            DebtOrderIds: DebtOrderIds.map(e => e.Id)
        };

        let publishEventCode = this.pageConfig.pageName;
        let apiPath = {
            method: "PUT",
            url: function () { return ApiSetting.apiDomain("SHIP/Shipment/QuickAddSO/") }
        };

        if (this.submitAttempt == false) {
            this.submitAttempt = true;

            this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), shipment).toPromise()
                .then((savedItem: any) => {
                    if (publishEventCode) {
                        this.env.publishEvent({ Code: publishEventCode });
                    }
                    this.env.showMessage('Đã lưu xong!', 'success');
                    this.loadShipmentList();
                    this.submitAttempt = false;

                }).catch(err => {
                    this.submitAttempt = false;
                    this.loadShipmentList();
                    this.env.showMessage('Không lưu được, vui lòng thử lại sau.', 'danger');
                    //console.log(err);
                });
        }

    }
}
