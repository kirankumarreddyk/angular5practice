import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatfilldetailsComponent } from './matfilldetails.component';

describe('MatfilldetailsComponent', () => {
  let component: MatfilldetailsComponent;
  let fixture: ComponentFixture<MatfilldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatfilldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatfilldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
