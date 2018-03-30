import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

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

    onNewOrEditProject(): void {
        this.newOrEditProjectHandle.emit();
    }
}
