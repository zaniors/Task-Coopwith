import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../service/drag-drop.service';

@Directive({
    selector: '[draggable][draggedClass][dragTag][dragData]'
})
export class DragDirective {

    private _isDraggable = false;
    @Input('Draggable')
    set isDraggable(val: boolean) {
        this._isDraggable = val;
        this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
    }
    get isDraggable() {
        return this._isDraggable;
    }

    @Input() draggedClass: string;
    @Input() dragTag: string;
    @Input() dragData: any;
    constructor(
        private el: ElementRef,
        private rd: Renderer2,
        private dragDropService: DragDropService,
    ) { }

    @HostListener('dragstart', ['$event']) ondragstart(ev: Event) {
        if (this.el.nativeElement !== ev.target) return;    //指令绑定的DOM和拖拽的DOM一致，才执行核心代码

        this.rd.addClass(this.el.nativeElement, this.draggedClass);
        this.dragDropService.setDragData({ tag: this.dragTag, data: this.dragData })
    }

    @HostListener('dragend', ['$event']) ondragend(ev: Event) {
        if (this.el.nativeElement !== ev.target) return;    //指令绑定的DOM和拖拽的DOM一致，才执行核心代码

        this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }

}
