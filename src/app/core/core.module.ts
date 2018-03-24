import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from '../utils/utils.module';
import { LoadSvgResources } from '../utils/svg.util';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,

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
