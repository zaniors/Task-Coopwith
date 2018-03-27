import { NgModule } from '@angular/core';
import { AppCommonModule } from '../shared/common/common.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { NewProjectComponent } from './new/new.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectRoutes } from './project.routing';

@NgModule({
    imports: [
        AppCommonModule,
        ProjectRoutes
    ],
    declarations: [
        ListComponent,
        ItemComponent,
        NewProjectComponent,
        InviteComponent,
    ],
    entryComponents: [
        NewProjectComponent,
        InviteComponent,
    ]
})
export class ProjectModule { }
