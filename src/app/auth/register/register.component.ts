import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'coopwith-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    iconItems: string[];

    constructor() { }

    ngOnInit() {
        this.initIconItems();
    }

    private initIconItems(): void {
        const maxNum = 16;
        let nums = [];
        for (let i = 1; i <= maxNum; i++) {
            nums.push(i);
        }

        this.iconItems = nums.map(item => `avatars:svg-${item}`);
    }

}
