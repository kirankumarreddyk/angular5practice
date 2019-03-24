import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernameComponent } from './headername.component';

describe('HeadernameComponent', () => {
  let component: HeadernameComponent;
  let fixture: ComponentFixture<HeadernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
