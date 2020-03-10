import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledsubmitComponent } from './disabledsubmit.component';

describe('DisabledsubmitComponent', () => {
  let component: DisabledsubmitComponent;
  let fixture: ComponentFixture<DisabledsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
