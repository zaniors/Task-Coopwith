import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { Injectable } from "@angular/core";

// export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
//     ir.addSvgIcon('husky', ds.bypassSecurityTrustResourceUrl('assets/common/svg/husky.svg'))
// }

const imgDir = '/assets/common/img';
const sidebarDir = `${imgDir}/sidebar`;

@Injectable()
export class LoadSvgResources {
    sidebarIconArr: string[] = ['day', 'week', 'month', 'project', 'projects'];
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) { }

    init(): void {
        this.iconRegistrySidebar(this.sidebarIconArr);
    }

    private iconRegistrySidebar(iconArr: string[]): void {
        iconArr.forEach(iconName => {
            this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/${iconName}.svg`));
        });
    }
}
