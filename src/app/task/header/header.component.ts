import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoveTaskComponent } from '../move/move.component';
import { NewOrEditTaskComponent } from '../new/newOrEdit.component';

@Component({
    selector: 'coopwith-task-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
    @Output() onMoveTaskHandle = new EventEmitter<void>();
    @Output() onNewOrEditTaskHandle = new EventEmitter<void>();
    @Input() headerTaskTitle = '';
    constructor(
        private matDialog: MatDialog
    ) { }

    ngOnInit() {
    }

    onMoveTask(): void {
        this.onMoveTaskHandle.emit();
    }

    onNewTask(): void {
        this.onNewOrEditTaskHandle.emit();
    }
}
