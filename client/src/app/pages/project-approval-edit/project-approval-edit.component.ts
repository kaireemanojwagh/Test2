// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProjectApprovalService } from '../../services/project-approval.service';
// Import Models
import { ProjectApproval } from '../../domain/test2_db/project-approval';

// START - USED SERVICES
/**
* ProjectApprovalService.create
*	@description CRUD ACTION create
*
* ProjectApprovalService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ProjectApprovalService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a ProjectApproval
 */
@Component({
    selector: 'app-project-approval-edit',
    templateUrl: 'project-approval-edit.component.html',
    styleUrls: ['project-approval-edit.component.css']
})
export class ProjectApprovalEditComponent implements OnInit {
    item: ProjectApproval;
    model: ProjectApproval;
    formValid: Boolean;

    constructor(
    private projectapprovalService: ProjectApprovalService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new ProjectApproval();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.projectapprovalService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save ProjectApproval
     *
     * @param {boolean} formValid Form validity check
     * @param ProjectApproval item ProjectApproval to save
     */
    save(formValid: boolean, item: ProjectApproval): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.projectapprovalService.update(item).subscribe(data => this.goBack());
            } else {
                this.projectapprovalService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



