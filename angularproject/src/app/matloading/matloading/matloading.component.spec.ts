import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatloadingComponent } from './matloading.component';

describe('MatloadingComponent', () => {
  let component: MatloadingComponent;
  let fixture: ComponentFixture<MatloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
