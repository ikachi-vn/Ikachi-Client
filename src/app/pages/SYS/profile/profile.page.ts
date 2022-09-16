import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { CompareValidator } from 'src/app/services/core/validators';
import { HRM_StaffProvider, SYS_UserSettingProvider } from 'src/app/services/static/services.service';
import { ACCOUNT_ApplicationUserProvider } from 'src/app/services/custom.service';
import { FileUploader } from 'ng2-file-upload';
import { CommonService } from 'src/app/services/core/common.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { AccountService } from 'src/app/services/account.service';

@Component({
	selector: 'app-profile',
	templateUrl: 'profile.page.html',
	styleUrls: ['profile.page.scss']
})
export class ProfilePage extends PageBase {
	avatarURL = 'assets/imgs/avartar-empty.jpg';
	segmentView = 's1';
	passwordViewType = 'password';
	minDOB = '';
	maxDOB = '';

	changePasswordForm: FormGroup;

	@ViewChild('importfile') importfile: any;
	uploader: FileUploader = new FileUploader({
		url: '',
		authTokenHeader: "Authorization",
		authToken: this.commonService.getToken(),
		queueLimit: 1,
		allowedFileType: ['image']
	});
	hasBaseDropZoneOver = false;
	userSetting = null;


	constructor(
		public pageProvider: HRM_StaffProvider,
		public accountProvider: AccountService,
		public userProvider: ACCOUNT_ApplicationUserProvider,
		public userSettingProvider: SYS_UserSettingProvider,
		public env: EnvService,
		public navCtrl: NavController,
		public formBuilder: FormBuilder,
		public cdr: ChangeDetectorRef,
		public alertCtrl: AlertController,
		public loadingController: LoadingController,
		public commonService: CommonService

	) {
		super();

		this.pageConfig.isDetailPage = true;

		this.formGroup = formBuilder.group({
			Id: new FormControl({ value: '', disabled: true }),
			IDBranch: new FormControl({ value: '' }),
			Code: [{ value: '' }],
			Name: new FormControl({ value: '' }, Validators.maxLength(128)),
			Remark: new FormControl({ value: '' }),
			IDDepartment: new FormControl({ value: '' }, Validators.required),
			IDJobTitle: new FormControl({ value: '' }, Validators.required),
			IsDisabled: [new FormControl({ value: false })],

			LastName: new FormControl({ value: '' }),

			Title: new FormControl({ value: '' }),
			FirstName: new FormControl({ value: '' }),

			FullName: new FormControl({ value: 'this.item.FullName' }, Validators.required),
			ShortName: new FormControl({ value: '' }),
			Gender: new FormControl({ value: '' }),
			DOB: new FormControl({ value: '' }),
			PhoneNumber: new FormControl({ value: '' }),
			Email: new FormControl({ value: '', disabled: true }),
			Address: new FormControl({ value: '' }),
			ImageURL: new FormControl({ value: '' }),

			IdentityCardNumber: new FormControl({ value: '' }),
			Domicile: new FormControl({ value: '' }),
			DateOfIssueID: new FormControl({ value: '' }),
			IssuedBy: new FormControl({ value: '' }),

			BackgroundColor: new FormControl({ value: '' }),
		});

		this.changePasswordForm = formBuilder.group({
			// Email: ['', Validators.required],
			oldPassword: ['', Validators.required],
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
			this.avatarURL = ApiSetting.mainService.base + 'Uploads/HRM/Staffs/Avatars/' + this.item.Code + '.jpg?t=' + new Date().getTime();

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

	preLoadData() {
		this.id = this.env.user.StaffID;
		super.preLoadData();
	}

	loadedData(event) {
		if (this.id && this.item) {
			this.item.DateOfIssueID = lib.dateFormat(this.item.DateOfIssueID, 'yyyy-mm-dd');
			this.userSetting = this.env.user.UserSetting;
			this.userSetting.isLoaded = true;

			// this.userSettingProvider.read({ IDUser: this.env.user.Id, IgnoredBranch: true }).then((response: any) => {
			// 	this.userSetting = this.accountProvider.loadUserSettings(response.data);
			// 	this.userSetting.isLoaded = true;

			// });

		}
		super.loadedData(event);
	}

	async changePassword() {
		if (!this.changePasswordForm.valid) {
			this.env.showMessage('Vui lòng kiểm tra lại mật khẩu.', 'warning');
		}
		else {
			const loading = await this.loadingController.create({
				cssClass: 'my-custom-class',
				message: 'Đang dữ liệu...'
			});

			await loading.present().then(() => {

				this.userProvider.changePassword(
					this.changePasswordForm.controls.oldPassword.value,
					this.changePasswordForm.controls.newPassword.value,
					this.changePasswordForm.controls.confirmPassword.value)
					.then((savedItem: any) => {
						this.env.showMessage('Đã đổi mật khẩu', 'success');
						this.changePasswordForm.reset();
						this.cdr.detectChanges();
						this.changePasswordForm.markAsPristine();
						if (loading) loading.dismiss();

					})
					.catch(err => {
						let message = '';
						if (err._body && err._body.indexOf('confirmation password do not match') > -1) {
							message = 'Mật khẩu nhập lại không khớp.'
						}
						else if (err._body && err._body.indexOf('least 6 characters') > -1) {
							message = 'Vui lòng nhập mật khẩu nhiều hơn 6 ký tự.'
						}
						else if (err.error && err.error.Message.indexOf('The request is invalid.') > -1) {
							message = 'Mật khẩu không đúng, xin vui lòng kiểm tra lại.'
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

	updateUserSetting(setting) {
		if (this.submitAttempt) return;
		this.submitAttempt = true;

		setting.Value = JSON.stringify(!setting.Value);
		this.userSettingProvider.save(setting).then((response: any) => {
			if (!setting.Id) {
				setting.Id = response.Id;
			}
			// this.userSetting = this.accountProvider.loadUserSettings(response.data);
			// this.userSetting.isLoaded = true;
			setting.Value = JSON.parse(setting.Value);
			this.submitAttempt = false;
			//this.env.user.UserSetting[setting.Code] = setting;
			// 	// this.env.setStorage('UserProfile', this.env.user);
		});


	}

	segmentChanged(ev: any) {
		this.segmentView = ev.detail.value;
	}

	logout() {
		event.preventDefault();
		event.stopPropagation();
		this.env.publishEvent({ Code: 'app:logout' });
	}
}
