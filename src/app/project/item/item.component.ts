import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../shared/common/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'coopwith-project-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() item: any;
    @Output() inviteProjectHandle = new EventEmitter<void>();
    @Output() newOrEditProjectHandle = new EventEmitter<void>();
    constructor(
        private matDialog: MatDialog
    ) { }

    ngOnInit() {
    }

    onInviteProject(): void {
        this.inviteProjectHandle.emit();
    }

    onEditProject(): void {
        this.newOrEditProjectHandle.emit();
    }

    onRemoveProject(): void {
        let dialogRef = this.matDialog.open(ConfirmDialogComponent, {
            data: { title: '删除项目：', content: '您确认删除该项目吗？' }
        });

        dialogRef.afterClosed().subscribe((result: boolean) => {
            console.log(result);
        })
    }
}
