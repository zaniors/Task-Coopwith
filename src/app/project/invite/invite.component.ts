import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'coopwith-invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
    filteredStates = [
        {
            id: 1,
            name: "zhangsan"
        },
        {
            id: 2,
            name: "lisi"
        },
        {
            id: 3,
            name: "wangermazi"
        },
    ]
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
        console.log(this.data);
    }

    displayUser(user: { id: string; name: string }): string {
        return user ? user.name : '';
    }

}
