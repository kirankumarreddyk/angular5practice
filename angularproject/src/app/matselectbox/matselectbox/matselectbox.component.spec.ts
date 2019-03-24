import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatselectboxComponent } from './matselectbox.component';

describe('MatselectboxComponent', () => {
  let component: MatselectboxComponent;
  let fixture: ComponentFixture<MatselectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatselectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatselectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
