import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoveTaskComponent } from '../move/move.component';
import { NewOrEditTaskComponent } from '../new/newOrEdit.component';
import { ConfirmDialogComponent } from '../../shared/common/confirm-dialog/confirm-dialog.component';

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

    onRemoveTask(): void {
        let dialogRef = this.matDialog.open(ConfirmDialogComponent, {
            data: { title: '删除任务：', content: '您确认删除该任务吗？' }
        });

        dialogRef.afterClosed().subscribe((result: boolean) => {
            console.log(result);
        })
    }
}
