import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { CommonService, exService } from "./core/common.service";
import { APIList } from "./static/global-variable";
import { SearchConfig } from "./static/search-config";

@Injectable({
  providedIn: "root",
})
export class IkachiService extends exService {
  APIUrl = environment.appDomain + 'api'

  constructor(
    public commonService: CommonService,
    private http: HttpClient
    ) {
    super(APIList.WMS_Zone, SearchConfig.getSearchFields('WMS_Zone'), commonService);
  }


  //APPOINTMENT
  getAppointmentList(query = null) {
    
    var that = this;
    return new Promise(function (resolve, reject) {
      
      that.commonService.connect('GET', this.APIUrl + "/Appointment", query).toPromise()
        .then((data: any) => {
          var result = { count: data.length, data: data };
          resolve(result);
        })
        .catch(err => {
          that.commonService.checkError(err);
          reject(err);
        });
    });
  }

	getCustomAppointmentList(fromDate, toDate, BranchID) {
		let URL = '/IKACHI/AppointmentList';
		let query = {fromDate: fromDate, toDate: toDate, BranchID: BranchID};
		// return this.API_connect(URL, query);

    var that = this;
    return new Promise(function (resolve, reject) {
      that.commonService.connect('GET', that.APIUrl + URL, query).toPromise()
        .then((data: any) => {
          var result = { count: data.length, data: data };
          resolve(result);
        })
        .catch(err => {
          that.commonService.checkError(err);
          reject(err);
        });
    });
	}

	getCustomGroupSaleInvoice(fromDate, toDate, BranchID) {
		let URL = '/IKACHI/GroupSaleInvoice';
		let query = {fromDate: fromDate, toDate: toDate, BranchID: BranchID};

    var that = this;
    return new Promise(function (resolve, reject) {
      that.commonService.connect('GET', that.APIUrl + URL, query).toPromise()
        .then((data: any) => {
          var result = { count: data.length, data: data };
          resolve(result);
        })
        .catch(err => {
          that.commonService.checkError(err);
          reject(err);
        });
    });
	}

	getCustomGroupService(fromDate, toDate, BranchID) {
		let URL = '/IKACHI/GroupService';
		let query = {fromDate: fromDate, toDate: toDate, BranchID: BranchID};

    var that = this;
    return new Promise(function (resolve, reject) {
      that.commonService.connect('GET', that.APIUrl + URL, query).toPromise()
        .then((data: any) => {
          var result = { count: data.length, data: data };
          resolve(result);
        })
        .catch(err => {
          that.commonService.checkError(err);
          reject(err);
        });
    });
	}

  getCustomPatientService(PatientID, Phone, FullName) {
    let URL = '/IKACHI/PatientService';

    let URLPatientID = '/IKACHI/PatientIDService';
    let URLPhone = '/IKACHI/PatientPhoneService';
    let URLFullName = '/IKACHI/PatientFullNameService';

    let query = { PatientID: PatientID, Phone: Phone, FullName: FullName };

    let queryPatientID = {PatientID: null};

    let temp:any = Number(PatientID);
    let check = isNaN(temp);

    if (isNaN(temp)) { 
      queryPatientID = { PatientID: Number() };
    }
    else {
      queryPatientID = { PatientID: temp };
    }

    let queryPhone = { Phone: Phone };

    let queryFullName = { FullName: FullName };

    var that = this;
    return new Promise(function (resolve, reject) {
      that.commonService.connect('GET', that.APIUrl + URLPatientID, queryPatientID).toPromise().then((data: any) => {
          var result = { count: data.length, data: data };
          if (result.data.length) {
            resolve(data);
          }
          else {
            that.commonService.connect('GET', that.APIUrl + URLPhone, queryPhone).toPromise().then((data: any) => {
              var result = { count: data.length, data: data };
              if (result.data.length) {
                resolve(data);
              }
              else {
                that.commonService.connect('GET', that.APIUrl + URLFullName, queryFullName).toPromise().then((data: any) => {
                  var result = { count: data.length, data: data };
                  resolve(data);
                });
              }
            });
          }
        })
        .catch(err => {
          that.commonService.checkError(err);
          reject(err);
        });
    });
  }

  getCustomPatientIDService(PatientID) {
		let URL = '/IKACHI/PatientIDService';
		let query = {PatientID: PatientID};

    return this.commonService.connect('GET', this.APIUrl + URL, query);
	}

  getCustomPatientFullNameService(FullName) {
		let URL = '/IKACHI/PatientFullNameService';
		let query = {FullName: FullName};

    return this.commonService.connect('GET', this.APIUrl + URL, query);
	}

  IkachiApprovalProcess(ID, ActionType, ApprovedBy, ApproveNote) {
    let URL = '/IKACHI/IkachiApprovalProcess';
    let query = {ID: ID , ActionType: ActionType, ApprovedBy: ApprovedBy, ApproveNote: ApproveNote};

    // return this.commonService.connect('GET', this.APIUrl + URL, query);

    var that = this;
    return new Promise(function (resolve, reject) {
      that.commonService.connect('GET', that.APIUrl + URL, query).toPromise()
        .then((data: any) => {
          var result = { count: data.length, data: data };
          resolve(result);
        })
        .catch(err => {
          that.commonService.checkError(err);
          reject(err);
        });
    });
  }

  getAppointment(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/Appointment/"+ val, null);
  }

  addAppointment(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/Appointment", val);
  }

  updateAppointment(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/Appointment/"+ val.ID, val);
  }

  deleteAppointment(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/Appointment/"+ val, null);
  }

  // //APPOINTMENT-STATUS
  getAppointmentStatusList(){
    return this.commonService.connect('GET', this.APIUrl + "/AppointmentStatus", null);
  }

  getAppointmentStatus(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/AppointmentStatus/" + val, null);
  }

  addAppointmentStatus(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/AppointmentStatus", val);
  }

  updateAppointmentStatus(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/AppointmentStatus/"+ val.ID, val);
  }

  deleteAppointmentStatus(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/AppointmentStatus/"+ val, null);
  }

  // //APPROVAL
  getApprovalList() {
    return this.commonService.connect('GET', this.APIUrl + "/Approval", null);
  }

  getApproval(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/Approval/"+ val, null);
  }

  addApproval(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/Approval", val);
  }

  updateApproval(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/Approval/"+ val.ID, val);
  }

  deleteApproval(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/Approval/"+ val, null);
  }

  // //LOCATION
  getLocationList() {
    return this.commonService.connect('GET', this.APIUrl + "/Location", null);
  }

  getLocation(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/Location/"+ val, null);
  }

  addLocation(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/Location", val);
  }

  updateLocation(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/Location/"+ val.ID, val);
  }

  deleteLocation(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/Location/"+ val, null);
  }

  // //SERVICE
  getServiceList() {
    return this.commonService.connect('GET', this.APIUrl + "/Service", null);
  }

  getService(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/Service/"+ val, null);
  }

  addService(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/Service", val);
  }

  updateService(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/Service/"+ val.ID, val);
  }

  deleteService(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/Service/"+ val, null);
  }

  // //SUBJECT
  getSubjectList(){
    return this.commonService.connect('GET', this.APIUrl + "/Subject", null);
  }

  getSubject(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/Subject/"+ val, null);
  }

  addSubject(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/Subject", val);
  }

  updateSubject(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/Subject/"+ val.ID, val);
  }

  deleteSubject(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/Subject/"+ val, null);
  }

  // //BRANCHES
  getBranchesList() {
    return this.commonService.connect('GET', this.APIUrl + "/Branches", null);
  }

  getBranches(val: any) {
    return this.commonService.connect('GET', this.APIUrl + "/Branches/"+ val, null);
  }

  addBranches(val: any) {
    return this.commonService.connect('POST', this.APIUrl + "/Branches", val);
  }

  updateBranches(val: any) {
    return this.commonService.connect('PUT', this.APIUrl + "/Branches/"+ val.ID, val);
  }

  deleteBranches(val: any) {
    return this.commonService.connect('DELETE', this.APIUrl + "/Branches/"+ val, null);
  }

  // //Memo Template
  getMemoTemplateList(){
    return this.commonService.connect('GET', this.APIUrl + "/MemoTemplate", null);
  }

  // //Memo Template
  getResourcesList(){
    return this.commonService.connect('GET', this.APIUrl + "/Resources", null);
  }
}
