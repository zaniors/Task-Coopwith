import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'coopwith-task-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
    @Input() headerTitle = '';
    constructor() { }

    ngOnInit() {
    }

}
