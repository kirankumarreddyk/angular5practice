import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkingtextComponent } from './blinkingtext.component';

describe('BlinkingtextComponent', () => {
  let component: BlinkingtextComponent;
  let fixture: ComponentFixture<BlinkingtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkingtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkingtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
