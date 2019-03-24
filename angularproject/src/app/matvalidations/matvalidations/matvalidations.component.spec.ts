import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatvalidationsComponent } from './matvalidations.component';

describe('MatvalidationsComponent', () => {
  let component: MatvalidationsComponent;
  let fixture: ComponentFixture<MatvalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatvalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
