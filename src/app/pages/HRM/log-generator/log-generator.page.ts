import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, NavParams } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from 'src/app/services/core/env.service';
import { BRA_BranchProvider, HRM_ShiftProvider, WMS_ZoneProvider, } from 'src/app/services/static/services.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/services/core/common.service';
import { lib } from 'src/app/services/static/global-functions';

@Component({
    selector: 'app-log-generator',
    templateUrl: './log-generator.page.html',
    styleUrls: ['./log-generator.page.scss'],
})
export class LogGeneratorPage extends PageBase {

    constructor(
        public pageProvider: HRM_ShiftProvider,
        public shiftProvider: HRM_ShiftProvider,

        public modalController: ModalController,
        public alertCtrl: AlertController,
        public navParams: NavParams,
        public loadingController: LoadingController,
        public env: EnvService,
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public cdr: ChangeDetectorRef,

    ) {
        super();
        this.pageConfig.isDetailPage = true;

        this.formGroup = formBuilder.group({
            IDStaff: ['', Validators.required],
            Id: [0],
            Remark: [''],
            LogTime: ['', Validators.required],
            IDOffice: ['', Validators.required],
            IDGate: ['', Validators.required],
            Image: [''],
            IPAddress: [''],
            UUID: [''],
            IsValidLog: [true],
            IsOpenLog: [false],
            IsMockLocation: [false],

        });
    }

    staffList = [];
    officeList = [];
    gateList = [];

    preLoadData(event?: any): void {
        this.staffList = JSON.parse(JSON.stringify(this.navParams.data.staffList));
        this.officeList = this.navParams.data.officeList;
        this.gateList = this.navParams.data.gateList;
        this.formGroup.controls.IDStaff.setValue(this.navParams.data.IDStaff);
        this.formGroup.controls.Id.setValue(this.navParams.data.Id);
        this.formGroup.controls.LogTime.setValue(this.navParams.data.LogTime);
        
        super.loadedData();

    }

    gateViewList = [];
    changeOffice(){
        
        this.gateViewList = this.gateList.filter(d=>d.IDOffice == this.formGroup.controls.IDOffice.value);
        this.gateViewList = [...this.gateViewList];
        console.log(this.gateViewList);
    }

    massShiftAssignment() {
        this.formGroup.updateValueAndValidity();
        if (!this.formGroup.valid) {
            this.env.showMessage('Vui lòng kiểm tra lại các thông tin được tô đỏ bên trên.', 'warning');
        }
        else {
            let submitItem = this.formGroup.value;//this.getDirtyValues(this.formGroup);
            this.modalController.dismiss(submitItem);
        }
    }

}



