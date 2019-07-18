import { TestBed } from '@angular/core/testing';

import { HolidayInnService } from './holiday-inn.service';

describe('HolidayInnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolidayInnService = TestBed.get(HolidayInnService);
    expect(service).toBeTruthy();
  });
});
