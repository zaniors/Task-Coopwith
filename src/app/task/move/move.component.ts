import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'coopwith-move-task',
    templateUrl: './move.component.html',
    styleUrls: ['./move.component.scss']
})
export class MoveTaskComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public taskListsData: any,
        public dialogRef: MatDialogRef<MoveTaskComponent>
    ) { }

    ngOnInit() {
    }

}
