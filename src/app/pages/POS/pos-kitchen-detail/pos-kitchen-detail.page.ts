import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { POS_KitchenProvider,   } from 'src/app/services/static/services.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/services/core/common.service';

@Component({
    selector: 'app-pos-kitchen-detail',
    templateUrl: './pos-kitchen-detail.page.html',
    styleUrls: ['./pos-kitchen-detail.page.scss'],
})
export class POSKitchenDetailPage extends PageBase {
    IDPrinterList = [];
    constructor(
        public pageProvider: POS_KitchenProvider,
        // public printerProvider: SYS_PrinterProvider,
        public env: EnvService,
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,
        public loadingController: LoadingController,
        public commonService: CommonService,
    ) {
        super();
        this.pageConfig.isDetailPage = true;

        this.formGroup = formBuilder.group({
            IDBranch: [this.env.selectedBranch],
            Id: new FormControl({ value: '', disabled: true }),
            Code: [''],
            Name: ['', Validators.required],
            Remark: [''],
            IDPrinter: [''],
        });
    }

    preLoadData(event?: any): void {
        // this.printerProvider.read().then(resp=>{
        //     this.IDPrinterList = resp['data'];
        //     super.preLoadData(event);
        // });
    }

    segmentView = 's1';
    segmentChanged(ev: any) {
        this.segmentView = ev.detail.value;
    }

    async saveChange() {
        super.saveChange2();
    }
}
