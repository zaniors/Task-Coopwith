import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDirective } from './drop.directive';
import { DragDirective } from './drag.directive';

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
    ]
})
export class DirectiveModule { }
