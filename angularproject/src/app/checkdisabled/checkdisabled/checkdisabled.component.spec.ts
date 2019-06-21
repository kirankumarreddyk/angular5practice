import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdisabledComponent } from './checkdisabled.component';

describe('CheckdisabledComponent', () => {
  let component: CheckdisabledComponent;
  let fixture: ComponentFixture<CheckdisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckdisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
