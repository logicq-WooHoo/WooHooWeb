import { TestBed, inject } from '@angular/core/testing';

import { HotelSearchService } from './hotel.service';

describe('HotelSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelSearchService]
    });
  });

  it('should be created', inject([HotelSearchService], (service: HotelSearchService) => {
    expect(service).toBeTruthy();
  }));
});
