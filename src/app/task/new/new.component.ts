import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'coopwith-new-task',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewTaskComponent implements OnInit {
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
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<NewTaskComponent>
    ) { }

    ngOnInit() {
        console.log(this.data);
    }

}
