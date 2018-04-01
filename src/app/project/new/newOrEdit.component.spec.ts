/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NewOrEditProjectComponent } from './newOrEdit.component';


describe('NewComponent', () => {
    let component: NewOrEditProjectComponent;
    let fixture: ComponentFixture<NewOrEditProjectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewOrEditProjectComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewOrEditProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
