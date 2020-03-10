import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllownumberComponent } from './allownumbers.component';

describe('AllownumberComponent', () => {
  let component: AllownumberComponent;
  let fixture: ComponentFixture<AllownumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllownumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllownumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
