import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { lib } from 'src/app/services/static/global-functions';
import { HRM_StaffProvider, SYS_StatusProvider } from 'src/app/services/static/services.service';
import { concat, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { IkachiService } from 'src/app/services/ikachi.service';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {
    popConfig = null;
    _popConfig = {
        type: '',

        BranchesSelectLabel: 'Chi nhánh',
        isShowBranchesSelect: false,

        singleDateLabel: 'Ngày',
        isShowSingleDate: false,

        dateRangeLabel: 'Ngày',
        isShowDateRange: false,

        staffSelectLabel: 'Nhân sự',
        isShowStaffSelect: false,

        AppoinmentStatusSelectLabel: 'Tình trạng lịch hẹn',
        isShowAppoinmentStatusSelect: false,

        

        submitButtonLabel: 'Lọc dữ liệu'
    };

    popData: any = {
        singleDate: null,
    }

    today = lib.dateFormat(new Date, 'hh:MM dd/mm/yyyy');
    isShowFromToDate = false;
    saleOrderStatusList = [];
    appoinmentStatusList = [];
    branchesList = [];

    constructor(
        public staffProvider: HRM_StaffProvider,
        public statusProvider: SYS_StatusProvider,
        public ikachiService: IkachiService,

        public env: EnvService,
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
    ) {
    }

    ngOnInit() {
        this.popConfig = Object.assign(this._popConfig, this.popConfig);
        if (this.popConfig.isShowSaleOrderStatusSelect) {
            this.initSaleOrderStatus();
        }

        if (this.popConfig.isShowAppoinmentStatusSelect) {
            this.initAppoinmentStatus();
        }

        if (this.popConfig.isShowStaffSelect) {
            this.staffSearch();
        }

        if (this.popConfig.isShowBranchesSelect) {
            this.initBranchesList();
        }

    }

    initSaleOrderStatus() {
        this.statusProvider.read({ IDParent: 1 }).then(response => {
            this.saleOrderStatusList = response['data'];
            this.saleOrderStatusList.unshift({Id:'[101,102,103,104,110]', Name:'Chưa giao', Color:'primary'});
            this.saleOrderStatusList.unshift({Id:'[104,113]', Name:'Đơn chờ phân tài', Color:'success'});
            this.saleOrderStatusList.unshift({Id:'[103,110]', Name:'Đơn chờ duyệt', Color:'warning'});
            this.saleOrderStatusList.unshift({Id:'', Name:'Tất cả', Color:'primary'});
        });
    }

    initAppoinmentStatus() {
        this.ikachiService.getAppointmentStatusList().subscribe((data:any) => {
            this.appoinmentStatusList = data;
        });
    }

    initBranchesList() {
        this.ikachiService.getBranchesList().subscribe((data:any) => {
            this.branchesList = data;
            this.toogleBranchDataset(this.popData.selectedBTNBranch);
        });
    }

    changeDateFillter(type) {
        this.popData.selectedBTNDate = type;

        let toDay = new Date();

        let yesterday = new Date(toDay);
        yesterday.setDate(yesterday.getDate() - 1);

        if (type == 'today') {
            this.popData.fromDate = lib.dateFormat(toDay, 'yyyy-mm-dd');
            this.popData.toDate = lib.dateFormat(toDay, 'yyyy-mm-dd');
        }
        else if (type == 'yesterday') {
            this.popData.fromDate = lib.dateFormat(yesterday, 'yyyy-mm-dd');
            this.popData.toDate = lib.dateFormat(yesterday, 'yyyy-mm-dd');
        }
        else if (type == 'thisWeek') {
            let weekDates = lib.getWeekDates(toDay);
            this.popData.fromDate = lib.dateFormat(weekDates[0], 'yyyy-mm-dd');
            this.popData.toDate = lib.dateFormat(weekDates[6], 'yyyy-mm-dd');
        }
        else if (type == 'thisMonth') {
            var first = new Date(toDay.getFullYear(), toDay.getMonth(), 1);
            var lastday = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
            this.popData.fromDate = lib.dateFormat(first, 'yyyy-mm-dd');
            this.popData.toDate = lib.dateFormat(lastday, 'yyyy-mm-dd');
        }
        else if (type == 'setdone') {
            this.popConfig.type = 'set';
        }
    }

    toogleBranchDataset(b) {
        b.IsSelected = false;
        this.popData.BranchID = b.ID;
        this.popData.selectedBTNBranch = b;
    
        this.branchesList.forEach((element, index) => {
          if (element.ID == b.ID) {this.branchesList[index].IsSelected = true;}
          else {this.branchesList[index].IsSelected = false;}
        });
    }


    command(returnData) {
        if (this.popConfig.isShowSaleOrderStatusSelect) {
            let selectedStatus = this.saleOrderStatusList.find(e => e.Id == this.popData.IDSaleOrderStatus);
            this.popData.selectedStatus = selectedStatus;
        }
        if (this.popConfig.isShowAppoinmentStatusSelect) {
            let selectedStatus = this.appoinmentStatusList.find(e => e.Id == this.popData.IDAppointmentStatus);
            this.popData.selectedStatus = selectedStatus;
        }
        if (this.popConfig.isShowBranchesSelect) {
            let selectedBranch = this.branchesList.find(e => e.ID == this.popData.BranchID);
            this.popData.selectedBTNBranch = selectedBranch;
        }

        this.popoverCtrl.dismiss(returnData);
    }


    staffList$
    staffListLoading = false;
    staffListInput$ = new Subject<string>();
    staffListSelected = [];
    staffSelected = null;
    staffSearch() {
        this.staffListLoading = false;
        this.staffList$ = concat(
            of(this.staffListSelected),
            this.staffListInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.staffListLoading = true),
                switchMap(term => this.staffProvider.search({ Take: 20, Skip: 0, IDDepartment: this.env.selectedBranchAndChildren, Term: term }).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.staffListLoading = false)
                ))
            )
        );
    }

}
