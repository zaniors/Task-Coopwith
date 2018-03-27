import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectItem } from '../../shared/interface/projects.model';

@Component({
    selector: 'coopwith-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewProjectComponent implements OnInit {
    newProjectItem: ProjectItem = new ProjectItem();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<NewProjectComponent>
    ) { }

    ngOnInit() {
        console.log(this.data);
    }

    save(): void {
        this.newProjectItem.coverImg = "/assets/common/img/covers/0.jpg";
        this.dialogRef.close(this.newProjectItem);
    }

}
