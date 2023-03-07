/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectUserToChatComponent } from './select-user-to-chat.component';

describe('SelectUserToChatComponent', () => {
  let component: SelectUserToChatComponent;
  let fixture: ComponentFixture<SelectUserToChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserToChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserToChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
