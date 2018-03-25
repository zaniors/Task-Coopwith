import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AppRoutes } from './app.routing';
import { AppCommonModule } from './shared/common/common.module';
import { LoginModule } from './login/login.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppCommonModule,
        CoreModule,
        AppRoutes,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
