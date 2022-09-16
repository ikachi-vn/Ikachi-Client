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
    selector: 'app-scheduler-generator',
    templateUrl: './scheduler-generator.page.html',
    styleUrls: ['./scheduler-generator.page.scss'],
})
export class SchedulerGeneratorPage extends PageBase {

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

        let firstDateInWeek = new Date();
        firstDateInWeek.setDate(firstDateInWeek.getDate() - firstDateInWeek.getDay() + 7);
        let firstDate = lib.dateFormat(firstDateInWeek);

        this.formGroup = formBuilder.group({
            FromDate: [firstDate, Validators.required],
            ToDate: ['', Validators.required],
            SelectedDate: ['', Validators.required],
            IDShift: ['', Validators.required],
            IsOpenShift: [false],
            IsAllStaff: [true],
            SelectedStaff: [''],
        });
    }

    shiftList = [];
    staffList = [];
    preLoadData(event?: any): void {
        this.staffList = JSON.parse(JSON.stringify(this.navParams.data.staffList));
        this.shiftList = this.navParams.data.shiftList;
        
        if(this.navParams.data.FromDate){
            this.formGroup.controls.FromDate.setValue(this.navParams.data.FromDate);
            this.formGroup.controls.ToDate.setValue(this.navParams.data.ToDate);
            this.formGroup.controls.SelectedDate.setValue(this.navParams.data.SelectedDate);
            
        }
        if(this.navParams.data.IDShift){
            this.formGroup.controls.IDShift.setValue(this.navParams.data.IDShift);
        }

        if(this.navParams.data.SelectedStaff){
            this.formGroup.controls.IsAllStaff.setValue(this.navParams.data.IsAllStaff);
            this.formGroup.controls.IsOpenShift.setValue(this.navParams.data.IsOpenShift);
            this.formGroup.controls.SelectedStaff.setValue(this.navParams.data.SelectedStaff);
        }

        this.loadedData(event);
        
    }

    loadedData(event?: any, ignoredFromGroup?: boolean): void {
        super.loadedData();
        setTimeout(() => {
           
        }, 0);
        
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

    // changeDate(){
    //     this.dayList = lib.getStartEndDates(this.formGroup.controls.FromDate.value, this.formGroup.controls.ToDate.value);
    //     this.dayList.forEach(d=>{
    //         d.Text=''+lib.dateFormat(d.Date,'weekday') +'-'+ lib.dateFormat(d.Date, 'dd/mm') +'' ;
    //     })
    // }


    dayList = [
        { Group: 1, Day: 'Sun', Value: 0 },
        { Group: 1, Day: 'Mon', Value: 1 },
        { Group: 1, Day: 'Tue', Value: 2 },
        { Group: 1, Day: 'Wed', Value: 3 },
        { Group: 1, Day: 'Thu', Value: 4 },
        { Group: 1, Day: 'Fri', Value: 5 },
        { Group: 1, Day: 'Sat', Value: 6 }];
}



