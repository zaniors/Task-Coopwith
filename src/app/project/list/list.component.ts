import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'coopwith-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    projects: any[] = [];
    constructor() { }

    ngOnInit() {
        this.projects[0] = {
            name: "张旭",
            coverImg: "/assets/common/img/covers/0.jpg",
            desc: "这只是一个简单的项目描述而已..."
        }
    }

    openNewProjectDialog(): void {

    }
}
