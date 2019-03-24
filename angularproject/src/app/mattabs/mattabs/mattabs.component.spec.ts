import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattabsComponent } from './mattabs.component';

describe('MattabsComponent', () => {
  let component: MattabsComponent;
  let fixture: ComponentFixture<MattabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
