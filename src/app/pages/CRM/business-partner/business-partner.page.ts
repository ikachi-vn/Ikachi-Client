import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { EnvService } from 'src/app/services/core/env.service';
import { PageBase } from 'src/app/page-base';
import { BRA_BranchProvider, CRM_ContactProvider } from 'src/app/services/static/services.service';
import { Location } from '@angular/common';
import { lib } from 'src/app/services/static/global-functions';

@Component({
    selector: 'app-business-partner',
    templateUrl: 'business-partner.page.html',
    styleUrls: ['business-partner.page.scss']
})
export class BusinessPartnerPage extends PageBase {
    branchList = [];

    constructor(
        public pageProvider: CRM_ContactProvider,
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
        if (!this.sort.Id) {
            this.sort.Id = 'Id';
            this.sortToggle('Id', true);
        }
        
        if (this.pageConfig.pageName == 'vendor') {
            this.query.IgnoredBranch = true;
            this.query.IsVendor = true;
        }
        if (this.pageConfig.pageName == 'carrier') {
            this.query.IgnoredBranch = true;
            this.query.IsCarrier = true;
        }
        else if (this.pageConfig.pageName == 'distributor') {
            this.query.IgnoredBranch = true;
            this.query.IsDistributor = true;
        }
        else if (this.pageConfig.pageName == 'storer') {
            this.query.IgnoredBranch = true;
            this.query.IsStorer = true;
        }

        else if (this.pageConfig.pageName == 'outlets') {
            this.query.IsOutlets = true;
            this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;
        }
        else if (this.pageConfig.pageName == 'customer') {
            this.query.IsCustomer = true;
            this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;
        }
        else if (this.pageConfig.pageName == 'business-partner'){
            this.query.IDOwner = this.pageConfig.canViewAllData ? 'all' : this.env.user.StaffID;
        }

        Promise.all([
            this.branchProvider.read()
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

  

}
