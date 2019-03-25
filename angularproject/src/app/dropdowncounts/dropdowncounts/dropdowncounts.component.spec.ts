import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowncountsComponent } from './dropdowncounts.component';

describe('DropdowncountsComponent', () => {
  let component: DropdowncountsComponent;
  let fixture: ComponentFixture<DropdowncountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowncountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowncountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
