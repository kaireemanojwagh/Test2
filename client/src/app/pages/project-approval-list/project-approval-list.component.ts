import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProjectApprovalService } from '../../services/project-approval.service';
// Import Models
import { ProjectApproval } from '../../domain/test2_db/project-approval';

// START - USED SERVICES
/**
* ProjectApprovalService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProjectApprovalService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of ProjectApproval
 * @class ProjectApprovalListComponent
 */
@Component({
    selector: 'app-project-approval-list',
    templateUrl: './project-approval-list.component.html',
    styleUrls: ['./project-approval-list.component.css']
})
export class ProjectApprovalListComponent implements OnInit {
    list: ProjectApproval[];
    search: any = {};
    idSelected: string;
    constructor(
        private projectapprovalService: ProjectApprovalService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.projectapprovalService.list().subscribe(list => this.list = list);
    }

    /**
     * Select ProjectApproval to remove
     *
     * @param {string} id Id of the ProjectApproval to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected ProjectApproval
     */
    deleteItem() {
        this.projectapprovalService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
