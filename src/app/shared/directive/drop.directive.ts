import { Directive, HostListener, Renderer2, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { DragDropService, DragData } from '../service/drag-drop.service';
import { Observable } from 'rxjs/Observable';

@Directive({
    selector: '[droppable][dropEnterClass][dropTags]'
})
export class DropDirective {

    _data$: Observable<DragData>;

    @Input() dropEnterClass: string;
    @Input() dropTags: string[] = [];
    @Output() dropped = new EventEmitter<DragData>();
    constructor(
        private el: ElementRef,
        private rd: Renderer2,
        private dragDropService: DragDropService,
    ) {
        this._data$ = this.dragDropService.getDragData().take(1);
    }

    @HostListener('dragenter', ['$event'])
    onDragEnter(ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement !== ev.target) return;
        this._data$.subscribe(dragData => {
            if (this.dropTags.indexOf(dragData.tag) > -1) {
                this.rd.addClass(this.el.nativeElement, this.dropEnterClass);
            }
        });
    }

    @HostListener('dragover', ['$event'])
    onDragOver(ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement !== ev.target) return;
        this._data$.subscribe(dragData => {
            if (this.dropTags.indexOf(dragData.tag) > -1) {
                this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
                this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
            } else {
                this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
                this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
            }
        });
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement !== ev.target) return;
        this._data$.subscribe(dragData => {
            if (this.dropTags.indexOf(dragData.tag) > -1) {
                this.rd.removeClass(this.el.nativeElement, this.dropEnterClass);
            }
        });
    }

    @HostListener('drop', ['$event'])
    onDrop(ev: Event) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement !== ev.target) return;
        this._data$.subscribe(dragData => {
            if (this.dropTags.indexOf(dragData.tag) > -1) {
                this.dropped.emit(dragData);
                this.rd.removeClass(this.el.nativeElement, this.dropEnterClass);
                this.dragDropService.clearDragData();
            }
        });
    }
}
