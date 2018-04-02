import { Component, OnInit, Input, HostListener } from '@angular/core';
import { taskItemTransition } from '../../shared/animate/taskItemTransition';

@Component({
    selector: 'coopwith-task-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    animations: [taskItemTransition()]

})
export class TaskItemComponent implements OnInit {
    taskItemAniState = 'out';
    @Input() taskItemData;
    avatar: string;
    constructor() { }

    @HostListener('mouseenter') onCardMouseEnter() {
        this.taskItemAniState = 'in';
    }
    @HostListener('mouseleave') onCardMouseLeave() {
        this.taskItemAniState = 'out';
    }

    ngOnInit() {
        this.avatar = this.taskItemData.owner ? this.taskItemData.owner.avatar : 'unassigned';
    }
}
