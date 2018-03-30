import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoveTaskComponent } from '../move/move.component';
import { NewOrEditTaskComponent } from '../new/newOrEdit.component';

@Component({
    selector: 'coopwith-task-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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
}
