import { Component, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform, MenuController, NavController, PopoverController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar, Style } from '@capacitor/status-bar';

import { Router, NavigationEnd } from '@angular/router';
import { EnvService } from './services/core/env.service';
import { AccountService } from './services/account.service';
import { BRA_BranchProvider, HRM_PolicyPaidTimeOffGrantsByLengthOfServicesProvider, SYS_UserSettingProvider } from './services/static/services.service';
import { environment } from 'src/environments/environment';
import { lib } from './services/static/global-functions';

let ga: any;

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild('search') search: any;
	appTheme = 'ikachi-theme';
	isConnectFail = false;
	appMessages = [];
	appVersion = '';
	canGoBack = false;
	showScrollbar = false;
	showAppMenu = true;
	countForm = 0;
	randomImg = './assets/undraw_art_museum_8or4.svg';

	isShowSearch = false;
	queryMenu = '';
	foundMenu = [];

	@ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;

	constructor(
		public router: Router,
		public navCtrl: NavController,
		public menu: MenuController,

		public userSettingProvider: SYS_UserSettingProvider,
		public branchProvider: BRA_BranchProvider,
		public popoverCtrl: PopoverController,
		public env: EnvService,
		public accountService: AccountService,
		public platform: Platform,
		public splashScreen: SplashScreen,
	) {
		if (window.location.host=='thelog.inholdings.vn') {
			this.appTheme = 'ikachi-theme'
		} else if (window.location.host.indexOf('inholdings')>-1) {
			this.appTheme = 'ikachi-theme'
		}

		this.appVersion = 'Version: ' + this.env.version;
		let imgs = [
			'./assets/undraw_art_museum_8or4.svg',
			'./assets/undraw_best_place_r685.svg',
			'./assets/undraw_road_sign_mfpo.svg',
			'./assets/undraw_street_food_hm5i.svg',
			'./assets/undraw_empty.svg',
			'./assets/undraw_Container_ship_urt4.svg'
		]
		let r = Math.floor((Math.random() * imgs.length));
		this.randomImg = imgs[r];

		this.initializeApp();

		this.env.getEvents().subscribe((data) => {
			switch (data.Code) {
				case 'app:ForceUpdate':
					this.isConnectFail = true;
					this.openAppStore();
					break;
				case 'app:ConnectFail':
					this.isConnectFail = true;
					break;
				case 'app:ShowAppMessage':
					this.appMessageManage(data);
					break;
				case 'app:ShowMenu':
					this.showAppMenu = data.Value;
					break;
				case 'app:logout':
					accountService.logout().then(_ => {
						this.router.navigateByUrl('/login');
						this.env.showMessage('Bạn đã thoát khỏi hệ thống', 'danger');
						setTimeout(() => {
							location.reload();
						}, 1000);
					});
					break;
				case 'app:silentlogout':
					accountService.logout().then(_ => {
						this.router.navigateByUrl('/login');
					});
					break;
				case 'app:updatedUser':
					this.countForm = 0;

					if (this.env.user && this.env.user.Id && this.env.user.Forms.length) {
						this.countForm = this.env.user.Forms.filter(d => d.Type == 1).length;
						this.loadPinnedMenu();
						this.updateStatusbar();
					}
					break;
				default:
					if (this.env.version == 'dev') {
						this.appMessageManage({ IsShow: true, Id: 'event', Icon: 'checkmark-outline', IsBlink: false, Color: 'success', Message: data.Code });
						setTimeout(() => {
							this.appMessageManage({ IsShow: false, Id: 'event' });
						}, 2000);
					}
					break;
			}
		});

		this.router.events.subscribe((event: any) => {
			if (ga && event instanceof NavigationEnd) {
				ga('set', 'page', 'test/' + event.urlAfterRedirects);
				ga('send', 'pageview');
				//console.log(event.urlAfterRedirects);
			}

			// if (event) {
			//   //console.log(event);

			//   // (<any>window).ga('set', 'page', event.urlAfterRedirects);
			//   // (<any>window).ga('send', 'pageview');
			// }
		});
	}

	pinnedForms = [];
	loadPinnedMenu() {
		let pinned = this.env.user.UserSetting.PinnedForms.Value;
		if (pinned) {
			this.env.user.Forms.forEach(i => {
				i.isPinned = pinned.includes(i.Id) && i.Type == 1;
			});
		}

		this.pinnedForms = this.env.user.Forms.filter(d => d.isPinned);
	}

	menuPin(form, event) {
		event.preventDefault();
		event.stopPropagation();
		form.isPinned = !form.isPinned;

		let pinned = this.env.user.Forms.filter(d => d.isPinned).map(i => i.Id);
		this.env.user.UserSetting.PinnedForms.Value = JSON.stringify(pinned);
		this.userSettingProvider.save(this.env.user.UserSetting.PinnedForms).then((response: any) => {
			if (!this.env.user.UserSetting.PinnedForms.Id) {
				this.env.user.UserSetting.PinnedForms.Id = response.Id;
			}
			this.env.setStorage('UserProfile', this.env.user);
			this.loadPinnedMenu();
		});
	}

	updateStatusbar() {
		if (Capacitor.isPluginAvailable('StatusBar')) {
			StatusBar.setBackgroundColor({ color: (this.env.user && this.env.user.userSetting && this.env.user.UserSetting.IsDarkTheme.Value) ? '#3b4576' : '#b7322a' });
			StatusBar.setStyle({ style: (this.env.user && this.env.user.userSetting && this.env.user.UserSetting.IsDarkTheme.Value) ? Style.Dark : Style.Dark });
			StatusBar.setBackgroundColor({ color: (this.env.user && this.env.user.userSetting && this.env.user.UserSetting.IsDarkTheme.Value) ? '#3b4576' : '#b7322a' });
			StatusBar.setOverlaysWebView({ overlay: false });
		}
	}

	ngOnInit() {
		console.log('AppComponent ngOnInit');
		this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();

		// const path = window.location.pathname.split('folder/')[1];
		// if (path !== undefined) {
		//     this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
		// }

	}

	initializeApp() {
		this.platform.ready().then(() => {
			//console.log('initializeApp', this.env.user);

			this.showScrollbar = environment.showScrollbar;

			this.updateStatusbar();
			this.splashScreen.hide();

			if (this.platform.is('cordova')) {
				// make your native API calls
			} else {
				// fallback to browser APIs
			}
		});
	}

	toogleMenu() {
		this.showAppMenu = !this.showAppMenu;
	}

	toogleMenuGroup(f) {
		f.isShowDetail = !f.isShowDetail;
		this.env.user.Forms.filter(g => f.Id == g.IDParent).forEach(i => {
			i.isShowDetail = f.isShowDetail;
			
			this.env.user.Forms.filter(m => m.IDParent == i.Id).forEach(l => {
				l.isShowDetail = f.isShowDetail;
				if(i.isShowForm == undefined){
					l.isShowForm = true;
				}
			});

			if(i.isShowForm == undefined){
				i.isShowForm = true;
			}
			
		})
	}
	toogleMenuForm(f) {
		f.isShowForm = !f.isShowForm;
		this.env.user.Forms.filter(m => m.IDParent == f.Id).forEach(l => {
			l.isShowForm = f.isShowForm
		});
	}

	goToPage(path, event, direction = 'root') {
		event.preventDefault();
		event.stopPropagation();

		this.menu.close();
		//this.router.navigateByUrl(path);
		if (direction == 'root') {
			this.navCtrl.navigateRoot(path);
		}
		else if (direction == 'forward') {
			this.navCtrl.navigateForward(path);
		}

	}

	logout() {
		event.preventDefault();
		event.stopPropagation();
		this.menu.close();
		this.env.publishEvent({ Code: 'app:logout' });
	}

	logo = '';
	async changeBranch() {
		await this.env.changeBranch();
		let sb = this.env.branchList.find(d=>d.Id==this.env.selectedBranch);

		if (sb.LogoURL) {
			this.logo = sb.LogoURL;
		}
		else {
			this.logo = 'assets/logos/logo-in-holdings.png';
		}
		this.logo = 'assets/logos/logo-ikachi.png'
		console.log(this.logo);
		console.log(this.env.selectedBranch);
	}

	appMessageManage(message) {
		if (message.IsShow) {
			this.appMessages.push(message);
		}
		else {
			let ms = this.appMessages.filter(e => e.Id == message.Id);
			ms.forEach(f => this.appMessages.splice(this.appMessages.findIndex(e => e.Id == f.Id), 1));
		}
	}

	openAppStore() {
		console.log('openAppStore');
		if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
			window.location.href = 'https://play.google.com/store/apps/details?id=vn.codeart.art.dms&hl=vn';
		}
		if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
			window.location.href = 'http://itunes.apple.com/lb/app/art-dms/id1540404648?mt=8';
		}
	}

	searchMenu(ev) {
		var val = ev.target.value;
		if (val == undefined) {
			val = '';
		}
		if (val.length > 1) {
			this.queryMenu = val;
			this.foundMenu = lib.searchTree(this.env.user.Forms, this.queryMenu);
		}
	}

	focusSearch(): void {
		setTimeout(() => {
			this.search.setFocus();
		}, 300);
	}


}