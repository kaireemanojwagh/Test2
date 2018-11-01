// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { ProjectApprovalEditComponent} from './pages/project-approval-edit/project-approval-edit.component';
import { ProjectApprovalListComponent} from './pages/project-approval-list/project-approval-list.component';
import { ProjectEditComponent} from './pages/project-edit/project-edit.component';
import { ProjectListComponent} from './pages/project-list/project-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'projectapprovals/:id',  loadChildren: './pages/project-approval-edit/project-approval-edit.module#ProjectApprovalEditModule' , canActivate: [AuthGuard] },
    { path: 'projectapprovals',  loadChildren: './pages/project-approval-list/project-approval-list.module#ProjectApprovalListModule' , canActivate: [AuthGuard] },
    { path: 'projects/:id',  loadChildren: './pages/project-edit/project-edit.module#ProjectEditModule' , canActivate: [AuthGuard] },
    { path: 'projects',  loadChildren: './pages/project-list/project-list.module#ProjectListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
