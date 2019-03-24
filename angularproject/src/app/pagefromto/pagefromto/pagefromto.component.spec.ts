import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefromtoComponent } from './pagefromto.component';

describe('PagefromtoComponent', () => {
  let component: PagefromtoComponent;
  let fixture: ComponentFixture<PagefromtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagefromtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefromtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
