import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectApprovalListComponent } from './project-approval-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectApprovalListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectApprovalListRoutingModule { }
