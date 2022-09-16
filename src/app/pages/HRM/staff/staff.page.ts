import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, HRM_StaffProvider } from 'src/app/services/static/services.service';
import { StaffDetailPage } from '../staff-detail/staff-detail.page';
import { Location } from '@angular/common';
import { lib } from 'src/app/services/static/global-functions';



@Component({
    selector: 'app-staff',
    templateUrl: 'staff.page.html',
    styleUrls: ['staff.page.scss']
})
export class StaffPage extends PageBase {
    branchList = [];

    constructor(
        public pageProvider: HRM_StaffProvider,
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

    departmentList = [];
    preLoadData() {

        Promise.all([
            this.branchProvider.read({
                    Take: 5000,
                    AllChildren: true,
                    AllParent: true
                })
        ]).then(values => {
            this.branchList = values[0]['data'];
            this.buildFlatTree(this.branchList, this.branchList, true).then((resp: any) => {
                this.branchList = resp;

                this.branchList.forEach(i => {
                    let prefix = '';
                    for (let j = 1; j < i.level; j++) {
                        prefix += '- '
                    }
                    i.NamePadding = prefix + i.Name;
                    if (i.IDType == 119) {
                        i.Flag = true;
                    }
                    else {
                        this.departmentList.push(i);
                    }
                });

                this.departmentList.forEach(i => {
                    i.IDs = [];
                    this.getChildrenDepartmentID(i.IDs, i.Id);
                });

                this.departmentList.forEach(i => {
                    i.Query = JSON.stringify(i.IDs);
                })

                //console.log(this.departmentList)

            });
            super.preLoadData(null);
        });
    }

    getChildrenDepartmentID(ids, id) {
        ids.push(id);
        let children = this.departmentList.filter(i => i.IDParent == id);
        children.forEach(i => {
            this.getChildrenDepartmentID(ids, i.Id);
        })
    }

    loadedData(event) {
        this.items.forEach(i => {
            i.Department = lib.getAttrib(i.IDDepartment, this.branchList);
            i.JobTitle = lib.getAttrib(i.IDJobTitle, this.branchList);
        });

        super.loadedData(event);
    }

    showDetail(i) {
        this.navCtrl.navigateForward('/staff/' + i.Id);
    }

    async showDetail_(i) {
        const modal = await this.modalController.create({
            component: StaffDetailPage,
            componentProps: {
                branchList: this.branchList,
                item: i,
                id: i.Id
            },
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }

    add() {
        let newStaff = {
            Id: 0,
        };
        this.showDetail(newStaff);
    }

}
