/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewOrEditTaskListComponent } from './newOrEdit.component';

describe('NewOrEditTaskListComponent', () => {
    let component: NewOrEditTaskListComponent;
    let fixture: ComponentFixture<NewOrEditTaskListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewOrEditTaskListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewOrEditTaskListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
