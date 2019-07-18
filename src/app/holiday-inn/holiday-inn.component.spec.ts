import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayInnComponent } from './holiday-inn.component';

describe('HolidayInnComponent', () => {
  let component: HolidayInnComponent;
  let fixture: ComponentFixture<HolidayInnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayInnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
