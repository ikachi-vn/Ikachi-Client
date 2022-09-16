import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { CRM_ContactProvider, BRA_BranchProvider } from 'src/app/services/static/services.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { CommonService } from 'src/app/services/core/common.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { CompareValidator } from 'src/app/services/core/validators';
import { ACCOUNT_ApplicationUserProvider } from 'src/app/services/custom.service';

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.page.html',
    styleUrls: ['./vendor-detail.page.scss'],
})
export class VendorDetailPage extends PageBase {
    formGroup: FormGroup;
    avatarURL = 'assets/imgs/avartar-empty.jpg';
    @ViewChild('importfile') importfile: any;

    uploader: FileUploader = new FileUploader({
        url: '',
        authTokenHeader: "Authorization",
        authToken: this.commonService.getToken(),
        queueLimit: 1,
        allowedFileType: ['image']
    });
    hasBaseDropZoneOver = false;

    activePage = 'page-1';
    baseServiceURL = ApiSetting.mainService.base;
    showLogout = false;

    oldPassword = '';
    newPassword = '';
    confirmPassword = '';
    passwordViewType = 'password';
    showRolesEdit = false;
    userAccount: any = {};
    changePasswordForm: FormGroup;

    roles = [];
    vendorInRoles = [];
    vendorInRole: any = {};

    minDOB = ''
    maxDOB = ''

    constructor(
        public pageProvider: CRM_ContactProvider,
        public branchProvider: BRA_BranchProvider,
        public urserProvider: ACCOUNT_ApplicationUserProvider,
        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,

        public modalController: ModalController,
        public alertCtrl: AlertController,
        // public navParams: NavParams,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,
        public loadingController: LoadingController,
        public commonService: CommonService
    ) {
        super();
        this.item = {
            IsVendor: true,
            IsPersonal: false
        };
        this.pageConfig.isDetailPage = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.formGroup = formBuilder.group({


            IDBranch: [''],
            IDIndividual: [''],
            IDSource: [''],
            IDSector: [''],
            IDIndustry: [''],
            IDRating: [''],
            IDOwner: [''],
            IDParent: [''],
            Id: new FormControl({ value: '', disabled: true }),
            Code: [''],
            Title: [''],
            Name: ['', Validators.required],


            CompanyName: [''],
            TaxCode: [''],
            Fax: [''],
            Website: [''],
            BillingAddress: [''],
            NumberOfEmployees: [''],
            AnnualRevenue: [''],
            BankAccount: [''],
            BankName: [''],

            AssistantName: [''],
            AssistantPhone: [''],

            IsPersonal: [''],
            FullName: [''],
            FirstName: [''],
            LastName: [''],
            Birthdate: [''],
            BirthMonth: [''],
            BirthYear: [''],
            Gender: [''],
            DOB: [''],
            Domicile: [''],
            IdentityCardNumber: [''],
            DateOfIssueID: [''],
            IssuedBy: [''],
            Remark: [''],

            Department: [''],
            WorkPhone: [''],
            HomePhone: [''],
            MobilePhone: [''],
            OtherPhone: [''],
            DoNotCall: [''],
            Email: [''],
            HasOptedOutOfEmail: [''],
            AddressLine1: [''],
            AddressLine2: [''],
            IDCity: [''],
            IDProvince: [''],
            ZipCode: [''],
            IDCountry: [''],
            Sort: [''],
            IsDisabled: [''],

            IsVendor: [''],

            Lat: [''],
            Long: ['']
        });


        this.uploader.onBeforeUploadItem = (item) => {
            let UploadAPI = ApiSetting.apiDomain('CUS/FILE/UploadAvatar/' + this.item.Code);
            item.url = UploadAPI;
        }

        this.uploader.onSuccessItem = (item, response, status: number, headers) => {
            this.uploader.clearQueue();
            //console.log(response);
            this.avatarURL = this.baseServiceURL + 'Uploads/HRM/Vendors/Avatars/' + this.item.Code + '.jpg?t=' + new Date().getTime();
            if (this.env.user.Email == this.item.Email) {

                this.env.user.Avatar = this.avatarURL;
            }
        }

        let cYear = (new Date()).getFullYear();
        this.minDOB = (cYear - 70) + '-01-01';
        this.maxDOB = (cYear - 16) + '-12-31';


    }

    loadedData(event) {
        super.loadedData(event);
        if (this.item && this.item.Id == 0) {
            this.item.IsVendor = true;
            this.item.IsPersonal = false;

            this.formGroup?.patchValue(this.item);
            this.formGroup?.markAsPristine();
            this.cdr?.detectChanges();
        }

    }

    async saveChange() {
        this.bindName();
        super.saveChange();
    }

    bindName() {
        if (this.formGroup && this.formGroup.controls.FullName.value) {
            let names = this.formGroup.controls.FullName.value.split(' ');
            if (names.length > 1) {
                this.formGroup.controls.FirstName.setValue(names[names.length - 1]);
                this.formGroup.controls.LastName.setValue(names[0]);
                //this.formGroup.controls.Name.setValue( names[names.length - 1] + ' ' + names[0]);
            }
        }
    }

    segmentView = 's1';
    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

    onFileSelected() {

    }

    selectFile() {

    }

    fileOverBase(e) {

    }

}
