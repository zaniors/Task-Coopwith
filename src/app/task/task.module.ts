import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './home/home.component';
import { TaskHeaderComponent } from './header/header.component';
import { TaskListComponent } from './list/list.component';
import { TaskItemComponent } from './item/item.component';
import { TaskRoutes } from './task.routing';
import { AppCommonModule } from '../shared/common/common.module';
import { MoveTaskComponent } from './move/move.component';
import { NewOrEditTaskComponent } from './new-item/newOrEdit.component';
import { NewOrEditTaskListComponent } from './new-list/newOrEdit.component';
import { QuickItemComponent } from './quick-item/quick-item.component';

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
        MoveTaskComponent,
        NewOrEditTaskComponent,
        NewOrEditTaskListComponent,
    QuickItemComponent
],
    entryComponents: [
        NewOrEditTaskComponent,
        NewOrEditTaskListComponent,
        MoveTaskComponent
    ]
})
export class TaskModule { }
