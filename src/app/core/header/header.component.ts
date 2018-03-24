import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'coopwith-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() toggleSidebar = new EventEmitter<void>();
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon('husky', sanitizer.bypassSecurityTrustResourceUrl('assets/common/svg/husky.svg'))
    }

    ngOnInit() {
    }

    // openSidebar：通过@Output实现
    public openSidebar(): void {
        this.toggleSidebar.emit();
    }

}
