import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from '../utils/utils.module';
import { LoadSvgResources } from '../utils/svg.util';
import { AppCommonModule } from '../shared/common/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        AppCommonModule,
        UtilsModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parent: CoreModule,
        private loadSvgResources: LoadSvgResources
    ) {
        if (parent) {
            throw new Error('此模块已存在，不能再次加载！');
        }

        this.loadSvgResources.init();
    }
}
