import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidevalidationComponent } from './hidevalidation.component';

describe('HidevalidationComponent', () => {
  let component: HidevalidationComponent;
  let fixture: ComponentFixture<HidevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
