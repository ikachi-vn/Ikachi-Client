import { Injectable } from '@angular/core';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Network } from '@ionic-native/network/ngx';
import * as signalR from '@microsoft/signalr';
import { lib } from '../static/global-functions';
import { platform } from 'os';

@Injectable({
    providedIn: 'root'
})
export class EnvService {
    version = environment.appVersion;
    user: any = {};
    isloaded = false;
    branchList = [];
    selectedBranch = null;
    selectedBranchAndChildren = null;
    statusList = [];
    typeList = [];

    isMobile = false;
    isOnline = false;
    isMapLoaded = false;
    networkInfo = {
        IsOnline: false
    }


    public EventTracking = new Subject<any>();

    constructor(
        public network: Network,
        public plt: Platform,
        public storage: Storage,
        public toastController: ToastController,
        public alertCtrl: AlertController,
    ) {
        this.isMobile = this.plt.is('mobile');
        this.init();
    }

    private _storage: Storage | null = null;
    async init() {
        // If using, define drivers here: await this.storage.defineDriver(/*...*/);
        const storage = await this.storage.create();
        this._storage = storage;

        this.network.onDisconnect().subscribe(() => {
            this.networkInfo.IsOnline = false;
            this.isOnline = false;
            console.log('network was disconnected :-(');
        });
        this.network.onConnect().subscribe(() => {
            this.networkInfo.IsOnline = true;
            this.isOnline = true;
            console.log('network was connected :-)');
        });
        this.trackOnline().subscribe(isOnline => {
            this.isOnline = isOnline;
        });

        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(environment.signalRServiceDomain + 'notify')
            .withAutomaticReconnect()
            .build();

        connection.start().then(function () {
            console.log('SignalR Connected!');
        }).catch(function (err) {
            return console.error(err.toString());
        });

        connection.on("BroadcastMessage", (e) => {
            console.log('BroadcastMessage', e);
            //this.publishEvent({})

            if (e.code == 'SystemAlert') {
                this.showAlert(e.value, null, e.name);
            }
            else if (e.code == 'SystemMessage') {
                this.showMessage(e.value, e.name);
            }
            else if (e.code == 'AppReload') {
                location.reload();
            }
            else if (e.code == 'AppReloadOldVersion') {
                if (e.value.localeCompare(this.version) > 0) {
                    location.reload();
                }
            }



        });
        connection.on("SendMessage", (user, message) => {
            console.log('SendMessage', user, message);
            //this.publishEvent({})
        });
        connection.on("SaleOrdersUpdated", (IDBranch, Ids) => {
            console.log('SaleOrdersUpdated', IDBranch, Ids);
            this.publishEvent({ Code: 'sale-order-mobile' });
        });



    }

    printOut() {
        //console.log(this.user);
    }

    forceLoadUserData() {
        return new Promise(resolve => {

        });
    }

    publishEvent(data: any) {
        this.EventTracking.next(data);
    }

    getEvents(): Subject<any> {
        return this.EventTracking;
    }

    trackOnline() {
        return merge<boolean>(
            fromEvent(window, 'offline').pipe(map(() => false)),
            fromEvent(window, 'online').pipe(map(() => true)),
            new Observable((sub: Observer<boolean>) => {
                sub.next(navigator.onLine);
                sub.complete();
            }));
    }

    showMessage(message, color = '', duration = 5000, showCloseButton = false) {

        if (!showCloseButton) {
            this.toastController.create({
                message: message,
                color: color,
                duration: duration,
                buttons: [showCloseButton ? { text: 'Close', role: 'close' } : {}]
            }).then(toast => {
                toast.present();
            });
        }
        else {
            this.alertCtrl.create({
                //header: 'DMS',
                //subHeader: '---',
                message: message,
                buttons: [
                    // {
                    //     text: 'Không',
                    //     role: 'cancel',
                    //     handler: () => {
                    //         //console.log('Không xóa');
                    //     }
                    // },
                    {
                        text: 'OK',
                        cssClass: 'danger-btn',
                        handler: () => { }
                    }
                ]
            }).then(alert => {
                alert.present();
            })
        }


    }

    showAlert(message, subHeader = null, header = null, okText = 'OK') {
        let option: any = {
            header: header,
            subHeader: subHeader,
            message: message,
            buttons: [
                {
                    text: okText,
                    cssClass: 'danger-btn',
                    handler: () => { }
                }
            ]
        };

        this.alertCtrl.create(option).then(alert => {
            alert.present();
        })
    }

    showPrompt(message, subHeader = null, header = null, okText = 'Đồng ý', cancelText = 'Không', inputs = null) {
        return new Promise((resolve, reject) => {

            let option: any = {
                header: header,
                subHeader: subHeader,
                message: message,
                inputs: inputs,
                buttons: [
                    {
                        text: cancelText, role: 'cancel',
                        handler: () => {
                            reject(false);
                        }
                    },
                    {
                        text: okText,
                        cssClass: 'danger-btn',
                        handler: (alertData) => {
                            resolve(alertData);
                        }
                    }
                ]
            };


            this.alertCtrl.create(option).then(alert => {
                alert.present();
            })
        });
    }

    getStorage(key) {
        return this._storage?.get(key);
    }

    setStorage(key: string, value: any) {
        return this._storage?.set(key, value);
    }

    clearStorage() {
        return this._storage?.clear();
    }

    loadBranch() {
        return new Promise((resolve) => {
            lib.buildFlatTree(this.branchList, [], true).then((resp: any) => {
                this.branchList = [];
                resp.forEach(i => {
                    let prefix = '';
                    for (let j = 1; j < i.level; j++) {
                        prefix += '- '
                    }
                    i.NameText = prefix + (i.ShortName ? i.ShortName : i.Name);
                    if (i.IDType != 119) {
                        this.branchList.push(i);
                    }
                });

                this.branchList.forEach(i => {
                    i.IDs = [null];
                    this.getChildrenDepartmentID(i.IDs, i.Id);
                });

                this.branchList.forEach(i => {
                    i.Query = JSON.stringify(i.IDs);
                    i.disabled = true;
                });

                this.getStorage('selectedBranch').then(val => {
                    let selected = null;

                    if (val) {
                        selected = this.branchList.find(d => d.Id == val);
                    }
                    if (!selected) {
                        selected = this.branchList.find(d => d.Id == this.user.IDBranch);
                    }

                    if (selected) {
                        this.selectedBranch = selected.Id;
                        this.selectedBranchAndChildren = selected.Query;
                    }
                    else {
                        this.selectedBranch = 0;
                        this.selectedBranchAndChildren = [0];
                    }

                    if (this.user) {
                        this.user.Branchs.forEach(b => {
                            this.enablePermissionNode(b);
                        });
                    }
                    resolve(true);
                    //this.changeBranch();
                });
            });
        });
    }

    changeBranch() {
        this.setStorage('selectedBranch', this.selectedBranch);
        let selectedBranch = this.branchList.find(d => d.Id == this.selectedBranch);
        this.selectedBranchAndChildren = selectedBranch.Query;
        this.publishEvent({ Code: 'changeBranch' });
    }

    getStatus(Code: string) {
        return new Promise((resolve) => {
            let it = this.statusList.find(d => d.Code == Code);
            if (it)
                resolve(this.statusList.filter(d => d.IDParent == it.Id));
            else
                resolve([]);
        });
    }
    getType(Code: string): Promise<any[]> {
        return new Promise((resolve) => {
            let it = this.typeList.find(d => d.Code == Code);
            if (it)
                resolve(this.typeList.filter(d => d.IDParent == it.Id));
            else
                resolve([]);
        });
    }

    private enablePermissionNode(id) {
        let currentItem = this.branchList.find(i => i.Id == id);
        if (currentItem) {
            currentItem.disabled = false;
            lib.markNestedNode(this.branchList, id, 'disabled', true);
        }
    }

    private getChildrenDepartmentID(ids, id) {
        ids.push(id);
        let children = this.branchList.filter(i => i.IDParent == id);
        children.forEach(i => {
            this.getChildrenDepartmentID(ids, i.Id);
        })
    }


}

