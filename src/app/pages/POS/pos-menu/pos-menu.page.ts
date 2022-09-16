import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { POS_MenuDetailProvider, POS_MenuProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-pos-menu',
    templateUrl: 'pos-menu.page.html',
    styleUrls: ['pos-menu.page.scss']
})
export class POSMenuPage extends PageBase {
    constructor(
        public pageProvider: POS_MenuProvider,
        public branchProvider: POS_MenuDetailProvider,
        public modalController: ModalController,
        public alertCtrl: AlertController,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public location: Location,
    ) {
        super();
    }

}
