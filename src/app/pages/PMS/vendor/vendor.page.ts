import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, CRM_ContactProvider } from 'src/app/services/static/services.service';
import { VendorDetailPage } from '../vendor-detail/vendor-detail.page';
import { Location } from '@angular/common';



@Component({
    selector: 'app-vendor',
    templateUrl: 'vendor.page.html',
    styleUrls: ['vendor.page.scss']
})
export class VendorPage extends PageBase {
    branchList = [];

    constructor(
        public pageProvider: CRM_ContactProvider,
        public branchProvider: BRA_BranchProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
    ) {
        super();
        
    }

    preLoadData() {
        this.query.IgnoredBranch = true;
        this.query.IsVendor = true;
        super.preLoadData(null);
    }

    showDetail(i) {
        this.navCtrl.navigateForward('/vendor/' + i.Id);
    }

    async showDetail_(i) {
        const modal = await this.modalController.create({
            component: VendorDetailPage,
            componentProps: {
                branchList: this.branchList,
                item: i,
                id: i.Id
            },
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }

    add() {
        let newVendor = {
            Id: 0,
            IsVendor: true,
        };
        this.showDetail(newVendor);
    }

}
