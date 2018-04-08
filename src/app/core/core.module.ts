import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from '../utils/utils.module';
import { LoadSvgResources } from '../utils/svg.util';
import { AppCommonModule } from '../shared/common/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from '../app.routing';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';
import { ServicesModule } from '../shared/service/services.module';
import { APP_DI_CONFIG } from '../app.config';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        AppCommonModule,
        UtilsModule,
        AppRoutes,
        ServicesModule.forRoot(),
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    providers: [
        {
            provide: 'BASE_CONFIG',
            useValue: APP_DI_CONFIG
        }
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AppRoutes,
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
