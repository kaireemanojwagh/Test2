import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectApprovalEditComponent } from './project-approval-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectApprovalEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectApprovalEditRoutingModule { }
