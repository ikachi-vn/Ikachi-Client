import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAnalyticsPage } from './web-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: WebAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebAnalyticsPageRoutingModule {}
