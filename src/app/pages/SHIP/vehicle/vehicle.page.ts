import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, SHIP_VehicleProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-vehicle',
    templateUrl: 'vehicle.page.html',
    styleUrls: ['vehicle.page.scss']
})
export class VehiclePage extends PageBase {
    constructor(
        public pageProvider: SHIP_VehicleProvider,
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
}
