import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabroutingComponent } from './tabrouting.component';

describe('TabroutingComponent', () => {
  let component: TabroutingComponent;
  let fixture: ComponentFixture<TabroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
