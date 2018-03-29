import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoveTaskComponent } from '../move/move.component';
import { NewOrEditTaskComponent } from '../new/newOrEdit.component';

@Component({
    selector: 'coopwith-task-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
    @Input() taskListsItemData;
    @Input() taskListsData;
    constructor(
        private matDialog: MatDialog
    ) { }

    ngOnInit() {
    }

    openNewTaskDialog(): void {
        let dialogRef = this.matDialog.open(NewOrEditTaskComponent, {
            data: '没错，我就是新建任务！'
        });
    }

    moveTaskDialog(): void {
        let dialogRef = this.matDialog.open(MoveTaskComponent, {
            data: this.taskListsData
        });
    }

}
