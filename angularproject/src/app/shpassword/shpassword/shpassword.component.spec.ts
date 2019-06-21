import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpasswordComponent } from './shpassword.component';

describe('ShpasswordComponent', () => {
  let component: ShpasswordComponent;
  let fixture: ComponentFixture<ShpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
