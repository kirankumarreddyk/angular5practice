import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonmenuComponent } from './commonmenu.component';

describe('CommonmenuComponent', () => {
  let component: CommonmenuComponent;
  let fixture: ComponentFixture<CommonmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
