import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, CRM_RouteProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';
import { ApiSetting } from 'src/app/services/static/api-setting';



@Component({
    selector: 'app-mcp',
    templateUrl: 'mcp.page.html',
    styleUrls: ['mcp.page.scss']
})
export class MCPPage extends PageBase {
    branchList = [];

    constructor(
        public pageProvider: CRM_RouteProvider,
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

    loadData(event){
        this.pageProvider.apiPath.getList.url = function(){return ApiSetting.apiDomain("CRM/Route/List")};
        super.loadData(event);
    }
    
}
