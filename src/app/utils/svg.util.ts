import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { Injectable } from "@angular/core";

// export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
//     ir.addSvgIcon('husky', ds.bypassSecurityTrustResourceUrl('assets/common/svg/husky.svg'))
// }

@Injectable()
export class LoadSvgResources {
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) { }

    init(): void {
        this.iconRegistry.addSvgIcon('husky', this.sanitizer.bypassSecurityTrustResourceUrl('assets/common/svg/husky.svg'))
    }
}
