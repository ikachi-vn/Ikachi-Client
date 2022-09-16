import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItProjectManagementPage } from './it-project-management.page';

const routes: Routes = [
  {
    path: '',
    component: ItProjectManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItProjectManagementPageRoutingModule {}
