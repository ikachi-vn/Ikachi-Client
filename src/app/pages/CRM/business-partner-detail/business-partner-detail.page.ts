import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { CRM_ContactProvider, WMS_PriceListProvider } from 'src/app/services/static/services.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { CommonService } from 'src/app/services/core/common.service';

@Component({
    selector: 'app-business-partner-detail',
    templateUrl: './business-partner-detail.page.html',
    styleUrls: ['./business-partner-detail.page.scss'],
})
export class BusinessPartnerDetailPage extends PageBase {
    avatarURL = 'assets/imgs/avartar-empty.jpg';
    priceList = [];
    
    constructor(
        public pageProvider: CRM_ContactProvider,
        public priceListProvider: WMS_PriceListProvider,
        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,

        public modalController: ModalController,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,
        public loadingController: LoadingController,
        public commonService: CommonService
    ) {
        super();
        this.pageConfig.isDetailPage = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.formGroup = formBuilder.group({
            IDBranch: [''],
            IDParent: [''],
            Id: new FormControl({ value: '', disabled: true }),
            Code: [''],
            Title: [''],
            Name: ['', Validators.required],
            IDOwner: [''],
            CompanyName: [''],
            TaxCode: [''],
            Fax: [''],
            Website: [''],
            BillingAddress: [''],

            IDIndividual: [''],
            IDSource: [''],
            IDSector: [''],
            IDIndustry: [''],
            IDRating: [''],
            NumberOfEmployees: [''],
            AnnualRevenue: [''],

            BankAccount: [''],
            BankName: [''],

            IsPersonal: [''],
            Remark: [''],

            WorkPhone: [''],
            OtherPhone: [''],
            DoNotCall: [''],
            Email: [''],
            HasOptedOutOfEmail: [''],

            Sort: [''],
            IsDisabled: [''],

            IsBranch: [''],
            IsStaff: [''],
            IsDistributor: [''],
            IsStorer: [''],
            IsVendor: [''],
            IsCarrier: [''],
            IsOutlets: [''],
            IsCustomer: [''],
            IsWholeSale: [''],

            IDPriceListForVendor: [''],
            IDPaymentTermForVendor: [''],
            IDBusinessPartnerGroup: [''],
            IDPriceList: [''],
            IDPaymentTerm: [''],

        });
    }

    preLoadData(event){
        super.preLoadData(event);
        this.priceListProvider.read().then(resp=>{
            this.priceList = resp['data'];
        })
    }

    async saveChange() { super.saveChange2(); }

    segmentView = 's1';
    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

    //https://www.google.com/maps/dir/?api=1&origin=10.764310,106.764643&destination=10.764310,106.764643&waypoints=10.7830526,106.94224159999999|10.791549,107.07479179999996|10.7915375,107.0749568|10.7922551,107.0781187|10.725809,107.05181330000005|10.7897802,107.10178040000005
    //https://www.google.com/maps/dir/10.7830526,106.94224159999999/10.791549,107.07479179999996/10.7915375,107.0749568/10.7922551,107.0781187/10.725809,107.05181330000005/10.7897802,107.10178040000005
}
