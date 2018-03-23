import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'coopwith-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() toggleSidebar = new EventEmitter<void>();
    constructor() { }

    ngOnInit() {
    }

    // openSidebar：通过@Output实现
    public openSidebar(): void {
        this.toggleSidebar.emit();
    }

}
