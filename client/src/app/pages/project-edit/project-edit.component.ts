// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProjectService } from '../../services/project.service';
// Import Models
import { Project } from '../../domain/test2_db/project';

// START - USED SERVICES
/**
* ProjectService.create
*	@description CRUD ACTION create
*
* ProjectService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ProjectService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Project
 */
@Component({
    selector: 'app-project-edit',
    templateUrl: 'project-edit.component.html',
    styleUrls: ['project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    item: Project;
    model: Project;
    formValid: Boolean;

    constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Project();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.projectService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Project
     *
     * @param {boolean} formValid Form validity check
     * @param Project item Project to save
     */
    save(formValid: boolean, item: Project): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.projectService.update(item).subscribe(data => this.goBack());
            } else {
                this.projectService.create(item).subscribe(data => this.goBack());
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



