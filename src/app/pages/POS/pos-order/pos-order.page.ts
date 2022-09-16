import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { POS_BillTableProvider, POS_MenuProvider, POS_TableGroupProvider, POS_TableProvider, SALE_OrderProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-pos-order',
    templateUrl: 'pos-order.page.html',
    styleUrls: ['pos-order.page.scss']
})
export class POSOrderPage extends PageBase {
    tableGroupList = [];
    tableList = [];

    segmentView = 'all';


    constructor(
        public pageProvider: SALE_OrderProvider,
        public tableGroupProvider: POS_TableGroupProvider,
        public tableProvider: POS_TableProvider,
        public menuProvider: POS_MenuProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
    ) {
        super();
        this.pageConfig.isShowFeature = true;
    }

    preLoadData(event?: any): void {
        this.query.IDType = 293;
        this.query.IDBranch = this.env.selectedBranch;
        if (!this.sort.Id) {
            this.sort.Id = 'Id';
            this.sortToggle('Id', true);
        }
        
        Promise.all([
            this.tableGroupProvider.read({IDBranch: this.env.selectedBranch}),
            this.tableProvider.read({IDBranch: this.env.selectedBranch, Take: 5000}),
        ]).then(values => {
            this.tableGroupList = values[0]['data'];
            this.tableList = values[1]['data'];
            this.tableGroupList.forEach(g => {
                g.TableList = this.tableList.filter(d => d.IDTableGroup == g.Id);
            });
            this.env.setStorage('tableGroup' + this.env.selectedBranch, this.tableGroupList);
        });

        this.menuProvider.read().then(data => {
            this.env.setStorage('menuList' + this.env.selectedBranch, data['data']);
        });

        super.preLoadData(event);
    }

    loadedData(event?: any, ignoredFromGroup?: boolean): void {
        let statusList = [
            {Id: 101, Code:'new', Name: 'Mới'},
            {Id: 106, Code:'picking', Name: 'Đang lên món'},
            {Id: 109, Code:'delivered', Name: 'Đã giao'},
            {Id: 114, Code:'done', Name: 'Đã xong'},
            {Id: 115, Code:'cancelled', Name: 'Đã hủy'}
        ];

        this.items.forEach(o => {
            o._Tables = [];
            if(!o.Tables) o.Tables = [];
            o.Tables.forEach(t => {
                let i = null;
                this.tableGroupList.some(g => {
                    g.TableList.some(gt => {
                        if (gt.Id == t) {
                            i = gt;
                            return true;
                        }
                    });
                    if (i) return true;
                });
                if(i){
                    let checkStatus = [101,106,109];
                    if(checkStatus.indexOf(o.Status.IDStatus) >-1){
                        i.Order = o.Id;
                        i.OrderDate = o.OrderDate;
                        i.Status = o.Status;
                        i.Status.Name = this.getAttrib(i.Status.IDStatus, statusList);
                    }
                    else{
                        i.Order = null;
                        i.OrderDate = null;
                        i.Status = null;
                    }
                    o._Tables.push(i);
                }
            });
        });
        super.loadedData(event, ignoredFromGroup);
    }

    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

}
