import { NgModule } from '@angular/core';
import { AppCommonModule } from '../shared/common/common.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectRoutes } from './project.routing';
import { NewOrEditProjectComponent } from './new/newOrEdit.component';

@NgModule({
    imports: [
        AppCommonModule,
        ProjectRoutes
    ],
    declarations: [
        ListComponent,
        ItemComponent,
        NewOrEditProjectComponent,
        InviteComponent,
    ],
    entryComponents: [
        NewOrEditProjectComponent,
        InviteComponent,
    ]
})
export class ProjectModule { }
