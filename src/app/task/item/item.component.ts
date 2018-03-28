import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'coopwith-task-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class TaskItemComponent implements OnInit {
    @Input() taskItemData;
    avatar: string;
    constructor() { }

    ngOnInit() {
        this.avatar = this.taskItemData.owner ? this.taskItemData.owner.avatar : 'unassigned';
    }

}
