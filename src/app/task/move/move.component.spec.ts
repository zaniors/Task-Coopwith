/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoveTaskComponent } from './move.component';

describe('MoveComponent', () => {
  let component: MoveTaskComponent;
  let fixture: ComponentFixture<MoveTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoveTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
