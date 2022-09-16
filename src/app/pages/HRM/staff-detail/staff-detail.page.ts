import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { HRM_StaffProvider, HRM_Staff_ConcurrentPositionProvider, BRA_BranchProvider } from 'src/app/services/static/services.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { CommonService } from 'src/app/services/core/common.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { CompareValidator } from 'src/app/services/core/validators';
import { ACCOUNT_ApplicationUserProvider } from 'src/app/services/custom.service';
import { lib } from 'src/app/services/static/global-functions';

@Component({
    selector: 'app-staff-detail',
    templateUrl: './staff-detail.page.html',
    styleUrls: ['./staff-detail.page.scss'],
})
export class StaffDetailPage extends PageBase {
    
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

 
    passwordViewType = 'password';
    showRolesEdit = false;
    userAccount: any = {};
    changePasswordForm: FormGroup;

    roles = [];
    staffInRoles = [];
    staffInRole: any = {};

    minDOB = ''
    maxDOB = ''

    constructor(
        public pageProvider: HRM_StaffProvider,
        public staffConcurrentPositionProvider: HRM_Staff_ConcurrentPositionProvider,
        public branchProvider: BRA_BranchProvider,
        public urserProvider: ACCOUNT_ApplicationUserProvider,
        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,

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
            Id: new FormControl({ value: '', disabled: true }),
            IDBranch: new FormControl({ value: '' }),
            Code: [{ value: '' }],
            Name: new FormControl({ value: '' }, Validators.maxLength(128)),
            Remark: new FormControl({ value: '' }),
            IDDepartment: new FormControl({ value: '' }, Validators.required),
            IDJobTitle: new FormControl({ value: '' }, Validators.required), 
            IsDisabled: [new FormControl({ value: false, disabled: !this.pageConfig.canArchive })],

            LastName: new FormControl({ value: '' }),

            Title: new FormControl({ value: '' }),
            FirstName: new FormControl({ value: '' }),

            FullName: new FormControl({ value: '' }, Validators.required),
            ShortName: new FormControl({ value: '' }),
            Gender: new FormControl({ value: '' }),
            DOB: new FormControl({ value: '' }),
            PhoneNumber: new FormControl({ value: '' }),
            Email: new FormControl({ value: '' }),
            Address: new FormControl({ value: '' }),
            ImageURL: new FormControl({ value: '' }),

            IdentityCardNumber: new FormControl({ value: '' }),
            Domicile: new FormControl({ value: '' }),
            DateOfIssueID: new FormControl({ value: '' }),
            IssuedBy: new FormControl({ value: '' }),

            BackgroundColor: new FormControl({ value: '' }),
        });

        this.changePasswordForm = formBuilder.group({
            Email: ['', Validators.required],
            oldPassword: new FormControl({ value: '' }),
            newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            confirmPassword: ['', Validators.compose([Validators.required, CompareValidator.confirmPassword])]
        });
        this.changePasswordForm.controls['confirmPassword'].setParent(this.changePasswordForm);

        this.uploader.onBeforeUploadItem = (item) => {
            let UploadAPI = ApiSetting.apiDomain('CUS/FILE/UploadAvatar/' + this.item.Code);
            item.url = UploadAPI;
        }

        this.uploader.onSuccessItem = (item, response, status: number, headers) => {

            this.uploader.clearQueue();
            //console.log(response);
            this.avatarURL = this.baseServiceURL + 'Uploads/HRM/Staffs/Avatars/' + this.item.Code + '.jpg?t=' + new Date().getTime();

            if (this.env.user.Email == this.item.Email) {
                //reload avatar in user cp
                this.env.user.Avatar = this.avatarURL;

                //this.accountService.setProfile(GlobalData.Profile);
                //this.events.publish('app:UpdateAvatar', this.avatarURL);
                //console.log('app:UpdateAvatar');
            }
        }

        let cYear = (new Date()).getFullYear();
        this.minDOB = (cYear - 70) + '-01-01';
        this.maxDOB = (cYear - 16) + '-12-31';

    }

    branchList = [];
    departmentList = [];

    preLoadData() {
        this.branchProvider.read({
            Take: 5000,
            AllChildren: true,
            AllParent: true
        }).then((resp: any) => {
            this.branchList = resp.data;

            this.buildFlatTree(this.branchList, this.branchList, true).then((tree: any) => {
                this.branchList = tree;
                this.branchList.forEach(i => {
                    let prefix = '';
                    for (let j = 1; j < i.level; j++) {
                        prefix += '- '
                    }
                    i.Name = prefix + i.Name;

                    if (i.IDType != 119) {
                        this.departmentList.push(i);
                    }
                })
            })

        });
        super.preLoadData(null);
    }

    async loadedData(event) {
        if (this.id && this.item) {
            this.item.DateOfIssueID = lib.dateFormat(this.item.DateOfIssueID, 'yyyy-mm-dd');
            if(this.item.Email){
                this.urserProvider.getAnItem(this.item.Email, '').then((ite) => {
                    if (ite) {
                        this.userAccount = ite
                        this.changePasswordForm.patchValue(this.userAccount);
                        this.changePasswordForm.markAsPristine();
                        this.cdr.detectChanges();
                    }
                    else {
                        this.userAccount = {};
                        this.userAccount.Id = '';
                        this.changePasswordForm.reset();
                    }
                }).catch((data) => {
                    this.userAccount.Id = 0;
                    this.changePasswordForm.reset();
                });
            }
            setTimeout(() => {
                this.changeDepartment();
            }, 0);
            
        }
        

        //this.showRolesEdit = GlobalData.Profile.Roles.SYSRoles.indexOf('HOST') > -1;

        super.loadedData(event)

        this.formGroup?.reset();
        this.formGroup?.patchValue(this.item);
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
                this.formGroup.controls.LastName.setValue( names[0]);
                this.formGroup.controls.Name.setValue( names[names.length - 1] + ' ' + names[0]);
            }

            
        }
    }

    changeDepartment(){
        let selectedDepartment = this.formGroup.controls.IDDepartment.value;
        this.branchList.forEach(b=>{b.Flag = false});
        this.markNestedNode(this.branchList, selectedDepartment); 
    }
    markNestedNode(ls, Id) {
        ls.filter(d => d.IDParent == Id).forEach(i => {
            i.Flag = true;
            this.markNestedNode(ls, i.Id);
        });
    }

    segmentView = 's1';
    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

    changeLock() {
        this.userAccount.LockoutEnabled = !this.userAccount.LockoutEnabled;
        let message = 'Tài khoản hoạt động bình thường';

        if (this.userAccount.LockoutEnabled) {
            message = 'Tài khoản đã bị khóa, không cho phép đăng nhập';
        }
        this.urserProvider.save(this.userAccount).then(() => {
            this.env.showMessage(message, 'warning');
            this.env.publishEvent({ Code: 'changeAccount' });
        })
    }

    changeRole(role) {

    }

    checkRole(role) {
        return false;
    }

    //https://www.google.com/maps/dir/?api=1&origin=10.764310,106.764643&destination=10.764310,106.764643&waypoints=10.7830526,106.94224159999999|10.791549,107.07479179999996|10.7915375,107.0749568|10.7922551,107.0781187|10.725809,107.05181330000005|10.7897802,107.10178040000005
    //https://www.google.com/maps/dir/10.7830526,106.94224159999999/10.791549,107.07479179999996/10.7915375,107.0749568/10.7922551,107.0781187/10.725809,107.05181330000005/10.7897802,107.10178040000005


    onFileSelected() {

    }

    selectFile() {

    }

    fileOverBase(e) {

    }

    async createAccount() {
        if (!this.changePasswordForm.valid) {
            this.env.showMessage('Vui lòng kiểm tra lại các thông tin được tô đỏ bên trên.', 'warning');
        }
        else {
            const loading = await this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Đang dữ liệu...'
            });
            await loading.present().then(() => {
                this.userAccount.Id = '';
                //this.userAccount.Email = this.item.Email;
                this.userAccount.FullName = this.item.FullName;
                this.userAccount.Avatar = 'Uploads/HRM/Staffs/Avatars/' + this.item.Id + '.jpg';
                this.userAccount.PhoneNumber = this.item.PhoneNumber;
                this.userAccount.Address = this.item.Address;
                this.userAccount.StaffID = this.item.Id;
                this.userAccount.PartnerID = this.item.IDPartner;
                this.userAccount.UserName = this.changePasswordForm.controls.newPassword.value; //UserName => Password on server

                this.urserProvider.save(this.userAccount)
                    .then((newId: any) => {
                        this.userAccount.Id = newId;
                        if (this.userAccount.Email != this.item.Email) {
                            this.item.Email = this.userAccount.Email;
                            
                        }

                        this.env.showMessage('Đã tạo tài khoản ' + this.userAccount.Email, 'success');
                        if (loading) loading.dismiss();
                        this.changePasswordForm.markAsPristine();
                        this.cdr.detectChanges();

                    })
                    .catch(err => {
                        if (loading) loading.dismiss();
                        if(err.error && err.error.Message && err.error.Message.indexOf('Account with email is exits') > -1){
                            this.env.showMessage('Email đã được đăng ký tài khoản, xin vui lòng kiểm tra lại...', 'danger');
                        }
                        else{
                            this.env.showMessage('Không lưu được, xin vui lòng thử lại.', 'danger');
                        }
                        
                        this.cdr.detectChanges();
                    });
            });

        }
    }

    async resetPassword() {
        if (!this.changePasswordForm.valid) {
            this.env.showMessage('Vui lòng kiểm tra lại các thông tin được tô đỏ bên trên.', 'warning');
        }
        else {
            const loading = await this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Đang dữ liệu...'
            });

            await loading.present().then(() => {

                this.urserProvider.resetPassword(this.userAccount.Id, this.changePasswordForm.controls.newPassword.value, this.changePasswordForm.controls.confirmPassword.value)
                    .then((savedItem: any) => {
                        this.env.showMessage('Đã đổi mật khẩu', 'success');
                        
                        this.cdr.detectChanges();
                        this.changePasswordForm.markAsPristine();
                        if (loading) loading.dismiss();

                    })
                    .catch(err => {
                        let message = '';
                        if (err._body.indexOf('confirmation password do not match') > -1) {
                            message = 'Mật khẩu nhập lại không khớp.'
                        }
                        else if (err._body.indexOf('least 6 characters') > -1) {
                            message = 'Vui lòng nhập mật khẩu nhiều hơn 6 ký tự.'
                        }
                        else {
                            message = 'Không lưu được, \nvui lòng thử lại.'
                        }
                        if (loading) loading.dismiss();
                        this.env.showMessage(message, 'danger');
                        this.cdr.detectChanges();
                    });
            });

        }
    }

}
