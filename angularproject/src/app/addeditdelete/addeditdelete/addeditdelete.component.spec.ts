import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdeleteComponent } from './addeditdelete.component';

describe('AddeditdeleteComponent', () => {
  let component: AddeditdeleteComponent;
  let fixture: ComponentFixture<AddeditdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
