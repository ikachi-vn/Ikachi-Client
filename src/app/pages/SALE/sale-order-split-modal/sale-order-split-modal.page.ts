import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { NavController, ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { CRM_ContactProvider, SALE_OrderDetailProvider, SALE_OrderProvider, WMS_ItemProvider } from 'src/app/services/static/services.service';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { concat, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { lib } from 'src/app/services/static/global-functions';
import { ApiSetting } from 'src/app/services/static/api-setting';



@Component({
    selector: 'app-sale-order-split-modal',
    templateUrl: './sale-order-split-modal.page.html',
    styleUrls: ['./sale-order-split-modal.page.scss'],
})
export class SaleOrderSplitModalPage extends PageBase {
    @Input() selectedOrder;
    initContactsIds = [];

    constructor(
        public pageProvider: SALE_OrderProvider,
        public orderDetailProvider: SALE_OrderDetailProvider,
        public contactProvider: CRM_ContactProvider,
        public itemProvider: WMS_ItemProvider,

        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,

        public modalController: ModalController,
        public alertCtrl: AlertController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,
        public loadingController: LoadingController,
        private config: NgSelectConfig
    ) {
        super();
        this.pageConfig.isDetailPage = false;
        this.pageConfig.pageName = 'SplitSaleOrder';
        this.config.notFoundText = 'Không tìm thấy dữ liệu phù hợp...';
        this.config.clearAllText = 'Xóa hết';
        
        
    }



    loadData(event) {
        this.item = { Id: this.selectedOrder.Id, SplitedOrders: [] };
        this.item.SplitedOrders.push({
            isFirst: true,
            IDContact: this.selectedOrder.IDContact,
            ContactName: this.selectedOrder.CustomerName,

        });
        this.item.SplitedOrders.push({
            isFirst: true,
            IDContact: null,
            ContactName: null,
        });

        this.contactListSelected.push({
            Id: this.selectedOrder.IDContact,
            Name: this.selectedOrder.CustomerName,
            WorkPhone: this.selectedOrder.IDContact,
            AddressLine1: this.selectedOrder.AddressLine1
        });

        this.orderDetailProvider.read({ IDOrder: this.selectedOrder.Id }).then((result: any) => {
            this.items = result.data;
            this.item.SplitedOrders[0].OrderLines = JSON.parse(JSON.stringify(this.items));
            this.item.SplitedOrders[1].OrderLines = JSON.parse(JSON.stringify(this.items));
            this.calcOrders();

            this.loadedData(event);

            let ids = this.items.map(i => i.IDItem);
            if (ids.length) {
                this.itemProvider.search({ IgnoredBranch: true, Id: JSON.stringify(ids) }).toPromise().then((result: any) => {
                    result.forEach(i => {
                        if (this.itemListSelected.findIndex(d => d.Id == i.Id) == -1) {
                            this.itemListSelected.push(i);
                        }
                        let lines = this.items.filter(d => d.IDItem == i.Id);
                        lines.forEach(line => {
                            line._itemData = i;
                        });
                    });
                }).finally(() => {
                    this.itemSearch();
                });
            }
            else {
                this.itemSearch();
            }

        });


    }

    loadedData(event) {
        this.contactSearch();
        super.loadedData(event);
    }

    contactList$
    contactListLoading = false;
    contactListInput$ = new Subject<string>();
    contactListSelected = [];
    contactSelected = null;
    contactSearch() {
        this.contactListLoading = false;
        this.contactList$ = concat(
            of(this.contactListSelected),
            this.contactListInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.contactListLoading = true),
                switchMap(term => this.contactProvider.search({ Take: 20, Skip: 0, Term: term ? term : this.item.IDContact }).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.contactListLoading = false)
                ))

            )
        );
    }


    itemList$
    itemListLoading = false;
    itemListInput$ = new Subject<string>();
    itemListSelected = [];

    itemSearch() {
        this.itemListLoading = false;
        this.itemList$ = concat(
            of(this.itemListSelected),
            this.itemListInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.itemListLoading = true),
                switchMap(term => this.itemProvider.search({ Take: 20, Skip: 0, Term: term }).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.itemListLoading = false)
                ))

            )
        );
    }


    splitOrder() {
        let publishEventCode = this.pageConfig.pageName;
        let apiPath = {
            method: "POST",
            url: function () { return ApiSetting.apiDomain("SALE/Order/MergeOrders/") }
        };

        return new Promise((resolve, reject) => {
            if (!this.item.Ids.length || !this.item.IDContact) {
                this.env.showMessage('Vui lòng kiểm tra đơn hàng cần gộp và chọn khách hàng.', 'warning');
            }
            else if (this.submitAttempt == false) {
                this.submitAttempt = true;


                if (!this.item.IDBranch) {
                    this.item.IDBranch = this.env.selectedBranch;
                }
                this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), this.item).toPromise()
                    .then((savedItem: any) => {
                        if (publishEventCode) {
                            this.env.publishEvent({ Code: publishEventCode });
                        }
                        this.env.showMessage('Đã lưu xong!', 'success');
                        resolve(savedItem.Id);
                        this.submitAttempt = false;
                        this.closeModal();

                    }).catch(err => {
                        this.env.showMessage('Không lưu được, xin vui lòng thử lại.', 'danger');
                        this.cdr.detectChanges();
                        this.submitAttempt = false;
                        reject(err);
                    });
            }
        });

    }

    changedIDContact(i, o) {
        
        if (i) {
            this.contactSelected = i;
            if (this.contactListSelected.findIndex(d => d.Id == i.Id) == -1) {
                this.contactListSelected.push(i);
                this.contactSearch();
            }
            o.ContactName = i.Name;
        }
        this.checkValid();
    }

    segmentView = 's1';
    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

    addSplitedOrder() {
        this.item.SplitedOrders.push({
            IDContact: null,
            OrderLines: JSON.parse(JSON.stringify(this.items))
        });
        this.calcOrders();
        this.checkValid();
    }

    removeSplitedOrder(o) {
        const index = this.item.SplitedOrders.indexOf(o);
        if (index > -1) {
            this.item.SplitedOrders.splice(index, 1);
        }
        this.calcOrders();
        this.checkValid();
    }

    calcOrders() {
        this.items.forEach(i => {
            i.splitDetail = [];
            for (let j = 0; j < this.item.SplitedOrders.length; j++) {
                const o = this.item.SplitedOrders[j];
                i.splitDetail.push(o.OrderLines.find(d => d.Id == i.Id));
            }
        });

        this.items.forEach(i => {
            let order = i.splitDetail[0];
            let props = ['Quantity', 'OriginalDiscount1', 'OriginalDiscount2', 'OriginalDiscountFromSalesman'];
            props.forEach(prop => {
                this.checkOriginal(i, order, prop);
            });
            
        });
    }

    changedCalc(originalRow, editingRow, prop) {
        let maxValue = originalRow[prop];
        let cValue = editingRow[prop];
        if (cValue > maxValue) {
            editingRow[prop] = maxValue;
            cValue = maxValue;
        }
        if(editingRow['Quantity'] == originalRow['Quantity']){
            let props = ['Quantity', 'OriginalDiscount1', 'OriginalDiscount2', 'OriginalDiscountFromSalesman'];
            props.forEach(prop => {
                editingRow[prop] = originalRow[prop];
            });
        }

        this.calcOrderLine(editingRow);

        this.items.forEach(i => {
            let order = i.splitDetail[0];
            let props = ['Quantity', 'OriginalDiscount1', 'OriginalDiscount2', 'OriginalDiscountFromSalesman'];
            props.forEach(prop => {
                this.checkOriginal(i, order, prop);
            });
            
        });
        this.checkValid();
    }

    checkOriginal(originalRow, editingRow, prop){
        let maxValue = originalRow[prop];
        let cValue = editingRow[prop];
        if (cValue > maxValue) {
            editingRow[prop] = maxValue;
            cValue = maxValue;
        }

        

        this.calcOrderLine(editingRow);

        let remain = maxValue - cValue;

        let ortherOrder = originalRow.splitDetail.filter(d => d != editingRow);

        for (let i = 0; i < ortherOrder.length; i++) {
            const orderLine = ortherOrder[i];

            if (i == ortherOrder.length - 1) {
                orderLine[prop] = remain;
            }

            if (remain - orderLine[prop] <= 0) {
                orderLine[prop] = remain;
            }

            remain = remain - orderLine[prop];
            this.calcOrderLine(orderLine);
            
        }

        
    }

    isCanSplit = false;
    checkValid(){
        this.isCanSplit = true;

        for (let i = 0; i < this.item.SplitedOrders.length; i++) {
            const o = this.item.SplitedOrders[i];
            if (!o.IDContact) {
                this.isCanSplit = false;
                break;
            }

            let totalQty = 0;
            for (let j = 0; j < o.OrderLines.length; j++) {
                const l = o.OrderLines[j];
                totalQty+= l.Quantity;
            }
            if (totalQty==0) {
                this.isCanSplit = false;
                break;
            }
        }
    }

    calcOrderLine(line) {
        line.UoMPrice = line.IsPromotionItem ? 0 : parseInt(line.UoMPrice) || 0;
        line.BuyPrice = parseInt(line.BuyPrice) || 0;

        line.Quantity = parseInt(line.Quantity) || 0;
        line.OriginalDiscount1 = line.IsPromotionItem ? 0 : parseInt(line.OriginalDiscount1) || 0;
        line.OriginalDiscount2 = line.IsPromotionItem ? 0 : parseInt(line.OriginalDiscount2) || 0;
        line.OriginalDiscountFromSalesman = line.IsPromotionItem ? 0 : parseInt(line.OriginalDiscountFromSalesman) || 0;


        // if (!line.IsPromotionItem && line.OriginalDiscount1 > 0 && line.OriginalDiscount1 < 1000) {
        //     line.OriginalDiscount1 = line.OriginalDiscount1 * 1000;
        // }
        // if (!line.IsPromotionItem && line.OriginalDiscount2 > 0 && line.OriginalDiscount2 < 1000) {
        //     line.OriginalDiscount2 = line.OriginalDiscount2 * 1000;
        // }
        // if (!line.IsPromotionItem && line.OriginalDiscountFromSalesman > 0 && line.OriginalDiscountFromSalesman < 1000) {
        //     line.OriginalDiscountFromSalesman = line.OriginalDiscountFromSalesman * 1000;
        // }

        if (!line.IsPromotionItem && line.OriginalDiscount2 > (line.UoMPrice - line.BuyPrice) * line.Quantity) {
            line.OriginalDiscount2 = (line.UoMPrice - line.BuyPrice) * line.Quantity;
        }

        line.OriginalTotalBeforeDiscount = line.UoMPrice * line.Quantity;
        line.OriginalDiscountByItem = line.OriginalDiscount1 + line.OriginalDiscount2;

        if (line.OriginalDiscountByItem > line.OriginalTotalBeforeDiscount) {
            line.OriginalDiscount1 = 0;
            line.OriginalDiscount2 = 0;
            line.OriginalDiscountByItem = 0;
        }

        line.OriginalDiscountByGroup = 0;
        line.OriginalDiscountByLine = line.OriginalDiscountByItem + line.OriginalDiscountByGroup;
        line.OriginalDiscountByOrder = 0;
        line.OriginalTotalDiscount = line.OriginalDiscountByLine + line.OriginalDiscountByOrder;

        line.OriginalTotalAfterDiscount = line.OriginalTotalBeforeDiscount - line.OriginalTotalDiscount;
        line.OriginalTax = line.OriginalTotalAfterDiscount * line.TaxRate;
        line.OriginalTotalAfterTax = line.OriginalTotalAfterDiscount + line.OriginalTax;


        if (line.OriginalDiscountFromSalesman > line.OriginalTotalAfterTax) {
            line.OriginalDiscountFromSalesman = line.OriginalTotalAfterTax;
        }

        line.ProductWeight = (line._ProductWeight * line.Quantity) || 0;
        line.ProductDimensions = (line._ProductDimensions * line.Quantity) || 0;
    }

    splitSaleOrder() {
        let publishEventCode = this.pageConfig.pageName;
        let apiPath = {
            method: "POST",
            url: function () { return ApiSetting.apiDomain("SALE/Order/SplitOrder/") }
        };

        return new Promise((resolve, reject) => {
            if (!this.isCanSplit) {
                this.env.showMessage('Vui lòng kiểm tra tên khách hàng và đơn hàng ít nhất phải có 1 sản phẩm.', 'warning');
            }
            else if (this.submitAttempt == false) {
                this.submitAttempt = true;


                if (!this.item.IDBranch) {
                    this.item.IDBranch = this.env.selectedBranch;
                }
                this.pageProvider.commonService.connect(apiPath.method, apiPath.url(), this.item).toPromise()
                    .then((savedItem: any) => {
                        if (publishEventCode) {
                            this.env.publishEvent({ Code: publishEventCode });
                        }
                        this.env.showMessage('Đã lưu xong!', 'success');
                        resolve(true);
                        this.submitAttempt = false;
                        this.closeModal();

                    }).catch(err => {
                        this.env.showMessage('Không lưu được, xin vui lòng thử lại.', 'danger');
                        this.cdr?.detectChanges();
                        this.submitAttempt = false;
                        reject(err);
                    });
            }
        });

    }


}
