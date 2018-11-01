import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectApprovalEditComponent } from './project-approval-edit.component';
import { ProjectApprovalEditRoutingModule } from './project-approval-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProjectApprovalEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProjectApprovalEditComponent
  ]
})
export class ProjectApprovalEditModule { }
