import { TestBed } from '@angular/core/testing';

import { SecondaryListingService } from './secondary-listing.service';

describe('SecondaryListingService', () => {
  let service: SecondaryListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
