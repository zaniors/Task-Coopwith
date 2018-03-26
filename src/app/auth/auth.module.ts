import { NgModule } from '@angular/core';
import { AppCommonModule } from '../shared/common/common.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutes } from './auth.routing';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        AppCommonModule,

        LoginRoutes
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class LoginModule { }
