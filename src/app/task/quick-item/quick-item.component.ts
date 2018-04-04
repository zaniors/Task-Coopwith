import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'coopwith-quick-item',
    templateUrl: './quick-item.component.html',
    styleUrls: ['./quick-item.component.scss']
})
export class QuickItemComponent implements OnInit {
    desc: string;

    @Output() quickTaskItemHandle = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
    }

    onSubmit(): void {
        if (!this.desc) return;
        this.quickTaskItemHandle.emit(this.desc);
        this.desc = '';
    }
}
