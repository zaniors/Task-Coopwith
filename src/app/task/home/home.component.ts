import { Component, OnInit } from '@angular/core';

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
                    owner: {
                        id: 1,
                        name: "张三",
                        avatar: "avatars:svg-11"
                    },
                    dueDate: new Date()
                },
                {
                    id: 2,
                    desc: "任务二：完成作业",
                    completed: true,
                    owner: {
                        id: 1,
                        name: "王霸蛋",
                        avatar: "avatars:svg-12"
                    },
                    dueDate: new Date(),
                    reminder: new Date()
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
    constructor() { }

    ngOnInit() {
    }

    openNewTaskDialog(): void {

    }
}
