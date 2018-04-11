import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation
}

    from '@angular/core';
@Component({
    selector: 'coopwith-avatar-list-selected', templateUrl: './avatar-list-selected.component.html', styleUrls: ['./avatar-list-selected.component.scss']
}

) export class AvatarListSelectedComponent implements OnInit {
    selected = '';
    @Input() avatarList: string[];
    @Input() title = '选择头像';

    constructor() { }

    ngOnInit() { }

    onChange(avatar: string): void {
        this.selected = avatar;
    }
}
