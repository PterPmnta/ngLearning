/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Parte5Component } from './parte5.component';

describe('Parte5Component', () => {
  let component: Parte5Component;
  let fixture: ComponentFixture<Parte5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
