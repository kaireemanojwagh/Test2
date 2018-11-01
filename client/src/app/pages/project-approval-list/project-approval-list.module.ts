import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectApprovalListComponent } from './project-approval-list.component';
import { ProjectApprovalListRoutingModule } from './project-approval-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProjectApprovalListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProjectApprovalListComponent
  ]
})
export class ProjectApprovalListModule { }
