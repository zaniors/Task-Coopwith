import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { Injectable } from "@angular/core";

const imgDir = '/assets/common/img';
const sidebarDir = `${imgDir}/sidebar`;
const dayDir = `${imgDir}/days`;
const avatarsDir = `${imgDir}/avatar`;

@Injectable()
export class LoadSvgResources {
    sidebarIconArr: string[] = ['day', 'week', 'month', 'project', 'projects'];
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) { }

    init(): void {
        this.iconRegistrySidebar(this.sidebarIconArr);
        this.iconListRegister();
        this.iconRegistryCurrentDay();
    }

    // 加载sidebar的icon，从定义的变量中获取icon文件
    private iconRegistrySidebar(iconArr: string[]): void {
        iconArr.forEach(iconName => {
            this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/${iconName}.svg`));
        });
    }

    // 加载svg字体集合的icon
    private iconListRegister(): void {
        this.iconRegistry.addSvgIconSetInNamespace('avatars', this.sanitizer.bypassSecurityTrustResourceUrl(`${avatarsDir}/avatars.svg`));
    }

    // 获取当月时间，加载对应的号数icon；比如10月10号，对应加载day10.svg
    private iconRegistryCurrentDay(): void {
        let day = new Date().getDate();
        this.iconRegistry.addSvgIcon(`day${day}`, this.sanitizer.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`));
    }
}
