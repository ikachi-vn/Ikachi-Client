import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage extends PageBase {

  constructor(
    // public pageProvider: RequestProvider,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public env: EnvService,
    public navCtrl: NavController,
  ) {
    super();
  }

  loadedData(event) {
    debugger
    this.items = [
      {
        Id: 15,
        Name: "Test Name",
        IDType: "Xin nghỉ phép",
        IDStatus: "Pending",
        CreatedBy: "Peter",
        CreatedDate: "19-02-2022",
      },
      {
        Id: 16,
        Name: "Test Name 2",
        IDType: "Thanh toán hợp đồng",
        IDStatus: "Approved",
        CreatedBy: "Peter",
        CreatedDate: "19-02-2022",
      },
    ]

    super.loadedData(event);
  }



}
