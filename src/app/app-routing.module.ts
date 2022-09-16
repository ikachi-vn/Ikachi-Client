import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/app.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  //   canActivate: [AuthGuard]
  // },



  //CRM
  { path: 'contact-mobile', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'contact-mobile/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },

  { path: 'attendance-booking', loadChildren: () => import('./pages/CRM/attendance-booking/attendance-booking.module').then(m => m.AttendanceBookingPageModule), canActivate: [AuthGuard] },
  { path: 'attendance-booking/:id', loadChildren: () => import('./pages/CRM/attendance-booking-detail/attendance-booking-detail.module').then(m => m.AttendanceBookingDetailPageModule), canActivate: [AuthGuard] },

  { path: 'business-partner', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'business-partner/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },
  { path: 'distributor', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'distributor/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },
  { path: 'storer', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'storer/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },
  { path: 'carrier', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'carrier/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },
  { path: 'outlets', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'outlets/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },
  { path: 'customer', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'customer/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },
  { path: 'vendor', loadChildren: () => import('./pages/CRM/business-partner/business-partner.module').then(m => m.BusinessPartnerPageModule), canActivate: [AuthGuard] },
  { path: 'vendor/:id', loadChildren: () => import('./pages/CRM/business-partner-detail/business-partner-detail.module').then(m => m.ContactDetailPageModule), canActivate: [AuthGuard] },

  { path: 'mcp', loadChildren: () => import('./pages/CRM/mcp/mcp.module').then(m => m.MCPPageModule), canActivate: [AuthGuard] },
  { path: 'mcp/:id', loadChildren: () => import('./pages/CRM/mcp-detail/mcp-detail.module').then(m => m.MCPDetailPageModule), canActivate: [AuthGuard] },



  //Ikachi
  { path: 'summary-report', loadChildren: () => import('./pages/Ikachi-temp/summary-report/summary-report.module').then(m => m.SummaryReportPageModule), canActivate: [AuthGuard] },
  // { path: 'summary-detail-report', loadChildren: () => import('./pages/Ikachi-temp/summary-detail-report/summary-detail-report.module').then( m => m.SummaryDetailReportPageModule), canActivate: [AuthGuard] },
  { path: 'surgery-appointment', loadChildren: () => import('./pages/Ikachi-temp/surgery-appointment-list-mobile/surgery-appointment-list-mobile.module').then( m => m.SurgeryAppointmentListMobilePageModule), canActivate: [AuthGuard] },
  { path: 'surgery-appointment/:id', loadChildren: () => import('./pages/Ikachi-temp/surgery-appointment-detail/surgery-appointment-detail.module').then( m => m.SurgeryAppointmentDetailPageModule), canActivate: [AuthGuard] },
  { path: 'requests', loadChildren: () => import('./pages/Ikachi-temp/requests/requests.module').then( m => m.RequestsPageModule), canActivate: [AuthGuard] },
  { path: 'revenue-detail-report', loadChildren: () => import('./pages/Ikachi-temp/revenue-detail-report/revenue-detail-report.module').then( m => m.RevenueDetailReportPageModule), canActivate: [AuthGuard] },

  //FINANCIALS
  { path: 'general-ledger', loadChildren: () => import('./pages/FINANCIAL/general-ledger/general-ledger.module').then(m => m.GeneralLedgerPageModule), canActivate: [AuthGuard] },
  { path: 'general-ledger/:id', loadChildren: () => import('./pages/FINANCIAL/general-ledger-detail/general-ledger-detail.module').then(m => m.GeneralLedgerDetailPageModule), canActivate: [AuthGuard] },
  { path: 'tax-definition', loadChildren: () => import('./pages/FINANCIAL/tax-definition/tax-definition.module').then(m => m.TaxDefinitionPageModule), canActivate: [AuthGuard] },
  { path: 'tax-definition/:id', loadChildren: () => import('./pages/FINANCIAL/tax-definition-detail/tax-definition-detail.module').then(m => m.TaxDefinitionDetailPageModule), canActivate: [AuthGuard] },
  

  //PURCHASE
  { path: 'purchase-request', loadChildren: () => import('./pages/PURCHASE/purchase-order/purchase-order.module').then(m => m.PurchaseOrderPageModule), canActivate: [AuthGuard] },
  { path: 'purchase-request/:id', loadChildren: () => import('./pages/PURCHASE/purchase-order-detail/purchase-order-detail.module').then(m => m.PurchaseOrderDetailPageModule), canActivate: [AuthGuard] },
  { path: 'purchase-quotation', loadChildren: () => import('./pages/PURCHASE/purchase-order/purchase-order.module').then(m => m.PurchaseOrderPageModule), canActivate: [AuthGuard] },
  { path: 'purchase-quotation/:id', loadChildren: () => import('./pages/PURCHASE/purchase-order-detail/purchase-order-detail.module').then(m => m.PurchaseOrderDetailPageModule), canActivate: [AuthGuard] },
  { path: 'purchase-order', loadChildren: () => import('./pages/PURCHASE/purchase-order/purchase-order.module').then(m => m.PurchaseOrderPageModule), canActivate: [AuthGuard] },
  { path: 'purchase-order/:id', loadChildren: () => import('./pages/PURCHASE/purchase-order-detail/purchase-order-detail.module').then(m => m.PurchaseOrderDetailPageModule), canActivate: [AuthGuard] },
  { path: 'purchase-order-note', loadChildren: () => import('./pages/PURCHASE/purchase-order-note/purchase-order-note.module').then(m => m.PurchaseOrderNotePageModule), canActivate: [AuthGuard] },
  { path: 'purchase-order-note/:id', loadChildren: () => import('./pages/PURCHASE/purchase-order-note/purchase-order-note.module').then(m => m.PurchaseOrderNotePageModule), canActivate: [AuthGuard] },


  //PRODUCTION
  { path: 'bill-of-materials', loadChildren: () => import('./pages/PROD/bill-of-materials/bill-of-materials.module').then(m => m.BillOfMaterialsPageModule), canActivate: [AuthGuard] },
  { path: 'bill-of-materials/:id', loadChildren: () => import('./pages/PROD/bill-of-materials-detail/bill-of-materials-detail.module').then(m => m.BillOfMaterialsDetailPageModule), canActivate: [AuthGuard] },
  { path: 'bill-of-materials/note/:id', loadChildren: () => import('./pages/PROD/bill-of-materials-note/bill-of-materials-note.module').then(m => m.BillOfMaterialsNotePageModule), canActivate: [AuthGuard] },
  
  { path: 'order-recommendation', loadChildren: () => import('./pages/PROD/order-recommendation/order-recommendation.module').then(m => m.OrderRecommendationPageModule), canActivate: [AuthGuard] },


  



  //OST
  { path: 'branch', loadChildren: () => import('./pages/OST/branch/branch.module').then(m => m.BranchPageModule), canActivate: [AuthGuard] },
  { path: 'branch/:id', loadChildren: () => import('./pages/OST/branch-detail/branch-detail.module').then(m => m.BranchDetailPageModule), canActivate: [AuthGuard] },
  { path: 'office', loadChildren: () => import('./pages/OST/office/office.module').then(m => m.OfficePageModule), canActivate: [AuthGuard] },
  { path: 'office/:id', loadChildren: () => import('./pages/OST/office-detail/office-detail.module').then(m => m.OfficeDetailPageModule), canActivate: [AuthGuard] },


  //HRM
  { path: 'staff', loadChildren: () => import('./pages/HRM/staff/staff.module').then(m => m.StaffPageModule), canActivate: [AuthGuard] },
  { path: 'staff/:id', loadChildren: () => import('./pages/HRM/staff-detail/staff-detail.module').then(m => m.StaffDetailPageModule), canActivate: [AuthGuard] },


  //ADMIN
  { path: 'form', loadChildren: () => import('./pages/ADMIN/form/form.module').then(m => m.FormPageModule), canActivate: [AuthGuard] },
  { path: 'form/:id', loadChildren: () => import('./pages/ADMIN/form-detail/form-detail.module').then(m => m.FormDetailPageModule), canActivate: [AuthGuard] },
  { path: 'permission', loadChildren: () => import('./pages/ADMIN/permission/permission.module').then(m => m.PermissionPageModule), canActivate: [AuthGuard] },
  { path: 'config', loadChildren: () => import('./pages/ADMIN/config/config.module').then(m => m.ConfigPageModule), canActivate: [AuthGuard] },
  { path: 'config/:segment/:id', loadChildren: () => import('./pages/ADMIN/config/config.module').then(m => m.ConfigPageModule), canActivate: [AuthGuard] },
  { path: 'price-list', loadChildren: () => import('./pages/ADMIN/price-list/price-list.module').then( m => m.PriceListPageModule), canActivate: [AuthGuard] },
  { path: 'price-list/:id', loadChildren: () => import('./pages/ADMIN/price-list-detail/price-list-detail.module').then(m => m.PriceListDetailPageModule), canActivate: [AuthGuard] },

  //SYSTEM
  { path: 'login', loadChildren: () => import('./pages/SYS/login/login.module').then(m => m.LoginPageModule) },
  { path: 'about', loadChildren: () => import('./pages/SYS/about/about.module').then(m => m.AboutPageModule) },
  { path: 'not-found', loadChildren: () => import('./pages/SYS/not-found/not-found.module').then(m => m.NotFoundPageModule), canActivate: [AuthGuard] },
  { path: 'setting', loadChildren: () => import('./pages/SYS/setting/setting.module').then(m => m.SettingPageModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('./pages/SYS/profile/profile.module').then(m => m.ProfilePageModule), canActivate: [AuthGuard] },
  { path: 'default', loadChildren: () => import('./pages/SYS/default/default.module').then(m => m.DefaultPageModule), canActivate: [AuthGuard] },
  { path: 'system-status', loadChildren: () => import('./pages/SYS/system-status/system-status.module').then(m => m.SystemStatusPageModule), canActivate: [AuthGuard] },
  { path: 'system-status/:id', loadChildren: () => import('./pages/SYS/system-status-detail/system-status-detail.module').then(m => m.SystemStatusDetailPageModule), canActivate: [AuthGuard] },
  { path: 'system-type', loadChildren: () => import('./pages/SYS/system-type/system-type.module').then(m => m.SystemTypePageModule), canActivate: [AuthGuard] },
  { path: 'system-type/:id', loadChildren: () => import('./pages/SYS/system-type-detail/system-type-detail.module').then(m => m.SystemTypeDetailPageModule), canActivate: [AuthGuard] },
  
  // // Request
  { path: 'request', loadChildren: () => import('./pages/APPROVAL/request/request.module').then( m => m.RequestPageModule), canActivate: [AuthGuard] },
  { path: 'request/:id', loadChildren: () => import('./pages/APPROVAL/request-detail/request-detail.module').then( m => m.RequestDetailPageModule), canActivate: [AuthGuard] },

  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },

  { path: '**', redirectTo: '/not-found' },
  {
    path: 'review-pdf',
    loadChildren: () => import('./pages/Ikachi-temp/review-pdf/review-pdf.module').then( m => m.ReviewPdfPageModule)
  },








];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
