import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { CRM_RouteProvider, CRM_RouteDetailProvider, SHIP_VehicleProvider, HRM_StaffProvider, BRA_BranchProvider } from 'src/app/services/static/services.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { CommonService } from 'src/app/services/core/common.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { NgSelectConfig } from '@ng-select/ng-select';
import { concat, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { MCPCustomerPickerModalPage } from '../mcp-customer-picker-modal/mcp-customer-picker-modal.page';

@Component({
    selector: 'app-mcp-detail',
    templateUrl: './mcp-detail.page.html',
    styleUrls: ['./mcp-detail.page.scss'],
})
export class MCPDetailPage extends PageBase {
    formGroup: FormGroup;

    minDOB = '';
    maxDOB = '';

    routeDetail = [];
    vehicleList = [];
    wareHouseList = [];

    constructor(
        public pageProvider: CRM_RouteProvider,
        public routeDetailProvider: CRM_RouteDetailProvider,
        public vehicleProvider: SHIP_VehicleProvider,
        public staffProvider: HRM_StaffProvider,
        public branchProvider: BRA_BranchProvider,

        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,

        public modalController: ModalController,
        public alertCtrl: AlertController,
        // public navParams: NavParams,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,
        public loadingController: LoadingController,
        public commonService: CommonService,
        private config: NgSelectConfig
    ) {
        super();
        this.item = {};
        this.pageConfig.isDetailPage = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.formGroup = formBuilder.group({
            IDBranch: [''],
            IDSeller: ['', Validators.required],

            IDVehicle: [''],
            IDVehicleForSample: [''],
            IDVehicleForUrgent: [''],
            IDVehicleForWholeSale: [''],

            IDShipper: [''],
            IDParent: [''],
            IDWarehouse: ['', Validators.required],
            Id: new FormControl({ value: '', disabled: true }),
            Code: [''],
            Name: ['', Validators.required],
            Remark: [''],
            Sort: [''],
            IsDisabled: [''],
            StartDate: ['']

        });

        let cYear = (new Date()).getFullYear();
        this.minDOB = (cYear - 1) + '-01-01';
        this.maxDOB = (cYear + 5) + '-12-31';

        this.config.notFoundText = 'Không tìm thấy dữ liệu phù hợp...';
        this.config.clearAllText = 'Xóa hết';
        
    }

    preLoadData(event) {
        this.vehicleProvider.read({ IDParent: 3 }).then(response => {
            this.vehicleList = response['data'];
        });
        this.branchProvider.read({ IDType: 115 }).then(response => {
            this.wareHouseList = response['data'];
        });

        super.preLoadData(event);
    }

    loadedData(event) {
        if (this.item.Id) {
            this.routeDetailProvider.apiPath.getList.url = function () { return ApiSetting.apiDomain("CRM/RouteDetail/List") };

            this.routeDetailProvider.read({ IDRoute: this.item.Id, Take: 5000, Skip: 0 }).then(response => {
                this.routeDetail = response['data'];
            });
        }

        super.loadedData(event);
        this.item.StartDate = this.item.StartDate ? lib.dateFormat(this.item.StartDate, 'yyyy-mm-dd') : lib.dateFormat(new Date(), 'yyyy-mm-dd')

        if (this.item.IDSeller) {
            this.loadSelectedSeller(this.item.IDSeller);
        }
        else {
            this.sellerSearch();
        }

        if (this.item.IDShipper) {
            this.loadSelectedShipper(this.item.IDShipper);
        }
        else {
            this.shipperSearch();
        }

    }

    saveRouteDetail(i) {
        i.Frequency =
            ((i.Week1 ? 1 : 0) + (i.Week2 ? 1 : 0) + (i.Week3 ? 1 : 0) + (i.Week4 ? 1 : 0))
            *
            ((i.Monday ? 1 : 0) + (i.Tuesday ? 1 : 0) + (i.Wednesday ? 1 : 0) + (i.Thursday ? 1 : 0) + (i.Friday ? 1 : 0) + (i.Saturday ? 1 : 0) + (i.Sunday ? 1 : 0));
        this.routeDetailProvider.save(i).then(result => {
            if (i.Id == 0) {
                i.Id = result['Id'];
            }
            this.env.showMessage('Đã cập nhật MCP', 'success');
        })
    }

    deleteRouteDetail(i){
        this.routeDetailProvider.delete(i).then(result =>{
            this.env.showMessage('Đã cập nhật MCP', 'success');
            const index = this.routeDetail.indexOf(i);
            if (index > -1) {
                this.routeDetail.splice(index, 1);
            }
        });
    }

    segmentView = 's1';
    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

    shipperList$
    shipperListLoading = false;
    shipperListInput$ = new Subject<string>();
    shipperListSelected = [];
    shipperSelected = null;
    shipperSearch() {
        this.shipperListLoading = false;
        this.shipperList$ = concat(
            of(this.shipperListSelected),
            this.shipperListInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.shipperListLoading = true),
                switchMap(term => this.staffProvider.search({ Take: 20, Skip: 0, Term: term ? term : this.item.IDSeller }).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.shipperListLoading = false)
                ))
            )
        );
    }
    loadSelectedShipper(IDShipper) {
        this.staffProvider.getAnItem(IDShipper).then(resp => {
            this.shipperListSelected.push(resp);
            this.shipperListSelected = [...this.shipperListSelected];
            this.shipperSearch();
        });
    }

    changedVehicle() {
        // let IDVehicle = this.formGroup.get('IDVehicle').value;
        // let selectedVehicle = this.vehicleList.find(d => d.Id == IDVehicle);
        // this.formGroup.get('IDShipper').setValue(selectedVehicle.IDShipper);
        // this.loadSelectedShipper(selectedVehicle.IDShipper);
        this.saveChange()
    }

    sellerList$
    sellerListLoading = false;
    sellerListInput$ = new Subject<string>();
    sellerListSelected = [];
    sellerSelected = null;
    sellerSearch() {
        this.sellerListLoading = false;
        this.sellerList$ = concat(
            of(this.sellerListSelected),
            this.sellerListInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.sellerListLoading = true),
                switchMap(term => this.staffProvider.search({ Take: 20, Skip: 0, Term: term ? term : this.item.IDSeller }).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.sellerListLoading = false)
                ))
            )
        );
    }
    loadSelectedSeller(IDSeller) {
        this.staffProvider.getAnItem(IDSeller).then(resp => {
            this.sellerListSelected.push(resp);
            this.sellerListSelected = [...this.sellerListSelected];
            this.sellerSearch();
        });
    }

    async showMCPCustomerPickerModal() {
        const modal = await this.modalController.create({
            component: MCPCustomerPickerModalPage,
            componentProps: {
                id: this.item.Id
            },
            cssClass: 'modal90'
        });

        await modal.present();
        const { data } = await modal.onWillDismiss();

        if (data && data.length) {
            for (let i = 0; i < data.length; i++) {
                const e = data[i];
                if (this.routeDetail.findIndex(d => d.IDContact == e.Id) == -1) {
                    e.IDRoute = this.id;
                    e.IDContact = e.Id;
                    e.Id = 0;
                    e.CustomerName = e.Name;
                    e.Week1 = true;
                    e.Week2 = true;
                    e.Week3 = true;
                    e.Week4 = true;
                    e.Monday = false;
                    e.Tuesday = false;
                    e.Wednesday = false;
                    e.Thursday = false;
                    e.Friday = false;
                    e.Saturday = false;
                    e.Sunday = false;
                    e.Frequency = 0;
                    e.Sort = 10;

                    this.routeDetail.push(e);
                    this.saveRouteDetail(e);
                }
            }


        }
    }

}
