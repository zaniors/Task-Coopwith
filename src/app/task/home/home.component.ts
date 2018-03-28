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
                    owner: {
                        id: 1,
                        name: "张三",
                        avatar: "avatar:svg-11"
                    },
                    dueData: new Date(),
                },
                {
                    id: 2,
                    desc: "任务二：完成作业",
                    owner: {
                        id: 1,
                        name: "王霸蛋",
                        avatar: "avatar:svg-12"
                    },
                    dueData: new Date(),
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
                    owner: {
                        id: 1,
                        name: "狗子",
                        avatar: "avatar:svg-13"
                    },
                    dueData: new Date(),
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
