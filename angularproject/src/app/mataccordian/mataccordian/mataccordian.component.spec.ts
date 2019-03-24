import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MataccordianComponent } from './mataccordian.component';

describe('MataccordianComponent', () => {
  let component: MataccordianComponent;
  let fixture: ComponentFixture<MataccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MataccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MataccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
