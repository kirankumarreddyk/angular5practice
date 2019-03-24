import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputconfirmpaswdComponent } from './inputconfirmpaswd.component';

describe('InputconfirmpaswdComponent', () => {
  let component: InputconfirmpaswdComponent;
  let fixture: ComponentFixture<InputconfirmpaswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputconfirmpaswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputconfirmpaswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
