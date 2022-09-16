import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { IkachiService } from 'src/app/services/ikachi.service';
import { ReportService } from 'src/app/services/report.service';
import { lib } from 'src/app/services/static/global-functions';
import { ReviewPdfPage } from '../review-pdf/review-pdf.page';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss'],
})
export class RequestsPage extends PageBase {

  ApprovedBy = 'Peter'; //Need Code For Logged In Account Later.

  constructor(
    public pageProvider: IkachiService,
    public modalController: ModalController,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public env: EnvService,
    public navCtrl: NavController,
    public rpt: ReportService,
    public ikachiService: IkachiService
  ) {
    super();
    this.ikachiService.getBranchesList().toPromise().then((resp:any) => {
      this.pageBranch = resp;
      this.toogleBranchDataset(this.selectedBTNBranch);
    });
  }

  fromDate = "2022-06-01";
  toDate = "2022-06-30";
  selectedBranchID = 2;
  selectedBTNBranch = {ID: 2, Code: 'HYEC'}; //default
  listItems = [];
  pageBranch = [];
  statusCode = null;;

  toogleBranchDataset(b) {
    b.IsSelected = false;
    this.selectedBranchID = b.ID;

    this.pageBranch.forEach((element, index) => {
      if (element.ID == b.ID) {this.pageBranch[index].IsSelected = true;}
      else {this.pageBranch[index].IsSelected = false;}
    });

    this.preLoadData(null);
  }

  statusList = [
    {
      Id: 0,
      Name: 'Đang chờ',
      Color: ''
    },
    {
      Id: 1,
      Name: 'Chờ duyệt',
      Color: 'warning'
    },
    {
      Id: 2,
      Name: 'Đã duyệt',
      Color:  'success'
    },
    {
      Id: 3,
      Name: 'Từ chối',
      Color: 'danger'
    },
    {
      Id: 4,
      Name: 'Duyệt lỗi',
      Color: 'danger'
    },
  ]

  // ActionTypeList = [
  //   {
  //    Id: 0,
  //    Name: 'Reject' 
  //   },
  //   {
  //    Id: 1,
  //    Name: 'Approve' 
  //   },
  //   {
  //    Id: 2,
  //    Name: 'Delete' 
  //   },
  // ]

  preLoadData(event) {
    this.fromDate = this.rpt.rptGlobal.query.fromDate;
    this.toDate = this.rpt.rptGlobal.query.toDate + ' 23:59:59';
    super.preLoadData(event);
  }

  loadData(event) {
    this.ikachiService.getApprovalList().toPromise().then(data =>{
      this.items = data;
      super.loadData(event);
    });
  }

  loadedData(event) {
    this.items.forEach(e => {
      e.RequestDateText = lib.dateFormat(e.RequestDate, 'yyyy-mm-dd');
      e.RequestDateTime = lib.dateFormat(e.RequestDate, 'hh:MM');
      e.ApprovalStatus = this.statusList.find(st => st.Id == e.Status);
    });
    super.loadedData(event);
  }

  showDetail(item: any) {
    item.isShowDetail = !item.isShowDetail;
  }
  
  changeStatus(i, val) {
    let newStatus = this.statusList.find(d => d.Id == val);
    let temp = this.env.user.Email;
    let approvedBy = temp.split('@')[0];
    let actionType;

    i.Status = newStatus.Id;
    i.isShowDetail = false;
    i.ApprovalStatus = newStatus;
    i.ApprovedBy = approvedBy;
    i.ApprovedDate = lib.dateFormat(new Date(), 'yyyy-mm-dd') + ' ' + lib.dateFormat(new Date(), 'hh:MM:ss');

    if (i.ApprovalStatus.Id == 3) {
      actionType = 0;

      this.ikachiService.updateApproval(i).toPromise().then((savedData: any) => {
        savedData;

        this.env.showMessage('Thực hiện xong!', 'success');
      }).catch(err => {
        this.env.showMessage(err, 'danger');
        console.log(err);
      });
    }
    else if (i.ApprovalStatus.Id == 2) {
      actionType = 1;

      this.ikachiService.IkachiApprovalProcess(i.ID, actionType, approvedBy, i.ApprovedNote).then((returnData: any) => {
        let returnActionLog = returnData.data[0].ErrorDescription;
        i.ActionLog = returnActionLog;
        this.ikachiService.updateApproval(i).toPromise().then((savedData: any) => {
          savedData;

          this.env.showMessage('Thực hiện xong!', 'success');
        }).catch(err => {
          this.env.showMessage(err, 'danger');
          console.log(err);
        });
      }).catch(err => {
        this.env.showMessage(err, 'danger');

        let newStatus = this.statusList.find(d => d.Id == 4);
        i.Status = newStatus.Id;
        i.ApprovalStatus = newStatus;

        this.ikachiService.updateApproval(i).toPromise().then((savedData: any) => {
          savedData;
        });
      });
    }
  }

  async OpenPDF(i) {
    const modal = await this.modalController.create({
      component: ReviewPdfPage,
      cssClass: 'review-pdf-class',
      componentProps: {
        pdfLink: i.FileLink,
        reviewNumber: i.ID,
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.approved == true) {
      let newStatus = this.statusList.find(d => d.Id == 2);

      let temp = this.env.user.Email;
      let approvedBy = temp.split('@')[0];

      i.Status = newStatus.Id;
      i.ApprovalStatus = newStatus;
      i.ApprovedBy = approvedBy;
      i.ApprovedDate = lib.dateFormat(new Date(), 'yyyy-mm-dd') + ' ' + lib.dateFormat(new Date(), 'hh:MM:ss');

      let actionType;
      if (i.ApprovalStatus.Id == 3) {
        actionType = 0;
      }
      else if (i.ApprovalStatus.Id == 2) {
        actionType = 1;
      }
      else if (i.ApprovalStatus.Id == 4) {
        actionType = 2;
      }

      this.ikachiService.IkachiApprovalProcess(i.ID, actionType, approvedBy, i.ApprovedNote).then((returnActionLog: any) => {
        i.ActionLog = returnActionLog;
        this.ikachiService.updateApproval(i).toPromise().then((savedData:any) => {
          savedData;
          this.env.showMessage('Đã lưu xong!', 'success');
        }).catch(err => {
          this.env.showMessage('Không lưu được, xin vui lòng thử lại.', 'danger');
          console.log(err);
        });
      });
    };
  }

  refresh() {
    this.preLoadData(null);
  }

  changeDateFilter(type) {
    this.rpt.dateQuery(type).then((_) => {
        this.preLoadData(null);
      })
      .catch((err) => {
        let a = err;
      });
  }
}
