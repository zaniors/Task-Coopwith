import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './home/home.component';
import { TaskHeaderComponent } from './header/header.component';
import { TaskListComponent } from './list/list.component';
import { TaskItemComponent } from './item/item.component';
import { TaskRoutes } from './task.routing';
import { AppCommonModule } from '../shared/common/common.module';

@NgModule({
    imports: [
        AppCommonModule,
        TaskRoutes
    ],
    declarations: [
        TaskHomeComponent,
        TaskHeaderComponent,
        TaskListComponent,
        TaskItemComponent,
    ],
    entryComponents: [
    ]
})
export class TaskModule { }
