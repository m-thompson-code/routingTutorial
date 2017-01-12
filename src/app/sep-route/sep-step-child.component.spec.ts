/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SepStepChildComponent } from './sep-step-child.component';

describe('SepStepChildComponent', () => {
  let component: SepStepChildComponent;
  let fixture: ComponentFixture<SepStepChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepStepChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepStepChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
