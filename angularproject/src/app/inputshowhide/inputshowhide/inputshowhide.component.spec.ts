import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputshowhideComponent } from './inputshowhide.component';

describe('InputshowhideComponent', () => {
  let component: InputshowhideComponent;
  let fixture: ComponentFixture<InputshowhideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputshowhideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputshowhideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
