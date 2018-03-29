import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './home/home.component';
import { TaskHeaderComponent } from './header/header.component';
import { TaskListComponent } from './list/list.component';
import { TaskItemComponent } from './item/item.component';
import { TaskRoutes } from './task.routing';
import { AppCommonModule } from '../shared/common/common.module';
import { MoveTaskComponent } from './move/move.component';
import { NewOrEditTaskComponent } from './new/newOrEdit.component';

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
        NewOrEditTaskComponent,
        MoveTaskComponent
    ],
    entryComponents: [
        NewOrEditTaskComponent,
        MoveTaskComponent
    ]
})
export class TaskModule { }
