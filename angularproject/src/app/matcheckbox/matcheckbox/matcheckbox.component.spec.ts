import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheckboxComponent } from './matcheckbox.component';

describe('MatcheckboxComponent', () => {
  let component: MatcheckboxComponent;
  let fixture: ComponentFixture<MatcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
