import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new/new.component';

@Component({
    selector: 'coopwith-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    projects: any[] = [];
    constructor(
        private matDialog: MatDialog
    ) { }

    ngOnInit() {
        this.projects[0] = {
            name: "张旭",
            coverImg: "/assets/common/img/covers/0.jpg",
            desc: "这只是一个简单的项目描述而已..."
        }
    }

    openNewProjectDialog(): void {
        this.matDialog.open(NewProjectComponent, {
        })
    }
}
