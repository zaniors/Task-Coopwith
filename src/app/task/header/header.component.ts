import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new/new.component';

@Component({
    selector: 'coopwith-task-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
    @Input() headerTitle = '';
    constructor(
        private matDialog: MatDialog
    ) { }

    ngOnInit() {
    }

    openNewTaskDialog(): void {
        let dialogRef = this.matDialog.open(NewTaskComponent, {
            data: '没错，我就是新建任务！'
        });
    }

}
