import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { concat, defer, from, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { PageBase } from 'src/app/page-base';
import { CommonService } from 'src/app/services/core/common.service';
import { EnvService } from 'src/app/services/core/env.service';
import { IkachiService } from 'src/app/services/ikachi.service';
import { ApiSetting } from 'src/app/services/static/api-setting';
import { lib } from 'src/app/services/static/global-functions';
import { CRM_ContactProvider, SALE_OrderProvider } from 'src/app/services/static/services.service';

@Component({
  selector: 'app-surgery-appointment-detail',
  templateUrl: 'surgery-appointment-detail.page.html',
  styleUrls: ['surgery-appointment-detail.page.scss'],
})
export class SurgeryAppointmentDetailPage extends PageBase {
  subjectList;
  serviceList;
  appointmentStatusList;
  locationList;
  memoTemplateList;
  resourcesList;
  submitAttempt = false;
  appointmentTypeList = [
    {
      TypeId: 0,
      TypeName: 'Hẹn tái khám',
    },
    {
      TypeId: 1,
      TypeName: 'Hẹn phẫu thuật',
    },
    {
      TypeId: 2,
      TypeName: 'Hẹn khác',
    },
  ]

  constructor(
    public pageProvider: IkachiService,
    public env: EnvService,
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public cdr: ChangeDetectorRef,
    public loadingController: LoadingController,
    public commonService: CommonService,
    public ikachiService: IkachiService,
  ) {
    super();
    this.item = {};
    this.pageConfig.isDetailPage = true;
    this.pageConfig.canEdit = true;
    this.pageConfig.canDelete = true;
    this.id = this.route.snapshot.paramMap.get('id');

    this.formGroup = formBuilder.group({
      ID: new FormControl({ value: '', disabled: true }),

      CustomerID: new FormControl({ value: '', disabled: false }, Validators.required),
      CustomerName: new FormControl({ value: '', disabled: true }),
      Gender: new FormControl({ value: '', disabled: true }),
      DOB: new FormControl({ value: '', disabled: true }),
      PhoneNumber: new FormControl({ value: '', disabled: true }),
      PhoneNumber2: new FormControl({ value: '', disabled: true }),
      CustomerAddress: new FormControl({ value: '', disabled: true }),
      District: new FormControl({ value: '', disabled: true }),
      Province: new FormControl({ value: '', disabled: true }),
      MRCode: new FormControl({ value: '', disabled: true }),
      CreateBy: new FormControl({ value: '', disabled: true }),

      SubjectID: [''],
      LocationID: [''],
      ServiceID: [''],
      PrepareContent: [''],
      StartTime: [''],
      Status: [''],

      AppointmentType: [''],
      CreateDate: [''],
      Description: [''],
      EndTime: [''],
      ExamineID: [''],
      OnlineBookingID: [''],
      ResourceID: [''],
      ServiceName: [''],
      SubResourceID: [''],
      Subject: [''],
      UpdateLog: [''],
      BSThucHien: [''],
    });
  }

  preLoadData(event = null) {
    Promise.all([
      this.ikachiService.getSubjectList().toPromise(),
      this.ikachiService.getAppointmentStatusList().toPromise(),
      this.ikachiService.getServiceList().toPromise(),
      this.ikachiService.getLocationList().toPromise(),
      this.ikachiService.getMemoTemplateList().toPromise(),
      this.ikachiService.getResourcesList().toPromise(),
    ]).then((values: any) => {
      this.subjectList = values[0];
      this.appointmentStatusList = values[1];
      this.serviceList = values[2];
      this.locationList = values[3];
      this.memoTemplateList = values[4];
      this.resourcesList = values[5];
      super.preLoadData();
    });
  }

  loadData(event) {
    this.id = parseInt(this.id);

    if (this.id != 0) {
      this.ikachiService.getAppointment(this.id).subscribe((data: any) => {
        this.item = data;
        this.item.Id = data.ID;
        this.item.StartDateText = lib.dateFormat(this.item.StartTime, 'yyyy-mm-dd');
        this.item.StartTimeText = lib.dateFormat(this.item.StartTime, 'hh:MM');
        this.item.EndDateText = lib.dateFormat(this.item.EndTime, 'yyyy-mm-dd');
        this.item.EndTimeText = lib.dateFormat(this.item.EndTime, 'hh:MM');

        this.ikachiService.getCustomPatientIDService(this.item.CustomerID).toPromise().then((resp: any) => {
          let data = resp;
          this.contactList$ = concat(of(data));
          if (this.contactListSelected.findIndex(d => d.PatientID == data[0].PatientID) == -1) {
            this.contactListSelected.push(data[0]);
          }
          this.item.CustomerName = data[0].FullName;
          this.item.DOB = lib.dateFormat(data[0].birthday, 'yyyy-mm-dd');
          this.item.Gender = data[0].sex == 0 ? 'Nam' : 'Nữ';
          this.item.PhoneNumber = data[0].phone;
          this.item.PhoneNumber2 = data[0].Phone2;
          this.item.CustomerAddress = data[0].Address;
          this.item.District = data[0].District;
          this.item.Province = data[0].Province;
          this.loadedData(event);
        });
      });
    }
    else {
      // this.pageConfig.showSpinner = false;
      // this.formGroup.controls.MRCode.enable();
      // this.formGroup.controls.CreateBy.enable();
      let temp = this.env.user.Email;
      let createdBy = temp.split('@')[0];
      this.formGroup.controls['CreateBy'].patchValue(createdBy);
      this.formGroup.controls['Status'].patchValue(1);
      this.formGroup.controls['CreateBy'].markAsDirty();
      this.formGroup.controls['Status'].markAsDirty();
      this.loadedData(event);
    }

  }

  loadedData(event) {
    super.loadedData(event);
    this.contactSearch();
  }

  contactList$
  contactListLoading = false;
  contactListInput$ = new Subject<string>();
  contactListSelected = [];
  contactSelected = null;
  contactSearch() {
    this.contactListLoading = false;
    this.contactList$ = concat(
      of(this.contactListSelected),
      this.contactListInput$.pipe(
        distinctUntilChanged(),
        tap(() => this.contactListLoading = true),
        switchMap(term => {
          return defer(() => from(this.ikachiService.getCustomPatientService(term, term, term))).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => this.contactListLoading = false)
          )
        })
      ))
  }

  changedIDContact(i) {
    if (i != null) {
      this.contactSelected = i;
      if (this.contactListSelected.findIndex(d => d.PatientID == i.PatientID) == -1) {
        this.contactListSelected.push(i);
        this.contactSearch();
      }
      this.formGroup.controls['CustomerID'].patchValue(i.PatientID);
      this.formGroup.controls['CustomerName'].patchValue(i.FullName);
      this.formGroup.controls['DOB'].patchValue(lib.dateFormat(i.birthday, 'yyyy-mm-dd'));
      this.formGroup.controls['Gender'].patchValue(i.sex == 0 ? 'Nam' : 'Nữ');
      this.formGroup.controls['PhoneNumber'].patchValue(i.phone);
      this.formGroup.controls['PhoneNumber2'].patchValue(i.Phone2);
      this.formGroup.controls['CustomerAddress'].patchValue(i.Address);
      this.formGroup.controls['District'].patchValue(i.District);
      this.formGroup.controls['Province'].patchValue(i.Province);
      this.formGroup.controls['MRCode'].patchValue(i.MRCode);
      this.formGroup.updateValueAndValidity();
    }
    else if (i == null) {
      this.contactSelected = i;
    }
  }

  setPrepareContent(e) {
    this.formGroup.controls['PrepareContent'].patchValue(e.TemplateContent);
    this.formGroup.controls['PrepareContent'].markAsDirty();
  }

  segmentView = 's1';
  segmentChanged(ev: any) {
    this.segmentView = ev.detail.value;
  }

  async saveChange() {
    if (this.id == 0) {
      this.formGroup.controls['CreateDate'].patchValue(lib.dateFormat(new Date(), 'yyyy-mm-dd') + ' ' + lib.dateFormat(new Date(), 'hh:MM:ss'));
      this.formGroup.controls['CreateDate'].markAsDirty();
    }
    this.formGroup.controls['Subject'].patchValue(this.subjectList.filter(sj => (sj.SubjectID == this.formGroup.controls['SubjectID'].value))[0]?.SubjectTitle);
    this.formGroup.controls['ServiceName'].patchValue(this.serviceList.filter(sj => (sj.ServiceID == this.formGroup.controls['ServiceID'].value))[0]?.ServiceName);
    this.formGroup.controls['AppointmentType'].patchValue(this.subjectList.filter(sj => (sj.SubjectID == this.formGroup.controls['SubjectID'].value))[0]?.AppointmentType);
    
    
    this.saveChange2();
  }

  saveChange2(publishEventCode = this.pageConfig.pageName) {
    return new Promise((resolve, reject) => {
      this.formGroup.updateValueAndValidity();

      if (!this.formGroup.valid) {
        this.env.showMessage('Vui lòng kiểm tra lại các thông tin được tô đỏ bên trên.', 'warning');
      }
      else if (this.submitAttempt == false) {
        if (this.id == 0) {
          this.submitAttempt = true;
          Object.assign(this.item, this.formGroup.value);
          Object.keys(this.item).forEach(k => {
            if (this.item[k] === null || this.item[k] === undefined || this.item[k] === '')
              delete this.item[k];
          });
          if (!this.item.hasOwnProperty('ID')) {
            this.item.ID = 0;
          }
          this.pageProvider.addAppointment(this.item).toPromise().then((savedItem: any) => {
            if (publishEventCode) {
              this.env.publishEvent({ Code: publishEventCode });
              console.log('saveChange', publishEventCode);
            }
            if (this.item.ID != savedItem.ID) {
              this.item.ID = savedItem.ID;
              this.id = savedItem.ID;
              super.loadedData();
              if (window.location.hash.endsWith('/0')) {
                let newURL = window.location.hash.substring(0, window.location.hash.length - 1) + savedItem.ID;
                history.pushState({}, null, newURL);
              }
            }

            // if (loading) loading.dismiss();
            this.env.showMessage('Đã lưu xong!', 'success');
            this.formGroup.markAsPristine();
            this.cdr.detectChanges();
            resolve(savedItem.Id);
            this.submitAttempt = false;
            this.savedChange(savedItem);
          }).catch(err => {
            // if (loading) loading.dismiss();
            this.env.showMessage('Không lưu được, xin vui lòng thử lại.', 'danger');
            this.cdr.detectChanges();
            this.submitAttempt = false;
            reject(err);
          });


        }
        else {
          this.submitAttempt = true;
          Object.assign(this.item, this.formGroup.value);
          Object.keys(this.item).forEach(k => {
            if (this.item[k] === null || this.item[k] === undefined || this.item[k] === '')
              delete this.item[k];
          });
          if (!this.item.hasOwnProperty('ID')) {
            this.item.ID = 0;
          }
          this.pageProvider.updateAppointment(this.item).toPromise().then((savedItem: any) => {
            if (publishEventCode) {
              this.env.publishEvent({ Code: publishEventCode });
              console.log('saveChange', publishEventCode);
            }
            if (this.item.ID != savedItem.ID) {
              this.item.ID = savedItem.ID;
              this.id = savedItem.ID;
              super.loadedData();
              if (window.location.hash.endsWith('/0')) {
                let newURL = window.location.hash.substring(0, window.location.hash.length - 1) + savedItem.ID;
                history.pushState({}, null, newURL);
              }
            }
            // if (loading) loading.dismiss();
            this.env.showMessage('Đã lưu xong!', 'success');
            this.formGroup.markAsPristine();
            this.cdr.detectChanges();
            resolve(savedItem.ID);
            this.submitAttempt = false;
            this.savedChange(savedItem);
          }).catch(err => {
            // if (loading) loading.dismiss();
            this.env.showMessage('Không lưu được, xin vui lòng thử lại.', 'danger');
            this.cdr.detectChanges();
            this.submitAttempt = false;
            reject(err);
          });
        }
      }
    });

  }

  delete(publishEventCode = this.pageConfig.pageName) {
    if (this.pageConfig.canDelete) {
      this.alertCtrl.create({
        header: 'Xóa' + (this.item.ServiceName ? ' ' + this.item.ServiceName : ''),
        //subHeader: '---',
        message: 'Bạn chắc muốn xóa' + (this.item.ServiceName ? ' ' + this.item.ServiceName + ' ' + this.item.CustomerName : '') + '?',
        buttons: [
          {
            text: 'Không',
            role: 'cancel',
            handler: () => {
              //console.log('Không xóa');
              //debugger
              //this.closeModal();
            }
          },
          {
            text: 'Đồng ý xóa',
            cssClass: 'danger-btn',
            handler: () => {
              this.pageProvider.deleteAppointment(this.item.ID).toPromise().then(() => {
                this.env.showMessage('Đã xóa xong!', 'success');
                this.env.publishEvent({ Code: publishEventCode });
                this.closeModal();
              }).catch(err => {
                //console.log(err);
              })
            }
          }
        ]
      }).then(alert => {
        alert.present();
      })
    }
  }
}
