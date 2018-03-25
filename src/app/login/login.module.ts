import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { AppCommonModule } from '../shared/common/common.module';

@NgModule({
    imports: [
        AppCommonModule,

        LoginRoutes
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
