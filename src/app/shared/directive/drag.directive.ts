import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[draggable][draggedClass]'
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
    constructor(
        private el: ElementRef,
        private rd: Renderer2
    ) { }

    @HostListener('dragstart', ['$event']) ondragstart(ev: Event) {
        if (this.el.nativeElement !== ev.target) return;    //指令绑定的DOM和拖拽的DOM一致，才执行核心代码

        this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }

    @HostListener('dragend', ['$event']) ondragend(ev: Event) {
        if (this.el.nativeElement !== ev.target) return;    //指令绑定的DOM和拖拽的DOM一致，才执行核心代码

        this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }

}
