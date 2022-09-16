import { Injectable } from '@angular/core';
import { APIList, GlobalData } from '../services/static/global-variable';
import { CommonService } from '../services/core/common.service';
import { ApiSetting } from './static/api-setting';
import { EnvService } from './core/env.service';
import { Platform } from '@ionic/angular';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { lib } from './static/global-functions';
import { SYS_StatusProvider, SYS_TypeProvider, SYS_UserDeviceProvider } from './static/services.service';
import { Device } from '@capacitor/device';
import { Capacitor } from '@capacitor/core';


@Injectable({
	providedIn: 'root'
})
export class AccountService {

	constructor(
		public commonService: CommonService,
		private statusProvider: SYS_StatusProvider,
        private typeProvider: SYS_TypeProvider,
		private userDeviceProvider: SYS_UserDeviceProvider,

		public env: EnvService,
		public plt: Platform,
	) {
		// this.plt.ready().then(() => {
		// 	this.loadSavedData().then(() => {
		// 	}).catch(err => {
		// 		//console.log(err);
		// 	});
		// });
		// Done: flow
		// 1. check app version
		//   => old: clear all
		// 2. check token
		//   => null || expire: clear all
		// 3. get user info
		//   => fail: clear all

	}

	checkVersion() {
		return new Promise(resolve => {
			this.env.getStorage('appVersion').then((version) => {
				if (this.env.version != version) {


					GlobalData.Token = {
						"access_token": "no token",
						"expires_in": 0,
						"token_type": "",
						"refresh_token": "no token"
					};

					this.env.setStorage('UserToken', GlobalData.Token).then(() => {
						this.env.user = null;
						this.env.setStorage('UserProfile', null).then(() => {
							this.env.setStorage('appVersion', this.env.version).then(() => {
								location.reload();
								resolve(this.env.version);
							})
						});
					});
				}
				else {
					resolve(this.env.version);
				}
			});
		});
	}

	loadSavedData(forceReload = false) {
		return new Promise(resolve => {
			this.checkVersion().then((v) => {
				GlobalData.Version = v;
				this.getToken().then(() => {
					//TODO forceReload
					this.getProfile(true).then(() => {
						resolve(true);
						this.env.isloaded = true;
						this.env.publishEvent({ Code: 'app:loadedLocalData' })
					})
				})
			});
		});
	}

	setToken(token) {
		if (token != null) {
			GlobalData.Token = token;
		}
		else {
			GlobalData.Token = {
				"access_token": "no token",
				"expires_in": 0,
				"token_type": "",
				"refresh_token": "no token"
			};
		}
		this.env.setStorage('UserToken', GlobalData.Token);
	}

	getToken() {
		return new Promise(resolve => {
			this.env.getStorage('UserToken').then((token) => {
				if (token != null) {
					let expires = new Date(token[".expires"]);
					let cDate = new Date();
					cDate.setDate(cDate.getDate() + 2);

					if (expires > cDate) {
						GlobalData.Token = token;
					}
					else {
						GlobalData.Token = {
							"access_token": "-1",
							"expires_in": 0,
							"token_type": "",
							"refresh_token": "no token"
						};
					}
				}
				else {
					GlobalData.Token = {
						"access_token": "-1",
						"expires_in": 0,
						"token_type": "",
						"refresh_token": "no token"
					};
				}
				resolve(GlobalData.Token);
			});
		});
	}

	settingList = ['IsDarkTheme', 'IsCompactMenu', 'IsCacheQuery', 'PinnedForms'];
	loadUserSettings(settings, profile = this.env.user) {
		let userSetting = {};
		for (let idx = 0; idx < this.settingList.length; idx++) {
			const s = this.settingList[idx];
			let setting = settings ? settings.find(d => d.Code == s) : null;

			if (setting && setting.Value) {
				setting.Value = JSON.parse(setting.Value);
			}
			else {
				setting = { Id: 0, Code: s, Value: null, IDUser: profile.Id, Email: profile.Email };
			}
			userSetting[s] = setting;
		}
		return userSetting;
	}
	setProfile(profile) {
		return new Promise(resolve => {

			if (profile) {
				let settings = JSON.parse(JSON.stringify(profile.UserSetting));
				profile.UserSetting = this.loadUserSettings(settings, profile);
				this.env.user = profile;
				this.env.branchList = profile.BranchList;

				Promise.all([this.statusProvider.read(),this.typeProvider.read()] ).then(values=>{
					this.env.statusList = values[0]['data'];
					this.env.typeList = values[1]['data'];
					this.env.setStorage('UserProfile', profile).then(_ => {
						this.env.loadBranch().then(_ => {
							this.env.publishEvent({ Code: 'app:updatedUser' });
							resolve(true);
						});
					});
				})
			}
			else {
				this.env.user = null;
				this.env.branchList = [];
				this.env.setStorage('UserProfile', profile).then(_ => {
					this.env.loadBranch().then(_ => {
						this.env.publishEvent({ Code: 'app:updatedUser' });
						resolve(true);
					});
				});
			}

			
		});
	}

	getProfile(forceReload = false) {
		return new Promise(resolve => {
			if (forceReload) {
				this.syncGetUserData().then(() => {
					resolve(true);
				});
			}
			else {
				this.env.getStorage('UserProfile').then((profile) => {
					if (profile) {
						this.env.user = profile;
						resolve(true);
					} else {
						this.syncGetUserData().then(() => {
							resolve(true);
						});
					}
				});
			}

		});
	}

	syncGetUserData() {
		let that = this;
		return new Promise(function (resolve, reject) {
			that.commonService.connect(
				APIList.ACCOUNT.getUserData.method,
				APIList.ACCOUNT.getUserData.url + '?GetMenu=true',
				null
			).toPromise()
				.then((data: any) => {
					if (data) {
						data.Avatar = data.Avatar ? (data.Avatar.indexOf('http') != -1 ? data.Avatar : ApiSetting.mainService.base + data.Avatar) : null;

						lib.buildFlatTree(data.Forms, data.Forms, true).then((resp: any) => {

							// let currentItem = resp.find(i => i.Id == 2656); //Seller app
							// if (currentItem) {
							// 	currentItem.isMobile = true;
							// 	lib.markNestedNode(resp, 2656, 'isMobile');
							// }

							data.Forms = resp.filter(d => !d.isMobile);

							that.setProfile(data).then(_ => {
								resolve(true);
							});
						});

					}
				})
				.catch(err => {
					if (err.status == 417 && err.statusText) {
						let vers = err.statusText.split('|');
						that.env.showMessage(`Xin vui lòng cập nhật phần mềm <br> (tối thiểu là ${vers[0]}). <br>Phiên bản hiện tại là ${vers[1]}.`, 'danger', 0, true);
						that.env.publishEvent({ Code: 'app:ForceUpdate' });
					}
					else if (err.status == 0 && err.message.indexOf('failure response') > -1) {
						that.env.showMessage("Không kết nối được server, xin vui lòng thử lại.", 'danger');
						that.env.publishEvent({ Code: 'app:ConnectFail' });
					}
					else {
						that.env.showMessage(err.message, 'warning');
						that.env.publishEvent({ Code: 'app:ConnectFail' });
					}

					reject(err);
					//return Promise.reject(err.message || err);
				});
		});
	}

	register(username, password, confirmpassword, PhoneNumber, FullName) {
		var that = this;
		return new Promise(function (resolve, reject) {

			let data = {
				Email: username,
				Password: password,
				ConfirmPassword: confirmpassword,
				FullName: FullName,
				PhoneNumber: PhoneNumber,
			};

			that.commonService.connect('POST', APIList.ACCOUNT.register.url, data)
				.pipe(
					catchError((error: HttpErrorResponse) => {
						reject(error);
						return throwError(error);
					})
				)
				.subscribe(data => {
					that.login(username, password)
						.then(() => {
							resolve(true);
						})
						.catch(err => {
							reject(err);
						});
				});

		});


		// return new Promise(function (resolve, reject) {
		// 	let params = new URLSearchParams();
		// 	let data = {
		// 		Email: username,
		// 		Password: password,
		// 		ConfirmPassword: confirmpassword,
		// 		FullName: FullName,
		// 		PhoneNumber: PhoneNumber,
		// 	};

		// 	this.commonService.
		// 	that.http.post(APIList.ACCOUNT.register.url, data)
		// 		.pipe(
		// 			// tap(_ => {
		// 			// 	// //console.log(URL)
		// 			// }),
		// 			catchError(that.handleError(URL))
		// 		)
		// 		.subscribe(data => {
		// 			that.login(username, password)
		// 				.then(() => {
		// 					resolve(true);
		// 				})
		// 				.catch(err => {
		// 					reject(err);
		// 				});
		// 		});
		// });
	}

	login(username, password) {
		var that = this;
		return new Promise(async function (resolve, reject) {
			let urlSearchParams = new URLSearchParams();
			urlSearchParams.set('grant_type', 'password');
			urlSearchParams.set('username', username);
			urlSearchParams.set('password', password);

			let deviceInfo = null;
			if (Capacitor.isPluginAvailable('Device')){
				let info = await Device.getInfo();
				let UID = await Device.getId();

				
				deviceInfo = {
					Id: 0,
					Code : UID.uuid,
					Name : info.name,
					Model : info.model,
					Platform : info.platform,
					OperatingSystem : info.operatingSystem,
					OsVersion : info.osVersion,
					Manufacturer : info.manufacturer,
					IsVirtual : info.isVirtual,
					WebViewVersion: info.webViewVersion
				}
				
			}



			let data = urlSearchParams.toString();

			that.commonService.connect('Login', APIList.ACCOUNT.token.url, data)
				.pipe(
					catchError((error: HttpErrorResponse) => {
						reject(error);
						return throwError(error);
					})
				)
				.subscribe(data => {
					if (data) {
						that.setToken(data);
						if(deviceInfo){
							that.userDeviceProvider.save(deviceInfo).then(_=>{});
						}
						
						that.syncGetUserData()
							.then(() => {
								resolve(true);
							});
					}
					else {
						reject('Can not login!')
					}


				});
		});
	}

	ObtainLocalAccessToken(provider, externalAccessToken) {
		var that = this;
		return new Promise(function (resolve, reject) {

			let data = {
				provider: provider,
				externalAccessToken: externalAccessToken
			};

			that.commonService.connect(APIList.ACCOUNT.getObtainLocalAccessToken.method, APIList.ACCOUNT.getObtainLocalAccessToken.url, data)
				.pipe(
					catchError((error: HttpErrorResponse) => {
						reject(error);
						return throwError(error);
					})
				)
				.subscribe(data => {
					if (data) {
						that.setToken(data);
						that.syncGetUserData()
							.then(() => {
								resolve(true);
							});
					}
					else {
						reject('Can not login!')
					}


				});
		});
	}

	logout() {
		var that = this;
		var curentUsername = this.env?.user?.UserName;
		var currentVersion = this.env?.version;
		return new Promise(function (resolve, reject) {
			that.env.clearStorage().then(_ => {
				that.env.setStorage('appVersion', currentVersion);

				that.setToken(null);
				that.setProfile(null).then(_ => {
					that.env.setStorage('Username', curentUsername).then(() => {
						resolve(true);
					})

				});
			})
		});
	}

	forgotPassword(email) {
		let data = { Email: email };
		return this.commonService.connect(
			APIList.ACCOUNT.forgotPassword.method,
			APIList.ACCOUNT.forgotPassword.url,
			data
		).toPromise();
	}

	getExternalLogins() {
		let that = this;
		return new Promise(function (resolve, reject) {
			that.commonService.connect(
				APIList.ACCOUNT.getExternalLogins.method,
				APIList.ACCOUNT.getExternalLogins.url,
				null
			).toPromise()
				.then((data: any) => {
					resolve(data);
				})
				.catch(err => {
					reject(err);
					return Promise.reject(err.message || err);
				});
		});
	}
}
