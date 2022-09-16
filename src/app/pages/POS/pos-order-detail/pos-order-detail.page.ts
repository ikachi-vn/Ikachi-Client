import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { CRM_ContactProvider, POS_MenuProvider, POS_TableGroupProvider, POS_TableProvider, SALE_OrderDetailProvider, SALE_OrderProvider, } from 'src/app/services/static/services.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/services/core/common.service';
import { lib } from 'src/app/services/static/global-functions';
import { concat, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SaleOrderMobileAddContactModalPage } from '../../SALE/sale-order-mobile-add-contact-modal/sale-order-mobile-add-contact-modal.page';

@Component({
    selector: 'app-pos-order-detail',
    templateUrl: './pos-order-detail.page.html',
    styleUrls: ['./pos-order-detail.page.scss'],
})
export class POSOrderDetailPage extends PageBase {
    idTable: any;
    tableGroupList = [];
    tableList = [];
    menuList = [];
    posStatus = ['new', 'picking', 'delivered', 'done', 'cancelled'];
    statusList = [
        { Id: 101, Code: 'new', Name: 'Mới' },
        { Id: 106, Code: 'picking', Name: 'Đang lên món' },
        { Id: 109, Code: 'delivered', Name: 'Đã giao' },
        { Id: 114, Code: 'done', Name: 'Đã xong' },
        { Id: 115, Code: 'cancelled', Name: 'Đã hủy' }
    ];
    selectedTables = [];
    segmentView = 'all';
    kitchenQuery = 'all';
    currentBranch = null;

    constructor(
        public pageProvider: SALE_OrderProvider,
        public saleOrderDetailProvider: SALE_OrderDetailProvider,
        public menuProvider: POS_MenuProvider,
        public tableGroupProvider: POS_TableGroupProvider,
        public tableProvider: POS_TableProvider,
        public contactProvider: CRM_ContactProvider,
        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,
        public loadingController: LoadingController,
        public commonService: CommonService,
    ) {
        super();
        this.pageConfig.isDetailPage = true;
        this.pageConfig.isShowFeature = true;
        this.idTable = this.route.snapshot?.paramMap?.get('table');
        this.idTable = typeof (this.idTable) == 'string' ? parseInt(this.idTable) : this.idTable;
        // this.formGroup = formBuilder.group({
        //     IDBranch: [''],
        //     Id: new FormControl({ value: '', disabled: true }),
        //     Code: [''],
        //     Name: ['', Validators.required],
        // });
    }

    preLoadData(event?: any): void {
        this.currentBranch = this.env.branchList.find(d => d.Id == this.env.selectedBranch);
        this.query.Keyword = 'all';
        this.getTableGroup().then((data: any) => {
            this.tableList = [];
            data.forEach(g => {
                this.tableList.push({ Id: 0, Name: g.Name, levels: [], disabled: true });
                g.TableList.forEach(t => {
                    this.tableList.push({ Id: t.Id, Name: t.Name, levels: [{}] });
                });
            });

            this.env.getStorage('menuList' + this.env.selectedBranch).then(data => {
                if (data) {
                    this.menuList = data;
                    super.preLoadData(event);
                }
                else {
                    Promise.all([
                        this.menuProvider.read(),
                    ]).then(values => {

                        this.menuList = values[0]['data'];
                        this.env.setStorage('menuList' + this.env.selectedBranch, this.menuList);
                        super.preLoadData(event);
                    })
                }
            })
        });
    }

    getTableGroup() {
        return new Promise((resolve, reject) => {
            this.env.getStorage('tableGroup' + this.env.selectedBranch).then(data => {
                if (data) {
                    this.tableGroupList = data;
                    resolve(data);
                }
                else {
                    Promise.all([
                        this.tableGroupProvider.read(),
                        this.tableProvider.read(),
                    ]).then(values => {

                        this.tableGroupList = values[0]['data'];
                        let tableList = values[1]['data'];
                        this.tableGroupList.forEach(g => {
                            g.TableList = tableList.filter(d => d.IDTableGroup == g.Id);
                        });
                        this.env.setStorage('tableGroup' + this.env.selectedBranch, this.tableGroupList);
                        resolve(this.tableGroupList);
                    });
                }
            });
        });
    }

    loadedData(event?: any, ignoredFromGroup?: boolean): void {
        super.loadedData(event, ignoredFromGroup);
        if (!this.item) {
            this.item = {
                IDBranch: this.env.selectedBranch,
                OrderDate: new Date(),
                IDContact: 922,
                IDAddress: 902,
                CustomerName: 'Khách lẻ',
                IDType: 293,
                IDStatus: 101,
                IDOwner: this.env.user.StaffID,
                PaymentMethod: 'InCash',
                Lines: [],
                Tables: [this.idTable]
            };

        }

        if (this.item.IDAddress) {
            this.contactProvider.search({ Take: 20, Skip: 0, Term: this.item.IDContact }).subscribe((data: any) => {
                let contact = data.find(d => d.IDAddress == this.item.IDAddress);
                this.contactSelected = contact;
                data.filter(d => d.Id == this.item.IDContact).forEach(i => {
                    if (i && this.contactListSelected.findIndex(d => d.IDAddress == i.IDAddress) == -1)
                        this.contactListSelected.push(i);
                });

                this.contactSearch();
                this.cdr.detectChanges();
            });
        }
        else {
            this.contactSearch();
        }

        if (!this.item.OrderLines) {
            this.item.OrderLines = [];
        }
        this.item.OrderLines.forEach(it => {
            let i = null;
            this.menuList.some(m => {
                m.Items.some(mi => {
                    if (mi.Id == it.IDItem) {
                        i = mi;
                        return true;
                    }
                });
                if (i) return true;
            });
            if (i) {
                i.Quantity = it.Quantity;
                it._item = i;
            }

        });

        this.orderCalc();
    }

    events(e) {
        if (e.Code == 'add-contact' && e.data) {
            let contact = e.data;
            contact.IDAddress = contact.Address.Id;
            this.contactSelected = contact;
            this.item.IDContact = contact.Id;
            this.item.IDAddress = contact.IDAddress;
            this.formGroup.controls.IDContact.setValue(this.item.IDContact);
            this.formGroup.controls.IDAddress.setValue(this.item.IDAddress);
            this.contactListSelected.push(contact);
            this.contactListSelected = [...this.contactListSelected];

            this.contactSearch();
            this.cdr.detectChanges();

            this.saveChange();
            // this.refresh();
        }
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

    async addContact() {
        const modal = await this.modalController.create({
            component: SaleOrderMobileAddContactModalPage,
            swipeToClose: true,
            cssClass: 'my-custom-class',
            componentProps: {
                'firstName': 'Douglas',
                'lastName': 'Adams',
                'middleInitial': 'N'
            }
        });
        return await modal.present();
    }

    changedIDAddress(i) {
        if (i) {
            this.contactSelected = i;
            this.item.IDContact = i.Id;

            if (this.contactListSelected.findIndex(d => d.Id == i.Id) == -1) {
                this.contactListSelected.push(i);
                this.contactSearch();
            }
        }

    }


    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }


    async addToCart(IDItem, Quantity) {
        let i = null;
        this.menuList.some(m => {
            m.Items.some(it => {
                if (it.Id == IDItem) {
                    i = it;
                    return true;
                }
            });
            if (i) return true;
        });

        if (!i || !i?.UoMs.length) {
            this.env.showAlert('Sản phẩm này không có đơn vị tính! Xin vui lòng liên hệ quản lý để thêm giá sản phẩm.');
            return;
        }

        let uom = i.UoMs[0];
        if (!uom.PriceList || !uom.PriceList.length) {
            this.env.showAlert('Sản phẩm này không có giá! Xin vui lòng liên hệ quản lý để thêm giá sản phẩm.');
            return;
        }

        let price = uom.PriceList[0];
        let qty = (i.Quantity || 0) + Quantity;
        let it = this.item.OrderLines.find(d => d.IDItem == IDItem);
        if (qty > 0) {
            if (it) {
                it.Quantity = qty;
            }
            else {
                it = {
                    IDItem: i.Id,
                    ItemCode: i.Code,
                    ItemName: i.Name,
                    IDUoM: uom.Id,
                    UoMName: uom.Name,
                    UoMPrice: price.Price,
                    TaxRate: i.SaleVAT,
                    Quantity: qty,
                    UoMSwap: 1,
                    IDBaseUoM: uom.Id,
                    BaseQuantity: qty,
                    IDTax: i.IDSalesTaxDefinition,

                    _item: i
                };
                this.item.OrderLines.push(it);
            }
            i.Quantity = qty;
        }
        else {
            if (it) {
                this.alertCtrl.create({
                    header: 'Xóa sản phẩm',
                    //subHeader: '---',
                    message: 'Bạn chắc muốn xóa sản phẩm?',
                    buttons: [
                        {
                            text: 'Không',
                            role: 'cancel',
                        },
                        {
                            text: 'Đồng ý xóa',
                            cssClass: 'danger-btn',
                            handler: () => {

                                let Ids = [];
                                Ids.push({ Id: it.Id });
                                this.saleOrderDetailProvider.delete(Ids).then(resp => {
                                    this.item.OrderLines.splice(this.item.OrderLines.findIndex(d => d.IDItem == IDItem), 1);
                                    this.orderCalc();
                                    this.env.publishEvent({ Code: this.pageConfig.pageName });
                                    this.env.showMessage('Đã xóa.', 'success');
                                    i.Quantity = 0;
                                    setTimeout(() => {
                                        this.saveChange();
                                    }, 100);
                                });
                            }
                        }
                    ]
                }).then(alert => {
                    alert.present();
                })


            }
        }

        this.orderCalc();
    }

    kitchenList = [];
    async orderCalc() {
        this.kitchenList = [];
        this.item.OrderLines.forEach(i => {
            i.TotalBeforeDiscount = i.Quantity * (i.UoMPrice || 0);
            i.TotalDiscount = (i.TotalDiscount || 0);
            i.TotalAfterDiscount = i.TotalBeforeDiscount - i.TotalDiscount;
            i.Tax = i.TotalAfterDiscount * (i.TaxRate / 100 || 0);
            i.TotalAfterTax = i.TotalAfterDiscount + i.Tax;

            if (i._item?.Kitchen) {
                i._IDKitchen = i._item?.Kitchen.Id;
                if (this.kitchenList.findIndex(d => d.Id == i._item.Kitchen.Id) == -1) {
                    this.kitchenList.push(i._item.Kitchen);
                }
            }
        });
        console.log(this.kitchenList);


        this.item.TotalQuantity = this.item.OrderLines.map(x => x.Quantity).reduce((a, b) => (+a) + (+b), 0);

        this.item.TotalBeforeDiscount = this.item.OrderLines.map(x => x.TotalBeforeDiscount).reduce((a, b) => (+a) + (+b), 0);
        this.item.TotalDiscount = this.item.OrderLines.map(x => x.TotalDiscount).reduce((a, b) => (+a) + (+b), 0);
        this.item.TotalAfterDiscount = this.item.OrderLines.map(x => x.TotalAfterDiscount).reduce((a, b) => (+a) + (+b), 0);
        this.item.Tax = this.item.OrderLines.map(x => x.Tax).reduce((a, b) => (+a) + (+b), 0);
        this.item.TotalAfterTax = this.item.OrderLines.map(x => x.TotalAfterTax).reduce((a, b) => (+a) + (+b), 0);
        if (this.item.AmountReceived < 1000) {
            this.item.AmountReceived = this.item.AmountReceived * 1000;
        }
        if(this.item.AmountReceived){
            this.item.TheChange = (this.item.AmountReceived || 0) - this.item.TotalAfterTax;
        }

        this.item.OrderDateText = lib.dateFormat(this.item.OrderDate, 'hh:MM dd/mm/yyyy');
        this.selectedTables = this.tableList.filter(d => this.item.Tables.indexOf(d.Id) > -1);

    }

    async saveChange(andPrint = false, idStatus = null) {
        if (this.submitAttempt) return;
        if (andPrint) this.kitchenQuery = 'all';
        if (idStatus) this.item.IDStatus = idStatus;

        this.submitAttempt = true;
        this.pageProvider.save(this.item).then((savedItem: any) => {
            if (this.id == 0) {
                this.id = savedItem.Id;
                this.item.Id = this.id;
                this.item.OrderLines = savedItem.OrderLines;
                this.loadedData();
                let newURL = '#pos-order/' + savedItem.Id + '/' + this.idTable;
                history.pushState({}, null, newURL);
            }
            this.env.publishEvent({ Code: this.pageConfig.pageName });
            this.env.showMessage('Đã lưu xong!', 'success');
            this.submitAttempt = false;
            if (andPrint) {
                this.print();
            }
        }).catch(err => {
            console.log(err);
            this.submitAttempt = false;
        });
    }

    changeDiscount() {
        let sumDiscount = 0.0;
        this.item.OrderLines.forEach(i => {
            i.TotalDiscount = (i.TotalBeforeDiscount / this.item.TotalBeforeDiscount) * this.item.TotalDiscount;
            sumDiscount += i.TotalDiscount;
        });
        if ((this.item.TotalDiscount - sumDiscount) != 0) {
            this.item.OrderLines[0].TotalDiscount += (this.item.TotalDiscount - sumDiscount);
        }
        this.orderCalc();
    }

    printDate = null;
    sendKitchen(kitchen) {
        this.printDate = lib.dateFormat(new Date(), 'hh:MM dd/mm/yyyy');
        this.kitchenQuery = kitchen.Id;
        if (!this.item.Id || this.item.IDStatus == 101) {
            this.saveChange(false, 106).then(_ => {
                setTimeout(() => {
                    print();
                }, 300);
            })
        }
        else {
            setTimeout(() => {
                print();
                this.saveChange();
            }, 300);
        }

    }
}
