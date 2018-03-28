import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { Injectable } from "@angular/core";

const imgDir = '/assets/common/img';
const sidebarDir = `${imgDir}/sidebar`;
const dayDir = `${imgDir}/days`;
const avatarsDir = `${imgDir}/avatar`;
const iconsDir = `${imgDir}/icons`

@Injectable()
export class LoadSvgResources {
    sidebarIconArr: string[] = ['day', 'week', 'month', 'project', 'projects'];
    otherIconArr: string[] = ['add', 'move', 'delete', 'hand-grab-o', 'burger-navigation'];
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) { }

    init(): void {
        this.iconsRegistry(sidebarDir, this.sidebarIconArr);
        this.iconsRegistry(iconsDir, this.otherIconArr);
        this.iconListRegister();
        this.iconRegistryCurrentDay();
    }

    // 加载多个icon，从定义的变量中获取icon文件
    private iconsRegistry(dir: string, iconArr: string[]): void {
        iconArr.forEach(iconName => {
            this.iconRegistry.addSvgIcon(iconName, this.sanitizer.bypassSecurityTrustResourceUrl(`${dir}/${iconName}.svg`));
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
