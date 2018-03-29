/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NewOrEditTaskComponent } from './newOrEdit..component';

describe('NewComponent', () => {
    let component: NewOrEditTaskComponent;
    let fixture: ComponentFixture<NewOrEditTaskComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewOrEditTaskComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewOrEditTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
