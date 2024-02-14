import { TestBed } from '@angular/core/testing';

import { SearchTripFilterService } from './search-trip-filter.service';

describe('SearchTripFilterService', () => {
  let service: SearchTripFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTripFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
