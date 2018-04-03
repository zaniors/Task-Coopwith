import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDirective } from './drop.directive';
import { DragDirective } from './drag.directive';
import { DragDropService } from '../service/drag-drop.service';

@NgModule({
    declarations: [
        DropDirective,
        DragDirective
    ],
    exports: [
        DropDirective,
        DragDirective
    ],
    providers: [
        DragDropService
    ]
})
export class DirectiveModule { }
