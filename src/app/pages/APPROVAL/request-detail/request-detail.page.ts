import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage extends PageBase {
  comment;
  constructor(
    // public pageProvider: WMS_PriceListProvider,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public env: EnvService,
    public navCtrl: NavController,

    public formBuilder: FormBuilder,
  ) {
    super();
    this.formGroup = formBuilder.group({
      Id: new FormControl({ value: '155', disabled: true }),
      Name: [''],
      CreatedBy: [''],
      IDType: [''],
      CreatedDate: [''],
      ModifiedDate: [''],
      Remark: [''],
      ReviewedBy: [''], 
      File: [''],

      FullName: [''],
      IDJobTitle: [''],
      IDDepartment: [''],
      IDStatus: [''],
      Code: [''],
      PhoneNumber: [''],
      Email: [''],
      NationalID: [''],
      IssueDate: [''],
      IssueBy: [''],
      Address: [''],
      DOB: [''],
      AmountNo: [''],
      Amount: [''],
      Reason: [''],
      DueDate: [''],


      ReceivedBy: [''],
      ReceivedTask: [''],

      Debator: [''],
      DebatorDepartment: [''],
      CurrentJobTitle: [''],
      DebateJobTitle: [''],

      Item: [''],
      Quantity: [''],

      Participant: [''],
      Requirement: [''],

      StartFrom: [''],
      EndTo: [''],

      ItemStatus: [''],

      CurrentAmount: [''],
      DesireAmount: [''],

      Employee: [''],

      FromDate: [''],
      ToDate: [''],
    });
  }

  typeList = [
    {
      Id: 1,
      Name: "Nghỉ phép"
    },
    {
      Id: 2,
      Name: "Nghỉ không lương"
    },
    {
      Id: 3,
      Name: "Xin nghỉ việc"
    },
    {
      Id: 4,
      Name: "Phiếu đề xuất tăng chức"
    },
    {
      Id: 5,
      Name: "Đề nghị tăng ca"
    },
    {
      Id: 6,
      Name: "Cấp phát thiết bị"
    },
    {
      Id: 7,
      Name: "Đăng ký sử dụng phòng họp"
    },
    {
      Id: 8,
      Name: "Đề nghị sử dụng xe công"
    },
    {
      Id: 9,
      Name: "Sửa chữa trang thiết bị văn phòng"
    },
    {
      Id: 10,
      Name: "Đề nghị tạm ứng"
    },
    {
      Id: 11,
      Name: "Đơn xin tăng lương"
    },
    {
      Id: 12,
      Name: "Đề nghị thanh toán"
    },
    {
      Id: 13,
      Name: "Tiếp nhận thử việc"
    },
  ]
  
  segmentView = 's1';

  async saveChange() { 
    // debugger
    // super.saveChange2();
  }

  decline() {
  }

  approve() {
  }

}
