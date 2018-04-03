import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class DragData {
    tag: string;
    data: any;
}

@Injectable()
export class DragDropService {

    private _dragData = new BehaviorSubject<DragData>(null);

    setDragData(data: DragData): void {
        // console.log(data);
        this._dragData.next(data);
    }

    getDragData(): Observable<DragData> {
        return this._dragData.asObservable();
    }

    clearDragData(): void {
        this._dragData.next(null);
    }
}
