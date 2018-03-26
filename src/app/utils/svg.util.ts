import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { Injectable } from "@angular/core";

// export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
//     ir.addSvgIcon('husky', ds.bypassSecurityTrustResourceUrl('assets/common/svg/husky.svg'))
// }

const imgDir = '/assets/common/img';

@Injectable()
export class LoadSvgResources {
    sidebarIconArr: string[] = ['day', 'week', 'month', 'project', 'projects'];
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) { }

    init(): void {
        this.iconRegistrySidebar(this.sidebarIconArr);
        this.iconRegistryCurrentDay();
    }

    // 获取sidebar需要的icon，从定义的变量中获取icon文件
    private iconRegistrySidebar(iconArr: string[]): void {
        const sidebarDir = `${imgDir}/sidebar`;
        iconArr.forEach(iconName => {
            this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/${iconName}.svg`));
        });
    }

    // 获取当月时间，加载对应的号数icon；比如10月10号，对应加载day10.svg
    private iconRegistryCurrentDay(): void {
        let day = new Date().getDate();
        const dayDir = `${imgDir}/days`;

        this.iconRegistry.addSvgIcon(`day${day}`, this.sanitizer.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`));
    }
}
