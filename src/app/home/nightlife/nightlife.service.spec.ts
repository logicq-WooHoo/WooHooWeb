import { TestBed, inject } from '@angular/core/testing';

import { NightlifeSearchService } from './nightlife.service';

describe('NightlifeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NightlifeSearchService]
    });
  });

  it('should be created', inject([NightlifeSearchService], (service: NightlifeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
