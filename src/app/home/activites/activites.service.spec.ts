import { TestBed, inject } from '@angular/core/testing';

import { ActivitySearchService } from './activites.service';

describe('ActivitySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivitySearchService]
    });
  });

  it('should be created', inject([ActivitySearchService], (service: ActivitySearchService) => {
    expect(service).toBeTruthy();
  }));
});
