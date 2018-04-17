import { TestBed, inject } from '@angular/core/testing';

import { EntitySearchService } from './entitysearch.service';

describe('EntitySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntitySearchService]
    });
  });

  it('should be created', inject([EntitySearchService], (service: EntitySearchService) => {
    expect(service).toBeTruthy();
  }));
});
