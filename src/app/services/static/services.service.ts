//------------------------------------------------------------------------------
// 
//    www.codeart.vn
//    hungvq@live.com
//    (+84)908.061.119
// 
//------------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { APIList } from './global-variable';
import { CommonService, exService } from '../core/common.service';
import { SearchConfig } from './search-config';


@Injectable({ providedIn: 'root' })
export class AC_ARInvoiceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.AC_ARInvoice, SearchConfig.getSearchFields('AC_ARInvoice'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class AC_ARInvoiceDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.AC_ARInvoiceDetail, SearchConfig.getSearchFields('AC_ARInvoiceDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class AC_JournalEntryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.AC_JournalEntry, SearchConfig.getSearchFields('AC_JournalEntry'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class AC_JournalEntryRowProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.AC_JournalEntryRow, SearchConfig.getSearchFields('AC_JournalEntryRow'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class AC_PostingPeriodProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.AC_PostingPeriod, SearchConfig.getSearchFields('AC_PostingPeriod'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class APPROVAL_ChangelogProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.APPROVAL_Changelog, SearchConfig.getSearchFields('APPROVAL_Changelog'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class APPROVAL_CommentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.APPROVAL_Comment, SearchConfig.getSearchFields('APPROVAL_Comment'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class APPROVAL_RequestProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.APPROVAL_Request, SearchConfig.getSearchFields('APPROVAL_Request'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BANK_IncomingPaymentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BANK_IncomingPayment, SearchConfig.getSearchFields('BANK_IncomingPayment'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BANK_IncomingPaymentDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BANK_IncomingPaymentDetail, SearchConfig.getSearchFields('BANK_IncomingPaymentDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BANK_PaymentTermProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BANK_PaymentTerm, SearchConfig.getSearchFields('BANK_PaymentTerm'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BC_RevenueExpenditureComponentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BC_RevenueExpenditureComponent, SearchConfig.getSearchFields('BC_RevenueExpenditureComponent'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BC_RevenueExpenditureRefCodeProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BC_RevenueExpenditureRefCode, SearchConfig.getSearchFields('BC_RevenueExpenditureRefCode'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_Finance_BalanceSheetCategoryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Finance_BalanceSheetCategory, SearchConfig.getSearchFields('BI_Finance_BalanceSheetCategory'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_Finance_BalanceSheetsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Finance_BalanceSheets, SearchConfig.getSearchFields('BI_Finance_BalanceSheets'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_Finance_CashFlowProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Finance_CashFlow, SearchConfig.getSearchFields('BI_Finance_CashFlow'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_Finance_IncomeStatementProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Finance_IncomeStatement, SearchConfig.getSearchFields('BI_Finance_IncomeStatement'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_Finance_ManagementProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Finance_Management, SearchConfig.getSearchFields('BI_Finance_Management'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_Operating_MarketResearchProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Operating_MarketResearch, SearchConfig.getSearchFields('BI_Operating_MarketResearch'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_OppotunityProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_Oppotunity, SearchConfig.getSearchFields('BI_Oppotunity'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_ReportTemplateProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_ReportTemplate, SearchConfig.getSearchFields('BI_ReportTemplate'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BI_ReportTemplateDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BI_ReportTemplateDetail, SearchConfig.getSearchFields('BI_ReportTemplateDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BP_PartnerProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BP_Partner, SearchConfig.getSearchFields('BP_Partner'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BRA_BranchProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BRA_Branch, SearchConfig.getSearchFields('BRA_Branch'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class BSC_RevenueTargetProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.BSC_RevenueTarget, SearchConfig.getSearchFields('BSC_RevenueTarget'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_ActivityProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Activity, SearchConfig.getSearchFields('CRM_Activity'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_AttendanceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Attendance, SearchConfig.getSearchFields('CRM_Attendance'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_BusinessPartnerGroupProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_BusinessPartnerGroup, SearchConfig.getSearchFields('CRM_BusinessPartnerGroup'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_CampaignProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Campaign, SearchConfig.getSearchFields('CRM_Campaign'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_CampaignMemberProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_CampaignMember, SearchConfig.getSearchFields('CRM_CampaignMember'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_ConfigProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Config, SearchConfig.getSearchFields('CRM_Config'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_ContactProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Contact, SearchConfig.getSearchFields('CRM_Contact'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_ContactReferenceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_ContactReference, SearchConfig.getSearchFields('CRM_ContactReference'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_ContractProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Contract, SearchConfig.getSearchFields('CRM_Contract'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_CustomerProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Customer, SearchConfig.getSearchFields('CRM_Customer'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_LeadProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Lead, SearchConfig.getSearchFields('CRM_Lead'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_MemberCardProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_MemberCard, SearchConfig.getSearchFields('CRM_MemberCard'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_OpportunityProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Opportunity, SearchConfig.getSearchFields('CRM_Opportunity'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_OutletsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Outlets, SearchConfig.getSearchFields('CRM_Outlets'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_PartnerAddressProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_PartnerAddress, SearchConfig.getSearchFields('CRM_PartnerAddress'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_PartnerBankAccountProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_PartnerBankAccount, SearchConfig.getSearchFields('CRM_PartnerBankAccount'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_PersonInfoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_PersonInfo, SearchConfig.getSearchFields('CRM_PersonInfo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_QuotationProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Quotation, SearchConfig.getSearchFields('CRM_Quotation'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_RouteProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Route, SearchConfig.getSearchFields('CRM_Route'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_RouteDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_RouteDetail, SearchConfig.getSearchFields('CRM_RouteDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class CRM_VoucherProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.CRM_Voucher, SearchConfig.getSearchFields('CRM_Voucher'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class FINANCE_GeneralLedgerProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.FINANCE_GeneralLedger, SearchConfig.getSearchFields('FINANCE_GeneralLedger'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class FINANCE_TaxDefinitionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.FINANCE_TaxDefinition, SearchConfig.getSearchFields('FINANCE_TaxDefinition'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_DeductionOnSalaryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_DeductionOnSalary, SearchConfig.getSearchFields('HRM_DeductionOnSalary'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_OpenScheduleProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_OpenSchedule, SearchConfig.getSearchFields('HRM_OpenSchedule'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PayrollElementProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PayrollElement, SearchConfig.getSearchFields('HRM_PayrollElement'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PayrollPaySheetMasterProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PayrollPaySheetMaster, SearchConfig.getSearchFields('HRM_PayrollPaySheetMaster'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PayrollPaySheetMasterSalaryDecisionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PayrollPaySheetMasterSalaryDecision, SearchConfig.getSearchFields('HRM_PayrollPaySheetMasterSalaryDecision'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PersonalIncomePaymentProcessProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PersonalIncomePaymentProcess, SearchConfig.getSearchFields('HRM_PersonalIncomePaymentProcess'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolAllowanceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolAllowance, SearchConfig.getSearchFields('HRM_PolAllowance'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolAllowanceApplyForProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolAllowanceApplyFor, SearchConfig.getSearchFields('HRM_PolAllowanceApplyFor'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolCompulsoryInsuranceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolCompulsoryInsurance, SearchConfig.getSearchFields('HRM_PolCompulsoryInsurance'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolCompulsoryInsuranceApplyForProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolCompulsoryInsuranceApplyFor, SearchConfig.getSearchFields('HRM_PolCompulsoryInsuranceApplyFor'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolicyHolidayProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolicyHoliday, SearchConfig.getSearchFields('HRM_PolicyHoliday'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolicyPaidTimeOffProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolicyPaidTimeOff, SearchConfig.getSearchFields('HRM_PolicyPaidTimeOff'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolicyPaidTimeOffGrantsByLengthOfServicesProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolicyPaidTimeOffGrantsByLengthOfServices, SearchConfig.getSearchFields('HRM_PolicyPaidTimeOffGrantsByLengthOfServices'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolWelfareProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolWelfare, SearchConfig.getSearchFields('HRM_PolWelfare'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_PolWelfareApplyForProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_PolWelfareApplyFor, SearchConfig.getSearchFields('HRM_PolWelfareApplyFor'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_ShiftProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_Shift, SearchConfig.getSearchFields('HRM_Shift'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_ShiftInTimesheetProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_ShiftInTimesheet, SearchConfig.getSearchFields('HRM_ShiftInTimesheet'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_Staff, SearchConfig.getSearchFields('HRM_Staff'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_Staff_ConcurrentPositionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_Staff_ConcurrentPosition, SearchConfig.getSearchFields('HRM_Staff_ConcurrentPosition'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffAcademicLevelProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffAcademicLevel, SearchConfig.getSearchFields('HRM_StaffAcademicLevel'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffAddressProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffAddress, SearchConfig.getSearchFields('HRM_StaffAddress'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffAllowanceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffAllowance, SearchConfig.getSearchFields('HRM_StaffAllowance'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffAnotherSkillProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffAnotherSkill, SearchConfig.getSearchFields('HRM_StaffAnotherSkill'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffAppointDecisionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffAppointDecision, SearchConfig.getSearchFields('HRM_StaffAppointDecision'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffBankProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffBank, SearchConfig.getSearchFields('HRM_StaffBank'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffBasicInfoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffBasicInfo, SearchConfig.getSearchFields('HRM_StaffBasicInfo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffBounusOnSalaryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffBounusOnSalary, SearchConfig.getSearchFields('HRM_StaffBounusOnSalary'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffCompulsoryInsuranceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffCompulsoryInsurance, SearchConfig.getSearchFields('HRM_StaffCompulsoryInsurance'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffConcurrentPositionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffConcurrentPosition, SearchConfig.getSearchFields('HRM_StaffConcurrentPosition'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffConcurrentProbationryPositionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffConcurrentProbationryPosition, SearchConfig.getSearchFields('HRM_StaffConcurrentProbationryPosition'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffCurrentWorkingProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffCurrentWorking, SearchConfig.getSearchFields('HRM_StaffCurrentWorking'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffDeductionOnSalaryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffDeductionOnSalary, SearchConfig.getSearchFields('HRM_StaffDeductionOnSalary'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffFamilyProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffFamily, SearchConfig.getSearchFields('HRM_StaffFamily'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffForeignLanguageProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffForeignLanguage, SearchConfig.getSearchFields('HRM_StaffForeignLanguage'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffIdentityCardAndPITProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffIdentityCardAndPIT, SearchConfig.getSearchFields('HRM_StaffIdentityCardAndPIT'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffInsurancePaymentProcessProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffInsurancePaymentProcess, SearchConfig.getSearchFields('HRM_StaffInsurancePaymentProcess'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffInternetAccountProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffInternetAccount, SearchConfig.getSearchFields('HRM_StaffInternetAccount'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffLaborContractProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffLaborContract, SearchConfig.getSearchFields('HRM_StaffLaborContract'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffLearningProcessProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffLearningProcess, SearchConfig.getSearchFields('HRM_StaffLearningProcess'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffPhoneProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffPhone, SearchConfig.getSearchFields('HRM_StaffPhone'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffPTOEnrollmentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffPTOEnrollment, SearchConfig.getSearchFields('HRM_StaffPTOEnrollment'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffRecruitmentInfoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffRecruitmentInfo, SearchConfig.getSearchFields('HRM_StaffRecruitmentInfo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffResignationInfoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffResignationInfo, SearchConfig.getSearchFields('HRM_StaffResignationInfo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffSalaryDecisionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffSalaryDecision, SearchConfig.getSearchFields('HRM_StaffSalaryDecision'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffScheduleProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffSchedule, SearchConfig.getSearchFields('HRM_StaffSchedule'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffSpecializedFieldProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffSpecializedField, SearchConfig.getSearchFields('HRM_StaffSpecializedField'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffSpecializedSkillProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffSpecializedSkill, SearchConfig.getSearchFields('HRM_StaffSpecializedSkill'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffStaffAndFamilyJobProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffStaffAndFamilyJob, SearchConfig.getSearchFields('HRM_StaffStaffAndFamilyJob'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffTimesheetEnrollmentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffTimesheetEnrollment, SearchConfig.getSearchFields('HRM_StaffTimesheetEnrollment'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffTrainingProcessProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffTrainingProcess, SearchConfig.getSearchFields('HRM_StaffTrainingProcess'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffTrainingProcessSkillProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffTrainingProcessSkill, SearchConfig.getSearchFields('HRM_StaffTrainingProcessSkill'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffWelfareProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffWelfare, SearchConfig.getSearchFields('HRM_StaffWelfare'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffWorkExperienceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffWorkExperience, SearchConfig.getSearchFields('HRM_StaffWorkExperience'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_StaffWorkingDiaryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_StaffWorkingDiary, SearchConfig.getSearchFields('HRM_StaffWorkingDiary'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_TimesheetProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_Timesheet, SearchConfig.getSearchFields('HRM_Timesheet'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_TimesheetCheckInCodeProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_TimesheetCheckInCode, SearchConfig.getSearchFields('HRM_TimesheetCheckInCode'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class HRM_TimesheetLogProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.HRM_TimesheetLog, SearchConfig.getSearchFields('HRM_TimesheetLog'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_ContractTemplateProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_ContractTemplate, SearchConfig.getSearchFields('LIST_ContractTemplate'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_CountryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_Country, SearchConfig.getSearchFields('LIST_Country'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_DistrictProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_District, SearchConfig.getSearchFields('LIST_District'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_ElementOfSalaryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_ElementOfSalary, SearchConfig.getSearchFields('LIST_ElementOfSalary'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_GeneralProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_General, SearchConfig.getSearchFields('LIST_General'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_PayPeriodProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_PayPeriod, SearchConfig.getSearchFields('LIST_PayPeriod'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_ProvinceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_Province, SearchConfig.getSearchFields('LIST_Province'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class LIST_WardProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.LIST_Ward, SearchConfig.getSearchFields('LIST_Ward'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class MR_CompetiorOrderProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.MR_CompetiorOrder, SearchConfig.getSearchFields('MR_CompetiorOrder'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class MR_TrackingCompetitorProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.MR_TrackingCompetitor, SearchConfig.getSearchFields('MR_TrackingCompetitor'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class OST_OfficeProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.OST_Office, SearchConfig.getSearchFields('OST_Office'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class OST_OfficeGateProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.OST_OfficeGate, SearchConfig.getSearchFields('OST_OfficeGate'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PM_TaskProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PM_Task, SearchConfig.getSearchFields('PM_Task'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_BillTableProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_BillTable, SearchConfig.getSearchFields('POS_BillTable'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_CashProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_Cash, SearchConfig.getSearchFields('POS_Cash'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_KitchenProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_Kitchen, SearchConfig.getSearchFields('POS_Kitchen'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_MemberCardPromotionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_MemberCardPromotion, SearchConfig.getSearchFields('POS_MemberCardPromotion'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_MemoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_Memo, SearchConfig.getSearchFields('POS_Memo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_MenuProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_Menu, SearchConfig.getSearchFields('POS_Menu'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_MenuDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_MenuDetail, SearchConfig.getSearchFields('POS_MenuDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_TableProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_Table, SearchConfig.getSearchFields('POS_Table'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class POS_TableGroupProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.POS_TableGroup, SearchConfig.getSearchFields('POS_TableGroup'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PR_PromotionTrackingProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PR_PromotionTracking, SearchConfig.getSearchFields('PR_PromotionTracking'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PROD_BillOfMaterialsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PROD_BillOfMaterials, SearchConfig.getSearchFields('PROD_BillOfMaterials'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PROD_BillOfMaterialsDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PROD_BillOfMaterialsDetail, SearchConfig.getSearchFields('PROD_BillOfMaterialsDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PROD_ItemInVendorProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PROD_ItemInVendor, SearchConfig.getSearchFields('PROD_ItemInVendor'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PROD_MRPProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PROD_MRP, SearchConfig.getSearchFields('PROD_MRP'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PROD_MRPScenarioProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PROD_MRPScenario, SearchConfig.getSearchFields('PROD_MRPScenario'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PURCHASE_OrderProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PURCHASE_Order, SearchConfig.getSearchFields('PURCHASE_Order'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class PURCHASE_OrderDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.PURCHASE_OrderDetail, SearchConfig.getSearchFields('PURCHASE_OrderDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SALE_OrderProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SALE_Order, SearchConfig.getSearchFields('SALE_Order'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SALE_OrderDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SALE_OrderDetail, SearchConfig.getSearchFields('SALE_OrderDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SHIFT_TimeSheetProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SHIFT_TimeSheet, SearchConfig.getSearchFields('SHIFT_TimeSheet'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SHIP_ShipmentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SHIP_Shipment, SearchConfig.getSearchFields('SHIP_Shipment'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SHIP_ShipmentDebtProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SHIP_ShipmentDebt, SearchConfig.getSearchFields('SHIP_ShipmentDebt'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SHIP_ShipmentDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SHIP_ShipmentDetail, SearchConfig.getSearchFields('SHIP_ShipmentDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SHIP_VehicleProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SHIP_Vehicle, SearchConfig.getSearchFields('SHIP_Vehicle'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_AppsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Apps, SearchConfig.getSearchFields('SYS_Apps'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_ConfigProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Config, SearchConfig.getSearchFields('SYS_Config'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_ConfigOptionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_ConfigOption, SearchConfig.getSearchFields('SYS_ConfigOption'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_CurrencyProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Currency, SearchConfig.getSearchFields('SYS_Currency'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_DataPermissionListProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_DataPermissionList, SearchConfig.getSearchFields('SYS_DataPermissionList'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_FormProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Form, SearchConfig.getSearchFields('SYS_Form'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_FormGroupProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_FormGroup, SearchConfig.getSearchFields('SYS_FormGroup'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_GlobalConfigProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_GlobalConfig, SearchConfig.getSearchFields('SYS_GlobalConfig'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_LogProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Log, SearchConfig.getSearchFields('SYS_Log'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_PermissionListProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_PermissionList, SearchConfig.getSearchFields('SYS_PermissionList'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_PrinterProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Printer, SearchConfig.getSearchFields('SYS_Printer'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_RoleProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Role, SearchConfig.getSearchFields('SYS_Role'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_RuningNoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_RuningNo, SearchConfig.getSearchFields('SYS_RuningNo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_SAP_DatabasesProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_SAP_Databases, SearchConfig.getSearchFields('SYS_SAP_Databases'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_StatusProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Status, SearchConfig.getSearchFields('SYS_Status'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_SyncJobProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_SyncJob, SearchConfig.getSearchFields('SYS_SyncJob'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_TypeProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_Type, SearchConfig.getSearchFields('SYS_Type'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_UserDeviceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_UserDevice, SearchConfig.getSearchFields('SYS_UserDevice'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_UserSettingProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_UserSetting, SearchConfig.getSearchFields('SYS_UserSetting'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_UserVoiceProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_UserVoice, SearchConfig.getSearchFields('SYS_UserVoice'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class SYS_VeifyPhoneNumberProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.SYS_VeifyPhoneNumber, SearchConfig.getSearchFields('SYS_VeifyPhoneNumber'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class VersionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.Version, SearchConfig.getSearchFields('Version'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WEB_CategoryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WEB_Category, SearchConfig.getSearchFields('WEB_Category'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WEB_ContentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WEB_Content, SearchConfig.getSearchFields('WEB_Content'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WEB_Content_TagProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WEB_Content_Tag, SearchConfig.getSearchFields('WEB_Content_Tag'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WEB_ContentInCategoryProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WEB_ContentInCategory, SearchConfig.getSearchFields('WEB_ContentInCategory'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WEB_TagProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WEB_Tag, SearchConfig.getSearchFields('WEB_Tag'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_BranchesProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_Branches, SearchConfig.getSearchFields('WH_Branches'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_CashFlowsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_CashFlows, SearchConfig.getSearchFields('WH_CashFlows'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_ContactGroupsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_ContactGroups, SearchConfig.getSearchFields('WH_ContactGroups'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_ContactsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_Contacts, SearchConfig.getSearchFields('WH_Contacts'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_GeneralLedgersProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_GeneralLedgers, SearchConfig.getSearchFields('WH_GeneralLedgers'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_InvoiceRowsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_InvoiceRows, SearchConfig.getSearchFields('WH_InvoiceRows'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_InvoicesProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_Invoices, SearchConfig.getSearchFields('WH_Invoices'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_ItemGroupsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_ItemGroups, SearchConfig.getSearchFields('WH_ItemGroups'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_ItemPriceListsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_ItemPriceLists, SearchConfig.getSearchFields('WH_ItemPriceLists'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_ItemsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_Items, SearchConfig.getSearchFields('WH_Items'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_ItemUoMProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_ItemUoM, SearchConfig.getSearchFields('WH_ItemUoM'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_JournalEntriesProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_JournalEntries, SearchConfig.getSearchFields('WH_JournalEntries'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_JournalEntryRowsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_JournalEntryRows, SearchConfig.getSearchFields('WH_JournalEntryRows'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_PostingPeriodsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_PostingPeriods, SearchConfig.getSearchFields('WH_PostingPeriods'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_PriceListsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_PriceLists, SearchConfig.getSearchFields('WH_PriceLists'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_StaffProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_Staff, SearchConfig.getSearchFields('WH_Staff'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_UoMProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_UoM, SearchConfig.getSearchFields('WH_UoM'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WH_VTB_StatementsProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WH_VTB_Statements, SearchConfig.getSearchFields('WH_VTB_Statements'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_AdjustmentProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Adjustment, SearchConfig.getSearchFields('WMS_Adjustment'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_AdjustmentDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_AdjustmentDetail, SearchConfig.getSearchFields('WMS_AdjustmentDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_CarrierProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Carrier, SearchConfig.getSearchFields('WMS_Carrier'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_CartonProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Carton, SearchConfig.getSearchFields('WMS_Carton'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_CartonGroupProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_CartonGroup, SearchConfig.getSearchFields('WMS_CartonGroup'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ItemProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Item, SearchConfig.getSearchFields('WMS_Item'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ItemGroupProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_ItemGroup, SearchConfig.getSearchFields('WMS_ItemGroup'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ItemInLocationProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_ItemInLocation, SearchConfig.getSearchFields('WMS_ItemInLocation'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ItemInWarehouseConfigProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_ItemInWarehouseConfig, SearchConfig.getSearchFields('WMS_ItemInWarehouseConfig'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ItemUoMProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_ItemUoM, SearchConfig.getSearchFields('WMS_ItemUoM'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_LicencePlateNumberProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_LicencePlateNumber, SearchConfig.getSearchFields('WMS_LicencePlateNumber'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_LocationProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Location, SearchConfig.getSearchFields('WMS_Location'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_LotProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Lot, SearchConfig.getSearchFields('WMS_Lot'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_LotAttributeProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_LotAttribute, SearchConfig.getSearchFields('WMS_LotAttribute'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_LotLPNLocationProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_LotLPNLocation, SearchConfig.getSearchFields('WMS_LotLPNLocation'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_PriceListProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_PriceList, SearchConfig.getSearchFields('WMS_PriceList'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_PriceListDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_PriceListDetail, SearchConfig.getSearchFields('WMS_PriceListDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_PriceListVersionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_PriceListVersion, SearchConfig.getSearchFields('WMS_PriceListVersion'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_PriceListVersionDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_PriceListVersionDetail, SearchConfig.getSearchFields('WMS_PriceListVersionDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_PutawayStrategyProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_PutawayStrategy, SearchConfig.getSearchFields('WMS_PutawayStrategy'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_PutawayStrategyDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_PutawayStrategyDetail, SearchConfig.getSearchFields('WMS_PutawayStrategyDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ReceiptProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Receipt, SearchConfig.getSearchFields('WMS_Receipt'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ReceiptDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_ReceiptDetail, SearchConfig.getSearchFields('WMS_ReceiptDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ReceiptPalletizationProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_ReceiptPalletization, SearchConfig.getSearchFields('WMS_ReceiptPalletization'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_StorerProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Storer, SearchConfig.getSearchFields('WMS_Storer'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_TaskDispatchStrategyProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_TaskDispatchStrategy, SearchConfig.getSearchFields('WMS_TaskDispatchStrategy'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_TaskDispatchStrategyDetailProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_TaskDispatchStrategyDetail, SearchConfig.getSearchFields('WMS_TaskDispatchStrategyDetail'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_TransactionProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Transaction, SearchConfig.getSearchFields('WMS_Transaction'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_UoMProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_UoM, SearchConfig.getSearchFields('WMS_UoM'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_UoMGroupProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_UoMGroup, SearchConfig.getSearchFields('WMS_UoMGroup'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_VendorProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Vendor, SearchConfig.getSearchFields('WMS_Vendor'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_WarehouseInfoProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_WarehouseInfo, SearchConfig.getSearchFields('WMS_WarehouseInfo'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_WavePlanningProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_WavePlanning, SearchConfig.getSearchFields('WMS_WavePlanning'), commonService);
	}
}

@Injectable({ providedIn: 'root' })
export class WMS_ZoneProvider extends exService {
	constructor(public commonService: CommonService) {
		super(APIList.WMS_Zone, SearchConfig.getSearchFields('WMS_Zone'), commonService);
	}
}

