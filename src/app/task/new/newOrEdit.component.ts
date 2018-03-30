import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'coopwith-new-or-edit-task',
    templateUrl: './newOrEdit.component.html',
    styleUrls: ['./newOrEdit.component.scss']
})
export class NewOrEditTaskComponent implements OnInit {
    priorities = [
        {
            label: "紧急",
            value: 1
        },
        {
            label: "重要",
            value: 2
        },
        {
            label: "普通",
            value: 3
        }
    ];
    constructor(
        @Inject(MAT_DIALOG_DATA) public taskItemData: any,
        public dialogRef: MatDialogRef<NewOrEditTaskComponent>
    ) { }

    ngOnInit() {
        console.log(this.taskItemData);
    }

}
