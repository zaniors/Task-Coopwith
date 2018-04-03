import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoveTaskComponent } from '../move/move.component';
import { NewOrEditTaskComponent } from '../new/newOrEdit.component';
import { NewOrEditTaskListComponent } from '../list/newOrEdit/newOrEdit.component';
import { slideToRight } from '../../shared/animate/routerTransition';

@Component({
    selector: 'coopwith-task-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [slideToRight()]
})
export class TaskHomeComponent implements OnInit {
    taskListsData = [
        {
            id: 1,
            name: "待办",
            tasks: [
                {
                    id: 1,
                    desc: "任务一：去星巴克买咖啡",
                    completed: true,
                    priority: 3,
                    dueDate: new Date(),
                    owner: {
                        id: 1,
                        name: "张三",
                        avatar: "avatars:svg-11"
                    },
                },
                {
                    id: 2,
                    desc: "任务二：完成作业",
                    completed: true,
                    priority: 2,
                    dueDate: new Date(),
                    reminderDate: new Date(),
                    owner: {
                        id: 1,
                        name: "王霸蛋",
                        avatar: "avatars:svg-12"
                    },
                },
            ]
        },
        {
            id: 2,
            name: "进行中",
            tasks: [
                {
                    id: 1,
                    desc: "任务三：项目代码评审",
                    completed: false,
                    priority: 1,
                    owner: {
                        id: 1,
                        name: "狗子",
                        avatar: "avatars:svg-13"
                    },
                }
            ]
        }
    ];
    constructor(
        private matDialog: MatDialog
    ) { }

    ngOnInit() {
    }
    @HostBinding('@routerTransition') state;

    moveTaskDialog(): void {
        let dialogRef = this.matDialog.open(MoveTaskComponent, {
            data: this.taskListsData
        });
    }

    // 新建任务和编辑任务，都打开一个dialog组件
    openNewOrEditTaskDialog(taskItem: any): void {
        let data = taskItem ? taskItem : null;
        let dialogRef = this.matDialog.open(NewOrEditTaskComponent, {
            data: data
        });
    }

    // 新建任务列表和编辑任务列表
    openNewOrEditTaskListDialog(): void {
        let dialogRef = this.matDialog.open(NewOrEditTaskListComponent, {

        })
    }

    handleMove(srcData, listItem) {
        console.log(srcData);
        console.log(listItem);

    }
}
