import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'coopwith-confirm-dialog',
    template: `
        <h2 mat-dialog-title>{{ data.title }}</h2>
        <section mat-dialog-content>{{ data.content }}</section>

        <section mat-dialog-actions>
            <button type="button" mat-raised-button color="primary" (click)="onConfirm(true)">确定</button>
            <button type="button" mat-button mat-dialog-close (click)="onConfirm(false)">取消</button>
        </section>
  `,
    styles: []
})
export class ConfirmDialogComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
    }

    onConfirm(flag: boolean): void {
        this.dialogRef.close(flag);
    }

}
