import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './home/home.component';
import { TaskHeaderComponent } from './header/header.component';
import { TaskListComponent } from './list/list.component';
import { TaskItemComponent } from './item/item.component';
import { TaskRoutes } from './task.routing';
import { AppCommonModule } from '../shared/common/common.module';
import { NewTaskComponent } from './new/new.component';

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
        NewTaskComponent
    ],
    entryComponents: [
        NewTaskComponent
    ]
})
export class TaskModule { }
