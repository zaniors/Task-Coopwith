import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './home/home.component';
import { TaskHeaderComponent } from './header/header.component';
import { TaskListComponent } from './list/list.component';
import { TaskItemComponent } from './item/item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [,
        TaskHomeComponent,
        TaskHeaderComponent,
        TaskListComponent,
        TaskItemComponent,
    ]
})
export class TaskModule { }
