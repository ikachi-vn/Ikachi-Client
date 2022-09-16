import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { PROD_MRPProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';
import { lib } from 'src/app/services/static/global-functions';

@Component({
    selector: 'app-order-recommendation',
    templateUrl: 'order-recommendation.page.html',
    styleUrls: ['order-recommendation.page.scss']
})
export class OrderRecommendationPage extends PageBase {
    constructor(
        public pageProvider: PROD_MRPProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
    ) {
        super();
    }

    selectedCount = 0
    loadedData(event?: any): void {
        let ors = [...new Set(this.items.map(s => s.Id))];
        ors.forEach(i => {
            let or = this.items.find(d => d.Id == i && d.ItemId);
            let subs = this.items.filter(d => d.Id == i && !d.ItemId);

            if (or.PreferVendor && subs.length) {
                let v = subs.find(d => d.VendorId == or.PreferVendor);
                if (v) v.checked = true;
            }
        });

        this.items.forEach(i => {
            i.DueDateText = lib.dateFormat(i.DueDate, 'dd/mm/yy');
            i.PriceText = lib.currencyFormat(i.Price);
        });
        this.selectedCount = this.items.filter(d => d.checked).length; 
        super.loadedData(event);
    }

    changeVendor(i) {
        let checked = i.checked;
        this.item = this.items.find(d => d.Id == i.Id && d.ItemId);
        this.item.IDPreferVendor = checked ? i.VendorId : null;

        this.pageProvider.save(this.item).then(() => {
            let subs = this.items.filter(d => d.Id == i.Id && !d.ItemId);
            subs.forEach(s => {
                s.checked = false;
            });
            i.checked = checked;

            this.env.showMessage(`Đã chọn NCC ${i.VendorName}!`, 'success');
            this.selectedCount = this.items.filter(d => d.checked).length;
        })
    }


    createPO() {

    }

    async suggestVendors() {
        let ors = [...new Set(this.items.map(s => s.Id))];
        ors.forEach(i => {
            let or = this.items.find(d => d.Id == i && d.ItemId);
            let subs = this.items.filter(d => d.Id == i && !d.ItemId);
            

            let v = null;

            if (or.PreferVendor && subs.length) {
                v = subs.find(d => d.VendorId == or.PreferVendor);
                if (v) v.checked = true;
            }

            if (!v && subs.length > 1) {
                v = subs.reduce((prev, curr) => { return prev.Cost < curr.Cost ? prev : curr });
            }

            if (!v && subs.length) {
                v = subs[0];
            }

            if (v) {
                v.checked = true;
            }
        });
        this.selectedCount = this.items.filter(d => d.checked).length;
    }

}
