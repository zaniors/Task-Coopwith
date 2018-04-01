import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectItem } from '../../shared/interface/projects.model';

@Component({
    selector: 'coopwith-new',
    templateUrl: './newOrEdit.component.html',
    styleUrls: ['./newOrEdit.component.scss']
})
export class NewOrEditProjectComponent implements OnInit {
    newProjectItem: ProjectItem = new ProjectItem();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<NewOrEditProjectComponent>
    ) { }

    ngOnInit() {
        console.log(this.data);
    }

    save(): void {
        this.newProjectItem.coverImg = "/assets/common/img/covers/0.jpg";
        this.dialogRef.close(this.newProjectItem);
    }

}
