import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatradioComponent } from './matradio.component';

describe('MatradioComponent', () => {
  let component: MatradioComponent;
  let fixture: ComponentFixture<MatradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
