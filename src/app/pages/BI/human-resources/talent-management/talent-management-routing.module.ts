import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentManagementPage } from './talent-management.page';

const routes: Routes = [
  {
    path: '',
    component: TalentManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalentManagementPageRoutingModule {}
