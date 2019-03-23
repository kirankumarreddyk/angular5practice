import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightclickdisableComponent } from './rightclickdisable.component';

describe('RightclickdisableComponent', () => {
  let component: RightclickdisableComponent;
  let fixture: ComponentFixture<RightclickdisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightclickdisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightclickdisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
