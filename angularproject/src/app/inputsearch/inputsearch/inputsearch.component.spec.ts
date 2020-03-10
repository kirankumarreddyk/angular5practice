import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsearchComponent } from './inputsearch.component';

describe('InputsearchComponent', () => {
  let component: InputsearchComponent;
  let fixture: ComponentFixture<InputsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
