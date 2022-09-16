import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { PURCHASE_OrderProvider, SYS_StatusProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';
import { lib } from 'src/app/services/static/global-functions';
import { ApiSetting } from 'src/app/services/static/api-setting';

@Component({
    selector: 'app-purchase-order',
    templateUrl: 'purchase-order.page.html',
    styleUrls: ['purchase-order.page.scss']
})
export class PurchaseOrderPage extends PageBase {
    statusList = [];
    paymentStatusList = [];

    constructor(
        public pageProvider: PURCHASE_OrderProvider,
        public statusProvider: SYS_StatusProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
    ) {
        super();
    }

    preLoadData() {
        if (!this.sort.Id) {
            this.sort.Id = 'Id';
            this.sortToggle('Id', true);
        }
        this.statusProvider.read({ Code_eq: 'PURCHASING', AllChildren: true }).then(resp => {
            let poStatus = resp['data'].find(d => d.Code == 'POStatus');
            this.statusList = resp['data'].filter(d => d.IDParent == poStatus.Id);

            let paymentStatus = resp['data'].find(d => d.Code == 'POPaymentStatus');
            this.paymentStatusList = resp['data'].filter(d => d.IDParent == paymentStatus.Id);
            super.preLoadData();
        });

    }

    loadedData() {
        this.items.forEach(i => {
            i.TotalAfterTaxText = lib.currencyFormat(i.TotalAfterTax);
            i.OrderDateText = lib.dateFormat(i.OrderDate, 'dd/mm/yyyy');
            i.OrderTimeText = lib.dateFormat(i.OrderDate, 'hh:MM');
            i.StatusText = lib.getAttrib(i.Status, this.statusList, 'Name', '--', 'Code');
            i.StatusColor = lib.getAttrib(i.Status, this.statusList, 'Color', 'dark', 'Code');
        });
        super.loadedData();
    }

    mergeSaleOrders() {

    }
    splitSaleOrder() {

    }


    submitOrdersForApproval() {
        if (!this.pageConfig.canSubmitOrdersForApproval) return;
        if (this.submitAttempt) return;

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status == 'PODraft' || i.Status == 'PORequestUnapproved'));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể gửi duyệt. Vui lòng chỉ chọn đơn mới hoặc đơn bị trả lại.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status == 'PODraft' || i.Status == 'PORequestUnapproved'));

            this.env.showPrompt('Bạn chắc muốn gửi duyệt ' + this.selectedItems.length + ' đơn hàng đang chọn?', null, 'Gửi duyệt ' + this.selectedItems.length + ' mua hàng')
                .then(_ => {
                    this.submitAttempt = true;
                    let postDTO = { Ids: [] };
                    postDTO.Ids = this.selectedItems.map(e => e.Id);

                    this.pageProvider.commonService.connect('POST', ApiSetting.apiDomain("PURCHASE/Order/SubmitOrdersForApproval/"), postDTO).toPromise()
                        .then((savedItem: any) => {
                            this.env.publishEvent({ Code: this.pageConfig.pageName });
                            this.submitAttempt = false;

                            if (savedItem > 0) {
                                this.env.showMessage(`Đã gửi duyệt ${savedItem} đơn!`, 'success');
                            }
                            else{
                                this.env.showMessage('Xin vui lòng kiểm tra lại, các đơn gửi duyệt phải có ít nhất 1 sản phẩm.', 'warning');
                            }

                        }).catch(err => {
                            this.submitAttempt = false;
                            console.log(err);
                        });
                });
        }
    }
    approveOrders() {
        if (!this.pageConfig.canApprove) return;
        if (this.submitAttempt) return;

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status == 'PORequestSubmitted'));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể duyệt. Vui lòng chỉ chọn đơn đang chờ duyệt.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status == 'PORequestSubmitted'));
            this.env.showPrompt('Bạn chắc muốn DUYỆT ' + this.selectedItems.length + ' đơn hàng đang chọn?', null, 'Duyệt ' + this.selectedItems.length + ' đơn hàng')
                .then(_ => {
                    this.submitAttempt = true;
                    let postDTO = { Ids: [] };
                    postDTO.Ids = this.selectedItems.map(e => e.Id);

                    this.pageProvider.commonService.connect('POST', ApiSetting.apiDomain("PURCHASE/Order/ApproveOrders/"), postDTO).toPromise()
                        .then((savedItem: any) => {

                            this.env.publishEvent({ Code: this.pageConfig.pageName });
                            this.submitAttempt = false;

                            if (savedItem > 0) {
                                this.env.showMessage(`Đã duyệt ${savedItem} đơn!`, 'success');
                            }
                            else{
                                this.env.showMessage('Xin vui lòng kiểm tra lại, các đơn duyệt phải có ít nhất 1 sản phẩm.', 'warning');
                            }

                        }).catch(err => {
                            this.submitAttempt = false;
                            console.log(err);
                        });
                });
        }
    }
    disapproveOrders() {
        if (!this.pageConfig.canApprove) return;
        if (this.submitAttempt) return;

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status == 'PORequestSubmitted' || i.Status == 'PORequestApproved'));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể trả lại. Vui lòng chỉ chọn đơn đang chờ duyệt và đơn đã được duyệt.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status == 'PORequestSubmitted' || i.Status == 'PORequestApproved'));
            this.env.showPrompt('Bạn chắc muốn TRẢ LẠI ' + this.selectedItems.length + ' đơn hàng đang chọn?', null, 'Duyệt ' + this.selectedItems.length + ' đơn hàng')
                .then(_ => {
                    this.submitAttempt = true;
                    let postDTO = { Ids: [] };
                    postDTO.Ids = this.selectedItems.map(e => e.Id);

                    this.pageProvider.commonService.connect('POST', ApiSetting.apiDomain("PURCHASE/Order/DisapproveOrders/"), postDTO).toPromise()
                        .then((savedItem: any) => {
                            this.env.publishEvent({ Code: this.pageConfig.pageName });
                            this.env.showMessage('Đã lưu xong!', 'success');
                            this.submitAttempt = false;

                        }).catch(err => {
                            this.submitAttempt = false;
                            console.log(err);
                        });
                });
        }
    }
    cancelOrders() {
        if (!this.pageConfig.canCancel) return;
        if (this.submitAttempt) return;

        let itemsCanNotProcess = this.selectedItems.filter(i => !(i.Status == 'PODraft' || i.Status == 'PORequestUnapproved'));
        if (itemsCanNotProcess.length == this.selectedItems.length) {
            this.env.showMessage('Các đơn bạn chọn không thể hủy. Vui lòng chỉ chọn đơn đang chờ duyệt hoặc đơn nháp.', 'warning')
        }
        else {
            itemsCanNotProcess.forEach(i => {
                i.checked = false;
            });
            this.selectedItems = this.selectedItems.filter(i => (i.Status == 'PODraft' || i.Status == 'PORequestUnapproved'));
            this.env.showPrompt('Bạn chắc muốn HỦY ' + this.selectedItems.length + ' đơn hàng đang chọn?', null, 'Duyệt ' + this.selectedItems.length + ' đơn hàng')
                .then(_ => {
                    this.submitAttempt = true;
                    let postDTO = { Ids: [] };
                    postDTO.Ids = this.selectedItems.map(e => e.Id);

                    this.pageProvider.commonService.connect('POST', ApiSetting.apiDomain("PURCHASE/Order/CancelOrders/"), postDTO).toPromise()
                        .then((savedItem: any) => {
                            this.env.publishEvent({ Code: this.pageConfig.pageName });
                            this.env.showMessage('Đã lưu xong!', 'success');
                            this.submitAttempt = false;

                        }).catch(err => {
                            this.submitAttempt = false;
                            console.log(err);
                        });
                });
        }
    }
}