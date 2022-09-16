//------------------------------------------------------------------------------
// 
//    www.codeart.vn
//    hungvq@live.com
//    (+84)908.061.119
// 
//------------------------------------------------------------------------------

import { ApiSetting } from './api-setting';

export var APIListBase = {
    ACCOUNT: {
        register: {
            method: "POST",
            url: ApiSetting.mainService.base + ApiSetting.mainService.api + "Account/Register"
        },
        registerFB: {
            method: "POST",
            url: ApiSetting.mainService.base + ApiSetting.mainService.api + "Account/RegisterExternal"
        },
        token: {
            method: "POST",
            url: ApiSetting.mainService.base + "token"
        },
        forgotPassword: {
            method: "POST",
            url: ApiSetting.mainService.base + ApiSetting.mainService.api + "Account/ForgotPassword"
        },
        getUserData: {
            method: "GET",
            url: ApiSetting.apiDomain("Account/UserInfo")
        },
        postUserData: {
            method: "POST",
            url: ApiSetting.mainService.base + ApiSetting.mainService.api + ""
        },
        getExternalLogins: {
            method: "GET",
            url: ApiSetting.apiDomain("Account/ExternalLogins?returnUrl=/BOOKING/login&generateState=true")
        },
        getObtainLocalAccessToken: {
            method: "GET",
            url: ApiSetting.apiDomain("Account/ObtainLocalAccessToken")
        },
    },



	AC_ARInvoice:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoice/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoice")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoice/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoice/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoice/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoice/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoice/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoice/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoice")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoice/") + id} 
        }
		
	},

	AC_ARInvoiceDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoiceDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoiceDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoiceDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoiceDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoiceDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoiceDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoiceDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoiceDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("AC/ARInvoiceDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("AC/ARInvoiceDetail/") + id} 
        }
		
	},

	AC_JournalEntry:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntry/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntry")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntry/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntry/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntry/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntry/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntry/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntry/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntry")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntry/") + id} 
        }
		
	},

	AC_JournalEntryRow:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntryRow/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntryRow")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntryRow/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntryRow/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntryRow/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntryRow/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntryRow/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntryRow/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("AC/JournalEntryRow")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("AC/JournalEntryRow/") + id} 
        }
		
	},

	AC_PostingPeriod:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/PostingPeriod/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("AC/PostingPeriod")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("AC/PostingPeriod/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("AC/PostingPeriod/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("AC/PostingPeriod/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/PostingPeriod/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/PostingPeriod/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("AC/PostingPeriod/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("AC/PostingPeriod")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("AC/PostingPeriod/") + id} 
        }
		
	},

	APPROVAL_Changelog:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Changelog/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Changelog")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Changelog/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Changelog/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Changelog/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Changelog/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Changelog/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Changelog/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Changelog")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Changelog/") + id} 
        }
		
	},

	APPROVAL_Comment:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Comment/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Comment")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Comment/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Comment/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Comment/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Comment/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Comment/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Comment/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Comment")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Comment/") + id} 
        }
		
	},

	APPROVAL_Request:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Request/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Request")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Request/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Request/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Request/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Request/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Request/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Request/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("APPROVAL/Request")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("APPROVAL/Request/") + id} 
        }
		
	},

	BANK_IncomingPayment:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPayment/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPayment")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPayment/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPayment/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPayment/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPayment/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPayment/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPayment/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPayment")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPayment/") + id} 
        }
		
	},

	BANK_IncomingPaymentDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BANK/IncomingPaymentDetail/") + id} 
        }
		
	},

	BANK_PaymentTerm:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BANK/PaymentTerm/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BANK/PaymentTerm")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BANK/PaymentTerm/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BANK/PaymentTerm/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BANK/PaymentTerm/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/PaymentTerm/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/PaymentTerm/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BANK/PaymentTerm/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BANK/PaymentTerm")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BANK/PaymentTerm/") + id} 
        }
		
	},

	BC_RevenueExpenditureComponent:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureComponent/") + id} 
        }
		
	},

	BC_RevenueExpenditureRefCode:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BC/RevenueExpenditureRefCode/") + id} 
        }
		
	},

	BI_Finance_BalanceSheetCategory:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheetCategory/") + id} 
        }
		
	},

	BI_Finance_BalanceSheets:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheets")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Finance/BalanceSheets")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/BalanceSheets/") + id} 
        }
		
	},

	BI_Finance_CashFlow:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/CashFlow/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/CashFlow")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/CashFlow/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/CashFlow/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/CashFlow/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/CashFlow/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/CashFlow/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/CashFlow/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Finance/CashFlow")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/CashFlow/") + id} 
        }
		
	},

	BI_Finance_IncomeStatement:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/IncomeStatement")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Finance/IncomeStatement")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/IncomeStatement/") + id} 
        }
		
	},

	BI_Finance_Management:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/Management/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Finance/Management")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/Management/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Finance/Management/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/Management/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/Management/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/Management/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/Management/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Finance/Management")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Finance/Management/") + id} 
        }
		
	},

	BI_Operating_MarketResearch:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Operating/MarketResearch/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Operating/MarketResearch")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Operating/MarketResearch/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Operating/MarketResearch/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Operating/MarketResearch/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Operating/MarketResearch/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Operating/MarketResearch/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Operating/MarketResearch/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Operating/MarketResearch")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Operating/MarketResearch/") + id} 
        }
		
	},

	BI_Oppotunity:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Oppotunity/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/Oppotunity")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Oppotunity/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/Oppotunity/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/Oppotunity/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Oppotunity/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Oppotunity/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/Oppotunity/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/Oppotunity")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/Oppotunity/") + id} 
        }
		
	},

	BI_ReportTemplate:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplate/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplate")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplate/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplate/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplate/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplate/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplate/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplate/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplate")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplate/") + id} 
        }
		
	},

	BI_ReportTemplateDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplateDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplateDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplateDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplateDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplateDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplateDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplateDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplateDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BI/ReportTemplateDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BI/ReportTemplateDetail/") + id} 
        }
		
	},

	BP_Partner:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BP/Partner/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BP/Partner")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BP/Partner/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BP/Partner/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BP/Partner/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BP/Partner/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BP/Partner/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BP/Partner/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BP/Partner")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BP/Partner/") + id} 
        }
		
	},

	BRA_Branch:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BRA/Branch/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BRA/Branch")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BRA/Branch/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BRA/Branch/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BRA/Branch/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BRA/Branch/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BRA/Branch/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BRA/Branch/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BRA/Branch")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BRA/Branch/") + id} 
        }
		
	},

	BSC_RevenueTarget:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BSC/RevenueTarget/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("BSC/RevenueTarget")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("BSC/RevenueTarget/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("BSC/RevenueTarget/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("BSC/RevenueTarget/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BSC/RevenueTarget/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BSC/RevenueTarget/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("BSC/RevenueTarget/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("BSC/RevenueTarget")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("BSC/RevenueTarget/") + id} 
        }
		
	},

	CRM_Activity:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Activity/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Activity")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Activity/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Activity/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Activity/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Activity/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Activity/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Activity/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Activity")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Activity/") + id} 
        }
		
	},

	CRM_Attendance:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Attendance/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Attendance")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Attendance/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Attendance/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Attendance/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Attendance/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Attendance/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Attendance/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Attendance")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Attendance/") + id} 
        }
		
	},

	CRM_BusinessPartnerGroup:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/BusinessPartnerGroup/") + id} 
        }
		
	},

	CRM_Campaign:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Campaign/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Campaign")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Campaign/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Campaign/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Campaign/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Campaign/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Campaign/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Campaign/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Campaign")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Campaign/") + id} 
        }
		
	},

	CRM_CampaignMember:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/CampaignMember/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/CampaignMember")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/CampaignMember/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/CampaignMember/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/CampaignMember/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/CampaignMember/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/CampaignMember/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/CampaignMember/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/CampaignMember")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/CampaignMember/") + id} 
        }
		
	},

	CRM_Config:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Config/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Config")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Config/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Config/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Config/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Config/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Config/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Config/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Config")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Config/") + id} 
        }
		
	},

	CRM_Contact:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Contact/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Contact")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Contact/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Contact/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Contact/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Contact/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Contact/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Contact/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Contact")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Contact/") + id} 
        }
		
	},

	CRM_ContactReference:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/ContactReference/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/ContactReference")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/ContactReference/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/ContactReference/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/ContactReference/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/ContactReference/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/ContactReference/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/ContactReference/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/ContactReference")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/ContactReference/") + id} 
        }
		
	},

	CRM_Contract:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Contract/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Contract")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Contract/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Contract/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Contract/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Contract/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Contract/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Contract/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Contract")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Contract/") + id} 
        }
		
	},

	CRM_Customer:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Customer/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Customer")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Customer/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Customer/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Customer/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Customer/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Customer/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Customer/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Customer")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Customer/") + id} 
        }
		
	},

	CRM_Lead:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Lead/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Lead")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Lead/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Lead/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Lead/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Lead/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Lead/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Lead/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Lead")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Lead/") + id} 
        }
		
	},

	CRM_MemberCard:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/MemberCard/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/MemberCard")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/MemberCard/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/MemberCard/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/MemberCard/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/MemberCard/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/MemberCard/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/MemberCard/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/MemberCard")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/MemberCard/") + id} 
        }
		
	},

	CRM_Opportunity:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Opportunity/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Opportunity")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Opportunity/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Opportunity/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Opportunity/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Opportunity/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Opportunity/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Opportunity/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Opportunity")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Opportunity/") + id} 
        }
		
	},

	CRM_Outlets:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Outlets/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Outlets")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Outlets/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Outlets/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Outlets/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Outlets/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Outlets/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Outlets/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Outlets")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Outlets/") + id} 
        }
		
	},

	CRM_PartnerAddress:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerAddress/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerAddress")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerAddress/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerAddress/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerAddress/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerAddress/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerAddress/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerAddress/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerAddress")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerAddress/") + id} 
        }
		
	},

	CRM_PartnerBankAccount:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerBankAccount/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerBankAccount")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerBankAccount/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerBankAccount/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerBankAccount/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerBankAccount/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerBankAccount/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerBankAccount/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/PartnerBankAccount")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/PartnerBankAccount/") + id} 
        }
		
	},

	CRM_PersonInfo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/PersonInfo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/PersonInfo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/PersonInfo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/PersonInfo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/PersonInfo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PersonInfo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PersonInfo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/PersonInfo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/PersonInfo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/PersonInfo/") + id} 
        }
		
	},

	CRM_Quotation:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Quotation/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Quotation")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Quotation/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Quotation/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Quotation/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Quotation/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Quotation/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Quotation/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Quotation")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Quotation/") + id} 
        }
		
	},

	CRM_Route:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Route/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Route")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Route/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Route/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Route/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Route/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Route/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Route/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Route")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Route/") + id} 
        }
		
	},

	CRM_RouteDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/RouteDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/RouteDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/RouteDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/RouteDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/RouteDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/RouteDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/RouteDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/RouteDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/RouteDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/RouteDetail/") + id} 
        }
		
	},

	CRM_Voucher:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Voucher/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("CRM/Voucher")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Voucher/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("CRM/Voucher/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("CRM/Voucher/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Voucher/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Voucher/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("CRM/Voucher/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("CRM/Voucher")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("CRM/Voucher/") + id} 
        }
		
	},

	FINANCE_GeneralLedger:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("FINANCE/GeneralLedger/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("FINANCE/GeneralLedger")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("FINANCE/GeneralLedger/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("FINANCE/GeneralLedger/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("FINANCE/GeneralLedger/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("FINANCE/GeneralLedger/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("FINANCE/GeneralLedger/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("FINANCE/GeneralLedger/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("FINANCE/GeneralLedger")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("FINANCE/GeneralLedger/") + id} 
        }
		
	},

	FINANCE_TaxDefinition:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("FINANCE/TaxDefinition/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("FINANCE/TaxDefinition")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("FINANCE/TaxDefinition/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("FINANCE/TaxDefinition/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("FINANCE/TaxDefinition/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("FINANCE/TaxDefinition/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("FINANCE/TaxDefinition/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("FINANCE/TaxDefinition/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("FINANCE/TaxDefinition")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("FINANCE/TaxDefinition/") + id} 
        }
		
	},

	HRM_DeductionOnSalary:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/DeductionOnSalary/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/DeductionOnSalary")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/DeductionOnSalary/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/DeductionOnSalary/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/DeductionOnSalary/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/DeductionOnSalary/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/DeductionOnSalary/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/DeductionOnSalary/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/DeductionOnSalary")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/DeductionOnSalary/") + id} 
        }
		
	},

	HRM_OpenSchedule:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/OpenSchedule/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/OpenSchedule")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/OpenSchedule/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/OpenSchedule/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/OpenSchedule/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/OpenSchedule/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/OpenSchedule/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/OpenSchedule/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/OpenSchedule")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/OpenSchedule/") + id} 
        }
		
	},

	HRM_PayrollElement:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollElement/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollElement")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollElement/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollElement/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollElement/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollElement/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollElement/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollElement/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollElement")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollElement/") + id} 
        }
		
	},

	HRM_PayrollPaySheetMaster:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMaster/") + id} 
        }
		
	},

	HRM_PayrollPaySheetMasterSalaryDecision:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PayrollPaySheetMasterSalaryDecision/") + id} 
        }
		
	},

	HRM_PersonalIncomePaymentProcess:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PersonalIncomePaymentProcess/") + id} 
        }
		
	},

	HRM_PolAllowance:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowance/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowance")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowance/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowance/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowance/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowance/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowance/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowance/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowance")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowance/") + id} 
        }
		
	},

	HRM_PolAllowanceApplyFor:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolAllowanceApplyFor/") + id} 
        }
		
	},

	HRM_PolCompulsoryInsurance:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsurance/") + id} 
        }
		
	},

	HRM_PolCompulsoryInsuranceApplyFor:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolCompulsoryInsuranceApplyFor/") + id} 
        }
		
	},

	HRM_PolicyHoliday:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyHoliday/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyHoliday")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyHoliday/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyHoliday/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyHoliday/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyHoliday/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyHoliday/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyHoliday/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyHoliday")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyHoliday/") + id} 
        }
		
	},

	HRM_PolicyPaidTimeOff:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOff/") + id} 
        }
		
	},

	HRM_PolicyPaidTimeOffGrantsByLengthOfServices:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolicyPaidTimeOffGrantsByLengthOfServices/") + id} 
        }
		
	},

	HRM_PolWelfare:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfare/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfare")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfare/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfare/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfare/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfare/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfare/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfare/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfare")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfare/") + id} 
        }
		
	},

	HRM_PolWelfareApplyFor:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/PolWelfareApplyFor/") + id} 
        }
		
	},

	HRM_Shift:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Shift/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Shift")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Shift/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Shift/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/Shift/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Shift/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Shift/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Shift/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/Shift")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/Shift/") + id} 
        }
		
	},

	HRM_ShiftInTimesheet:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/ShiftInTimesheet")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/ShiftInTimesheet")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/ShiftInTimesheet/") + id} 
        }
		
	},

	HRM_Staff:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Staff")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/Staff")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/") + id} 
        }
		
	},

	HRM_Staff_ConcurrentPosition:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/Staff/ConcurrentPosition/") + id} 
        }
		
	},

	HRM_StaffAcademicLevel:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAcademicLevel")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAcademicLevel")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAcademicLevel/") + id} 
        }
		
	},

	HRM_StaffAddress:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAddress/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAddress")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAddress/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAddress/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAddress/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAddress/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAddress/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAddress/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAddress")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAddress/") + id} 
        }
		
	},

	HRM_StaffAllowance:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAllowance/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAllowance")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAllowance/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAllowance/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAllowance/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAllowance/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAllowance/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAllowance/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAllowance")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAllowance/") + id} 
        }
		
	},

	HRM_StaffAnotherSkill:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAnotherSkill")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAnotherSkill")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAnotherSkill/") + id} 
        }
		
	},

	HRM_StaffAppointDecision:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAppointDecision/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAppointDecision")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAppointDecision/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAppointDecision/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAppointDecision/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAppointDecision/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAppointDecision/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAppointDecision/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffAppointDecision")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffAppointDecision/") + id} 
        }
		
	},

	HRM_StaffBank:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBank/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBank")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBank/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBank/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBank/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBank/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBank/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBank/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBank")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBank/") + id} 
        }
		
	},

	HRM_StaffBasicInfo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBasicInfo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBasicInfo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBasicInfo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBasicInfo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBasicInfo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBasicInfo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBasicInfo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBasicInfo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBasicInfo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBasicInfo/") + id} 
        }
		
	},

	HRM_StaffBounusOnSalary:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffBounusOnSalary/") + id} 
        }
		
	},

	HRM_StaffCompulsoryInsurance:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCompulsoryInsurance/") + id} 
        }
		
	},

	HRM_StaffConcurrentPosition:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentPosition/") + id} 
        }
		
	},

	HRM_StaffConcurrentProbationryPosition:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffConcurrentProbationryPosition/") + id} 
        }
		
	},

	HRM_StaffCurrentWorking:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCurrentWorking")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffCurrentWorking")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffCurrentWorking/") + id} 
        }
		
	},

	HRM_StaffDeductionOnSalary:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffDeductionOnSalary/") + id} 
        }
		
	},

	HRM_StaffFamily:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffFamily/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffFamily")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffFamily/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffFamily/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffFamily/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffFamily/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffFamily/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffFamily/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffFamily")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffFamily/") + id} 
        }
		
	},

	HRM_StaffForeignLanguage:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffForeignLanguage")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffForeignLanguage")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffForeignLanguage/") + id} 
        }
		
	},

	HRM_StaffIdentityCardAndPIT:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffIdentityCardAndPIT/") + id} 
        }
		
	},

	HRM_StaffInsurancePaymentProcess:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInsurancePaymentProcess/") + id} 
        }
		
	},

	HRM_StaffInternetAccount:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInternetAccount/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInternetAccount")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInternetAccount/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInternetAccount/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInternetAccount/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInternetAccount/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInternetAccount/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInternetAccount/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffInternetAccount")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffInternetAccount/") + id} 
        }
		
	},

	HRM_StaffLaborContract:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLaborContract/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLaborContract")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLaborContract/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLaborContract/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLaborContract/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLaborContract/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLaborContract/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLaborContract/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLaborContract")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLaborContract/") + id} 
        }
		
	},

	HRM_StaffLearningProcess:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLearningProcess/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLearningProcess")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLearningProcess/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLearningProcess/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLearningProcess/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLearningProcess/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLearningProcess/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLearningProcess/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffLearningProcess")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffLearningProcess/") + id} 
        }
		
	},

	HRM_StaffPhone:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPhone/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPhone")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPhone/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPhone/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPhone/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPhone/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPhone/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPhone/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPhone")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPhone/") + id} 
        }
		
	},

	HRM_StaffPTOEnrollment:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffPTOEnrollment/") + id} 
        }
		
	},

	HRM_StaffRecruitmentInfo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffRecruitmentInfo/") + id} 
        }
		
	},

	HRM_StaffResignationInfo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffResignationInfo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffResignationInfo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffResignationInfo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffResignationInfo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffResignationInfo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffResignationInfo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffResignationInfo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffResignationInfo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffResignationInfo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffResignationInfo/") + id} 
        }
		
	},

	HRM_StaffSalaryDecision:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSalaryDecision")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSalaryDecision")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSalaryDecision/") + id} 
        }
		
	},

	HRM_StaffSchedule:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSchedule/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSchedule")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSchedule/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSchedule/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSchedule/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSchedule/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSchedule/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSchedule/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSchedule")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSchedule/") + id} 
        }
		
	},

	HRM_StaffSpecializedField:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedField/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedField")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedField/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedField/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedField/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedField/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedField/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedField/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedField")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedField/") + id} 
        }
		
	},

	HRM_StaffSpecializedSkill:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffSpecializedSkill/") + id} 
        }
		
	},

	HRM_StaffStaffAndFamilyJob:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffStaffAndFamilyJob/") + id} 
        }
		
	},

	HRM_StaffTimesheetEnrollment:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTimesheetEnrollment/") + id} 
        }
		
	},

	HRM_StaffTrainingProcess:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcess")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcess")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcess/") + id} 
        }
		
	},

	HRM_StaffTrainingProcessSkill:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffTrainingProcessSkill/") + id} 
        }
		
	},

	HRM_StaffWelfare:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWelfare/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWelfare")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWelfare/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWelfare/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWelfare/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWelfare/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWelfare/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWelfare/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWelfare")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWelfare/") + id} 
        }
		
	},

	HRM_StaffWorkExperience:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkExperience/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkExperience")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkExperience/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkExperience/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkExperience/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkExperience/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkExperience/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkExperience/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkExperience")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkExperience/") + id} 
        }
		
	},

	HRM_StaffWorkingDiary:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkingDiary")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/StaffWorkingDiary")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/StaffWorkingDiary/") + id} 
        }
		
	},

	HRM_Timesheet:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Timesheet/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/Timesheet")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Timesheet/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/Timesheet/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/Timesheet/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Timesheet/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Timesheet/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/Timesheet/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/Timesheet")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/Timesheet/") + id} 
        }
		
	},

	HRM_TimesheetCheckInCode:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetCheckInCode/") + id} 
        }
		
	},

	HRM_TimesheetLog:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetLog/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetLog")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetLog/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetLog/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetLog/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetLog/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetLog/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetLog/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("HRM/TimesheetLog")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("HRM/TimesheetLog/") + id} 
        }
		
	},

	LIST_ContractTemplate:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/ContractTemplate/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/ContractTemplate")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/ContractTemplate/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/ContractTemplate/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/ContractTemplate/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/ContractTemplate/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/ContractTemplate/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/ContractTemplate/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/ContractTemplate")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/ContractTemplate/") + id} 
        }
		
	},

	LIST_Country:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/Country/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/Country")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/Country/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/Country/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/Country/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Country/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Country/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Country/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/Country")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/Country/") + id} 
        }
		
	},

	LIST_District:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/District/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/District")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/District/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/District/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/District/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/District/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/District/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/District/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/District")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/District/") + id} 
        }
		
	},

	LIST_ElementOfSalary:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/ElementOfSalary/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/ElementOfSalary")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/ElementOfSalary/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/ElementOfSalary/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/ElementOfSalary/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/ElementOfSalary/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/ElementOfSalary/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/ElementOfSalary/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/ElementOfSalary")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/ElementOfSalary/") + id} 
        }
		
	},

	LIST_General:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/General/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/General")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/General/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/General/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/General/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/General/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/General/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/General/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/General")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/General/") + id} 
        }
		
	},

	LIST_PayPeriod:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/PayPeriod/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/PayPeriod")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/PayPeriod/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/PayPeriod/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/PayPeriod/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/PayPeriod/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/PayPeriod/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/PayPeriod/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/PayPeriod")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/PayPeriod/") + id} 
        }
		
	},

	LIST_Province:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/Province/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/Province")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/Province/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/Province/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/Province/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Province/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Province/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Province/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/Province")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/Province/") + id} 
        }
		
	},

	LIST_Ward:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/Ward/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("LIST/Ward")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/Ward/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("LIST/Ward/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("LIST/Ward/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Ward/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Ward/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("LIST/Ward/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("LIST/Ward")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("LIST/Ward/") + id} 
        }
		
	},

	MR_CompetiorOrder:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("MR/CompetiorOrder/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("MR/CompetiorOrder")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("MR/CompetiorOrder/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("MR/CompetiorOrder/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("MR/CompetiorOrder/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("MR/CompetiorOrder/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("MR/CompetiorOrder/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("MR/CompetiorOrder/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("MR/CompetiorOrder")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("MR/CompetiorOrder/") + id} 
        }
		
	},

	MR_TrackingCompetitor:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("MR/TrackingCompetitor/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("MR/TrackingCompetitor")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("MR/TrackingCompetitor/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("MR/TrackingCompetitor/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("MR/TrackingCompetitor/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("MR/TrackingCompetitor/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("MR/TrackingCompetitor/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("MR/TrackingCompetitor/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("MR/TrackingCompetitor")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("MR/TrackingCompetitor/") + id} 
        }
		
	},

	OST_Office:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("OST/Office/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("OST/Office")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("OST/Office/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("OST/Office/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("OST/Office/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("OST/Office/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("OST/Office/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("OST/Office/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("OST/Office")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("OST/Office/") + id} 
        }
		
	},

	OST_OfficeGate:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("OST/OfficeGate/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("OST/OfficeGate")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("OST/OfficeGate/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("OST/OfficeGate/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("OST/OfficeGate/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("OST/OfficeGate/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("OST/OfficeGate/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("OST/OfficeGate/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("OST/OfficeGate")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("OST/OfficeGate/") + id} 
        }
		
	},

	PM_Task:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PM/Task/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PM/Task")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PM/Task/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PM/Task/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PM/Task/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PM/Task/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PM/Task/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PM/Task/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PM/Task")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PM/Task/") + id} 
        }
		
	},

	POS_BillTable:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/BillTable/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/BillTable")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/BillTable/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/BillTable/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/BillTable/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/BillTable/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/BillTable/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/BillTable/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/BillTable")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/BillTable/") + id} 
        }
		
	},

	POS_Cash:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Cash/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Cash")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Cash/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Cash/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/Cash/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Cash/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Cash/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Cash/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/Cash")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/Cash/") + id} 
        }
		
	},

	POS_Kitchen:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Kitchen/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Kitchen")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Kitchen/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Kitchen/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/Kitchen/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Kitchen/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Kitchen/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Kitchen/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/Kitchen")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/Kitchen/") + id} 
        }
		
	},

	POS_MemberCardPromotion:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/MemberCardPromotion/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/MemberCardPromotion")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/MemberCardPromotion/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/MemberCardPromotion/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/MemberCardPromotion/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/MemberCardPromotion/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/MemberCardPromotion/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/MemberCardPromotion/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/MemberCardPromotion")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/MemberCardPromotion/") + id} 
        }
		
	},

	POS_Memo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Memo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Memo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Memo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Memo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/Memo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Memo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Memo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Memo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/Memo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/Memo/") + id} 
        }
		
	},

	POS_Menu:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Menu/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Menu")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Menu/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Menu/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/Menu/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Menu/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Menu/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Menu/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/Menu")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/Menu/") + id} 
        }
		
	},

	POS_MenuDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/MenuDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/MenuDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/MenuDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/MenuDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/MenuDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/MenuDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/MenuDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/MenuDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/MenuDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/MenuDetail/") + id} 
        }
		
	},

	POS_Table:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Table/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/Table")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Table/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/Table/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/Table/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Table/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Table/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/Table/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/Table")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/Table/") + id} 
        }
		
	},

	POS_TableGroup:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/TableGroup/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("POS/TableGroup")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("POS/TableGroup/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("POS/TableGroup/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("POS/TableGroup/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/TableGroup/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/TableGroup/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("POS/TableGroup/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("POS/TableGroup")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("POS/TableGroup/") + id} 
        }
		
	},

	PR_PromotionTracking:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PR/PromotionTracking/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PR/PromotionTracking")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PR/PromotionTracking/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PR/PromotionTracking/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PR/PromotionTracking/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PR/PromotionTracking/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PR/PromotionTracking/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PR/PromotionTracking/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PR/PromotionTracking")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PR/PromotionTracking/") + id} 
        }
		
	},

	PROD_BillOfMaterials:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterials/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterials")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterials/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterials/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterials/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterials/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterials/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterials/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterials")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterials/") + id} 
        }
		
	},

	PROD_BillOfMaterialsDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PROD/BillOfMaterialsDetail/") + id} 
        }
		
	},

	PROD_ItemInVendor:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/ItemInVendor/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/ItemInVendor")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/ItemInVendor/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/ItemInVendor/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PROD/ItemInVendor/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/ItemInVendor/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/ItemInVendor/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/ItemInVendor/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PROD/ItemInVendor")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PROD/ItemInVendor/") + id} 
        }
		
	},

	PROD_MRP:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/MRP/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/MRP")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/MRP/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/MRP/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PROD/MRP/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/MRP/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/MRP/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/MRP/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PROD/MRP")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PROD/MRP/") + id} 
        }
		
	},

	PROD_MRPScenario:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/MRPScenario/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PROD/MRPScenario")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/MRPScenario/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PROD/MRPScenario/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PROD/MRPScenario/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/MRPScenario/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/MRPScenario/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PROD/MRPScenario/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PROD/MRPScenario")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PROD/MRPScenario/") + id} 
        }
		
	},

	PURCHASE_Order:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PURCHASE/Order/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PURCHASE/Order")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PURCHASE/Order/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PURCHASE/Order/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/Order/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/Order/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/Order/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/Order/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PURCHASE/Order")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/Order/") + id} 
        }
		
	},

	PURCHASE_OrderDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PURCHASE/OrderDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("PURCHASE/OrderDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("PURCHASE/OrderDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("PURCHASE/OrderDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/OrderDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/OrderDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/OrderDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/OrderDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("PURCHASE/OrderDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("PURCHASE/OrderDetail/") + id} 
        }
		
	},

	SALE_Order:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SALE/Order/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SALE/Order")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SALE/Order/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SALE/Order/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SALE/Order/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SALE/Order/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SALE/Order/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SALE/Order/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SALE/Order")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SALE/Order/") + id} 
        }
		
	},

	SALE_OrderDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SALE/OrderDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SALE/OrderDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SALE/OrderDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SALE/OrderDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SALE/OrderDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SALE/OrderDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SALE/OrderDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SALE/OrderDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SALE/OrderDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SALE/OrderDetail/") + id} 
        }
		
	},

	SHIFT_TimeSheet:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIFT/TimeSheet/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIFT/TimeSheet")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SHIFT/TimeSheet/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SHIFT/TimeSheet/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SHIFT/TimeSheet/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIFT/TimeSheet/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIFT/TimeSheet/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIFT/TimeSheet/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SHIFT/TimeSheet")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SHIFT/TimeSheet/") + id} 
        }
		
	},

	SHIP_Shipment:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/Shipment/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/Shipment")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/Shipment/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/Shipment/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SHIP/Shipment/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/Shipment/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/Shipment/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/Shipment/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SHIP/Shipment")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SHIP/Shipment/") + id} 
        }
		
	},

	SHIP_ShipmentDebt:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDebt/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDebt")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDebt/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDebt/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDebt/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDebt/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDebt/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDebt/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDebt")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDebt/") + id} 
        }
		
	},

	SHIP_ShipmentDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SHIP/ShipmentDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SHIP/ShipmentDetail/") + id} 
        }
		
	},

	SHIP_Vehicle:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/Vehicle/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SHIP/Vehicle")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/Vehicle/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SHIP/Vehicle/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SHIP/Vehicle/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/Vehicle/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/Vehicle/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SHIP/Vehicle/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SHIP/Vehicle")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SHIP/Vehicle/") + id} 
        }
		
	},

	SYS_Apps:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Apps/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Apps")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Apps/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Apps/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Apps/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Apps/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Apps/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Apps/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Apps")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Apps/") + id} 
        }
		
	},

	SYS_Config:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Config/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Config")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Config/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Config/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Config/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Config/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Config/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Config/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Config")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Config/") + id} 
        }
		
	},

	SYS_ConfigOption:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/ConfigOption/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/ConfigOption")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/ConfigOption/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/ConfigOption/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/ConfigOption/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/ConfigOption/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/ConfigOption/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/ConfigOption/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/ConfigOption")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/ConfigOption/") + id} 
        }
		
	},

	SYS_Currency:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Currency/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Currency")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Currency/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Currency/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Currency/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Currency/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Currency/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Currency/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Currency")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Currency/") + id} 
        }
		
	},

	SYS_DataPermissionList:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/DataPermissionList/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/DataPermissionList")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/DataPermissionList/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/DataPermissionList/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/DataPermissionList/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/DataPermissionList/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/DataPermissionList/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/DataPermissionList/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/DataPermissionList")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/DataPermissionList/") + id} 
        }
		
	},

	SYS_Form:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Form/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Form")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Form/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Form/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Form/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Form/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Form/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Form/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Form")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Form/") + id} 
        }
		
	},

	SYS_FormGroup:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/FormGroup/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/FormGroup")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/FormGroup/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/FormGroup/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/FormGroup/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/FormGroup/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/FormGroup/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/FormGroup/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/FormGroup")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/FormGroup/") + id} 
        }
		
	},

	SYS_GlobalConfig:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/GlobalConfig/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/GlobalConfig")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/GlobalConfig/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/GlobalConfig/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/GlobalConfig/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/GlobalConfig/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/GlobalConfig/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/GlobalConfig/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/GlobalConfig")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/GlobalConfig/") + id} 
        }
		
	},

	SYS_Log:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Log/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Log")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Log/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Log/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Log/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Log/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Log/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Log/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Log")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Log/") + id} 
        }
		
	},

	SYS_PermissionList:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/PermissionList/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/PermissionList")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/PermissionList/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/PermissionList/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/PermissionList/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/PermissionList/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/PermissionList/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/PermissionList/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/PermissionList")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/PermissionList/") + id} 
        }
		
	},

	SYS_Printer:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Printer/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Printer")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Printer/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Printer/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Printer/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Printer/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Printer/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Printer/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Printer")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Printer/") + id} 
        }
		
	},

	SYS_Role:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Role/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Role")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Role/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Role/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Role/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Role/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Role/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Role/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Role")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Role/") + id} 
        }
		
	},

	SYS_RuningNo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/RuningNo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/RuningNo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/RuningNo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/RuningNo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/RuningNo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/RuningNo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/RuningNo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/RuningNo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/RuningNo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/RuningNo/") + id} 
        }
		
	},

	SYS_SAP_Databases:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/SAP/Databases/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/SAP/Databases")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/SAP/Databases/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/SAP/Databases/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/SAP/Databases/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/SAP/Databases/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/SAP/Databases/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/SAP/Databases/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/SAP/Databases")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/SAP/Databases/") + id} 
        }
		
	},

	SYS_Status:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Status/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Status")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Status/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Status/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Status/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Status/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Status/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Status/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Status")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Status/") + id} 
        }
		
	},

	SYS_SyncJob:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/SyncJob/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/SyncJob")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/SyncJob/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/SyncJob/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/SyncJob/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/SyncJob/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/SyncJob/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/SyncJob/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/SyncJob")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/SyncJob/") + id} 
        }
		
	},

	SYS_Type:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Type/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/Type")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Type/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/Type/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/Type/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Type/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Type/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/Type/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/Type")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/Type/") + id} 
        }
		
	},

	SYS_UserDevice:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/UserDevice/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/UserDevice")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/UserDevice/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/UserDevice/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/UserDevice/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserDevice/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserDevice/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserDevice/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/UserDevice")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/UserDevice/") + id} 
        }
		
	},

	SYS_UserSetting:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/UserSetting/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/UserSetting")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/UserSetting/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/UserSetting/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/UserSetting/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserSetting/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserSetting/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserSetting/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/UserSetting")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/UserSetting/") + id} 
        }
		
	},

	SYS_UserVoice:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/UserVoice/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/UserVoice")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/UserVoice/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/UserVoice/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/UserVoice/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserVoice/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserVoice/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/UserVoice/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/UserVoice")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/UserVoice/") + id} 
        }
		
	},

	SYS_VeifyPhoneNumber:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("SYS/VeifyPhoneNumber/") + id} 
        }
		
	},

	Version:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("Version/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("Version")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("Version/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("Version/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("Version/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("Version/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("Version/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("Version/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("Version")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("Version/") + id} 
        }
		
	},

	WEB_Category:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Category/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Category")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Category/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Category/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WEB/Category/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Category/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Category/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Category/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WEB/Category")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WEB/Category/") + id} 
        }
		
	},

	WEB_Content:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Content")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WEB/Content")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/") + id} 
        }
		
	},

	WEB_Content_Tag:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Tag/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Tag")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Tag/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Tag/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Tag/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Tag/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Tag/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Tag/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WEB/Content/Tag")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WEB/Content/Tag/") + id} 
        }
		
	},

	WEB_ContentInCategory:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/ContentInCategory/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/ContentInCategory")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/ContentInCategory/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/ContentInCategory/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WEB/ContentInCategory/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/ContentInCategory/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/ContentInCategory/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/ContentInCategory/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WEB/ContentInCategory")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WEB/ContentInCategory/") + id} 
        }
		
	},

	WEB_Tag:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Tag/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WEB/Tag")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Tag/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WEB/Tag/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WEB/Tag/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Tag/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Tag/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WEB/Tag/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WEB/Tag")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WEB/Tag/") + id} 
        }
		
	},

	WH_Branches:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Branches/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Branches")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Branches/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Branches/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/Branches/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Branches/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Branches/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Branches/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/Branches")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/Branches/") + id} 
        }
		
	},

	WH_CashFlows:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/CashFlows/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/CashFlows")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/CashFlows/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/CashFlows/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/CashFlows/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/CashFlows/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/CashFlows/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/CashFlows/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/CashFlows")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/CashFlows/") + id} 
        }
		
	},

	WH_ContactGroups:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ContactGroups/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ContactGroups")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ContactGroups/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ContactGroups/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/ContactGroups/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ContactGroups/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ContactGroups/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ContactGroups/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/ContactGroups")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/ContactGroups/") + id} 
        }
		
	},

	WH_Contacts:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Contacts/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Contacts")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Contacts/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Contacts/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/Contacts/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Contacts/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Contacts/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Contacts/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/Contacts")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/Contacts/") + id} 
        }
		
	},

	WH_GeneralLedgers:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/GeneralLedgers/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/GeneralLedgers")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/GeneralLedgers/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/GeneralLedgers/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/GeneralLedgers/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/GeneralLedgers/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/GeneralLedgers/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/GeneralLedgers/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/GeneralLedgers")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/GeneralLedgers/") + id} 
        }
		
	},

	WH_InvoiceRows:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/InvoiceRows/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/InvoiceRows")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/InvoiceRows/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/InvoiceRows/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/InvoiceRows/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/InvoiceRows/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/InvoiceRows/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/InvoiceRows/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/InvoiceRows")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/InvoiceRows/") + id} 
        }
		
	},

	WH_Invoices:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Invoices/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Invoices")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Invoices/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Invoices/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/Invoices/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Invoices/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Invoices/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Invoices/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/Invoices")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/Invoices/") + id} 
        }
		
	},

	WH_ItemGroups:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ItemGroups/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ItemGroups")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ItemGroups/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ItemGroups/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/ItemGroups/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemGroups/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemGroups/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemGroups/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/ItemGroups")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/ItemGroups/") + id} 
        }
		
	},

	WH_ItemPriceLists:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ItemPriceLists/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ItemPriceLists")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ItemPriceLists/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ItemPriceLists/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/ItemPriceLists/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemPriceLists/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemPriceLists/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemPriceLists/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/ItemPriceLists")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/ItemPriceLists/") + id} 
        }
		
	},

	WH_Items:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Items/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Items")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Items/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Items/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/Items/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Items/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Items/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Items/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/Items")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/Items/") + id} 
        }
		
	},

	WH_ItemUoM:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ItemUoM/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/ItemUoM")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ItemUoM/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/ItemUoM/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/ItemUoM/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemUoM/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemUoM/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/ItemUoM/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/ItemUoM")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/ItemUoM/") + id} 
        }
		
	},

	WH_JournalEntries:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntries/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntries")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntries/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntries/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntries/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntries/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntries/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntries/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntries")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntries/") + id} 
        }
		
	},

	WH_JournalEntryRows:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntryRows/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntryRows")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntryRows/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntryRows/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntryRows/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntryRows/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntryRows/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntryRows/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/JournalEntryRows")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/JournalEntryRows/") + id} 
        }
		
	},

	WH_PostingPeriods:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/PostingPeriods/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/PostingPeriods")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/PostingPeriods/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/PostingPeriods/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/PostingPeriods/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/PostingPeriods/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/PostingPeriods/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/PostingPeriods/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/PostingPeriods")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/PostingPeriods/") + id} 
        }
		
	},

	WH_PriceLists:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/PriceLists/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/PriceLists")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/PriceLists/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/PriceLists/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/PriceLists/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/PriceLists/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/PriceLists/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/PriceLists/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/PriceLists")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/PriceLists/") + id} 
        }
		
	},

	WH_Staff:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Staff/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/Staff")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Staff/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/Staff/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/Staff/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Staff/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Staff/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/Staff/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/Staff")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/Staff/") + id} 
        }
		
	},

	WH_UoM:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/UoM/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/UoM")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/UoM/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/UoM/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/UoM/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/UoM/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/UoM/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/UoM/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/UoM")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/UoM/") + id} 
        }
		
	},

	WH_VTB_Statements:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/VTB/Statements/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WH/VTB/Statements")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WH/VTB/Statements/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WH/VTB/Statements/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WH/VTB/Statements/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/VTB/Statements/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/VTB/Statements/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WH/VTB/Statements/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WH/VTB/Statements")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WH/VTB/Statements/") + id} 
        }
		
	},

	WMS_Adjustment:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Adjustment/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Adjustment")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Adjustment/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Adjustment/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Adjustment/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Adjustment/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Adjustment/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Adjustment/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Adjustment")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Adjustment/") + id} 
        }
		
	},

	WMS_AdjustmentDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/AdjustmentDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/AdjustmentDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/AdjustmentDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/AdjustmentDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/AdjustmentDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/AdjustmentDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/AdjustmentDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/AdjustmentDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/AdjustmentDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/AdjustmentDetail/") + id} 
        }
		
	},

	WMS_Carrier:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Carrier/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Carrier")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Carrier/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Carrier/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Carrier/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Carrier/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Carrier/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Carrier/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Carrier")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Carrier/") + id} 
        }
		
	},

	WMS_Carton:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Carton/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Carton")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Carton/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Carton/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Carton/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Carton/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Carton/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Carton/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Carton")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Carton/") + id} 
        }
		
	},

	WMS_CartonGroup:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/CartonGroup/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/CartonGroup")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/CartonGroup/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/CartonGroup/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/CartonGroup/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/CartonGroup/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/CartonGroup/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/CartonGroup/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/CartonGroup")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/CartonGroup/") + id} 
        }
		
	},

	WMS_Item:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Item/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Item")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Item/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Item/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Item/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Item/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Item/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Item/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Item")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Item/") + id} 
        }
		
	},

	WMS_ItemGroup:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemGroup/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemGroup")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemGroup/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemGroup/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemGroup/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemGroup/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemGroup/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemGroup/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/ItemGroup")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemGroup/") + id} 
        }
		
	},

	WMS_ItemInLocation:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInLocation/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInLocation")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInLocation/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInLocation/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInLocation/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInLocation/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInLocation/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInLocation/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInLocation")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInLocation/") + id} 
        }
		
	},

	WMS_ItemInWarehouseConfig:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemInWarehouseConfig/") + id} 
        }
		
	},

	WMS_ItemUoM:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemUoM/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ItemUoM")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemUoM/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ItemUoM/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemUoM/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemUoM/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemUoM/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemUoM/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/ItemUoM")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/ItemUoM/") + id} 
        }
		
	},

	WMS_LicencePlateNumber:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/LicencePlateNumber/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/LicencePlateNumber")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/LicencePlateNumber/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/LicencePlateNumber/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/LicencePlateNumber/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LicencePlateNumber/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LicencePlateNumber/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LicencePlateNumber/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/LicencePlateNumber")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/LicencePlateNumber/") + id} 
        }
		
	},

	WMS_Location:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Location/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Location")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Location/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Location/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Location/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Location/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Location/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Location/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Location")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Location/") + id} 
        }
		
	},

	WMS_Lot:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Lot/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Lot")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Lot/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Lot/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Lot/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Lot/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Lot/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Lot/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Lot")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Lot/") + id} 
        }
		
	},

	WMS_LotAttribute:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/LotAttribute/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/LotAttribute")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/LotAttribute/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/LotAttribute/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/LotAttribute/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LotAttribute/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LotAttribute/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LotAttribute/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/LotAttribute")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/LotAttribute/") + id} 
        }
		
	},

	WMS_LotLPNLocation:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/LotLPNLocation/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/LotLPNLocation")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/LotLPNLocation/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/LotLPNLocation/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/LotLPNLocation/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LotLPNLocation/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LotLPNLocation/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/LotLPNLocation/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/LotLPNLocation")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/LotLPNLocation/") + id} 
        }
		
	},

	WMS_PriceList:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceList/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceList")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceList/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceList/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceList/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceList/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceList/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceList/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/PriceList")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceList/") + id} 
        }
		
	},

	WMS_PriceListDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListDetail/") + id} 
        }
		
	},

	WMS_PriceListVersion:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersion/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersion")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersion/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersion/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersion/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersion/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersion/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersion/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersion")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersion/") + id} 
        }
		
	},

	WMS_PriceListVersionDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersionDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/PriceListVersionDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/PriceListVersionDetail/") + id} 
        }
		
	},

	WMS_PutawayStrategy:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategy/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategy")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategy/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategy/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategy/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategy/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategy/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategy/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategy")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategy/") + id} 
        }
		
	},

	WMS_PutawayStrategyDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/PutawayStrategyDetail/") + id} 
        }
		
	},

	WMS_Receipt:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Receipt/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Receipt")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Receipt/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Receipt/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Receipt/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Receipt/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Receipt/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Receipt/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Receipt")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Receipt/") + id} 
        }
		
	},

	WMS_ReceiptDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptDetail/") + id} 
        }
		
	},

	WMS_ReceiptPalletization:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptPalletization/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptPalletization")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptPalletization/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptPalletization/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptPalletization/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptPalletization/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptPalletization/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptPalletization/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/ReceiptPalletization")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/ReceiptPalletization/") + id} 
        }
		
	},

	WMS_Storer:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Storer/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Storer")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Storer/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Storer/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Storer/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Storer/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Storer/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Storer/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Storer")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Storer/") + id} 
        }
		
	},

	WMS_TaskDispatchStrategy:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategy/") + id} 
        }
		
	},

	WMS_TaskDispatchStrategyDetail:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/TaskDispatchStrategyDetail/") + id} 
        }
		
	},

	WMS_Transaction:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Transaction/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Transaction")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Transaction/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Transaction/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Transaction/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Transaction/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Transaction/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Transaction/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Transaction")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Transaction/") + id} 
        }
		
	},

	WMS_UoM:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/UoM/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/UoM")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/UoM/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/UoM/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/UoM/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/UoM/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/UoM/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/UoM/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/UoM")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/UoM/") + id} 
        }
		
	},

	WMS_UoMGroup:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/UoMGroup/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/UoMGroup")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/UoMGroup/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/UoMGroup/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/UoMGroup/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/UoMGroup/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/UoMGroup/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/UoMGroup/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/UoMGroup")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/UoMGroup/") + id} 
        }
		
	},

	WMS_Vendor:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Vendor/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Vendor")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Vendor/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Vendor/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Vendor/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Vendor/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Vendor/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Vendor/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Vendor")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Vendor/") + id} 
        }
		
	},

	WMS_WarehouseInfo:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/WarehouseInfo/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/WarehouseInfo")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/WarehouseInfo/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/WarehouseInfo/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/WarehouseInfo/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/WarehouseInfo/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/WarehouseInfo/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/WarehouseInfo/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/WarehouseInfo")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/WarehouseInfo/") + id} 
        }
		
	},

	WMS_WavePlanning:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/WavePlanning/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/WavePlanning")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/WavePlanning/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/WavePlanning/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/WavePlanning/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/WavePlanning/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/WavePlanning/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/WavePlanning/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/WavePlanning")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/WavePlanning/") + id} 
        }
		
	},

	WMS_Zone:{
        getSearchList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Zone/Search")}  
        },
        getList:{
            method: "GET",
            url: function(){return ApiSetting.apiDomain("WMS/Zone")}  
        },
        getExport:{
            method: "DOWNLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Zone/Export")}  
        },
        postImport:{
            method: "UPLOAD",
            url: function(){return ApiSetting.apiDomain("WMS/Zone/Import")}  
        },
        getItem:{
            method: "GET",
            url: function(id){return ApiSetting.apiDomain("WMS/Zone/") + id} 
        },
        putItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Zone/") + id} 
        },
        disableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Zone/Disable/") + id} 
        },
        enableItem:{
            method: "PUT",
            url: function(id){return ApiSetting.apiDomain("WMS/Zone/Enable/") + id} 
        },
        postItem:{
            method: "POST",
            url: function(){return ApiSetting.apiDomain("WMS/Zone")}
        },
        delItem:{
            method: "DELETE",
            url: function(id){return ApiSetting.apiDomain("WMS/Zone/") + id} 
        }
		
	},


};


