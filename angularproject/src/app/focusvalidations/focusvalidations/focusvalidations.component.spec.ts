import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusvalidationsComponent } from './focusvalidations.component';

describe('FocusvalidationsComponent', () => {
  let component: FocusvalidationsComponent;
  let fixture: ComponentFixture<FocusvalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusvalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
