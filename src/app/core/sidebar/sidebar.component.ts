import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'coopwith-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    todayIcon = 'day';
    constructor() { }

    ngOnInit() {
        this.todayIcon = `day${new Date().getDate()}`;
    }

}
