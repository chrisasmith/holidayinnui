import { TestBed } from '@angular/core/testing';

import { GridsquareClickEventsService } from './gridsquare-click-events.service';

describe('GridsquareClickEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridsquareClickEventsService = TestBed.get(GridsquareClickEventsService);
    expect(service).toBeTruthy();
  });
});
