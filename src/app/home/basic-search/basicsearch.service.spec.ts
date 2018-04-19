import { TestBed, inject } from '@angular/core/testing';

import { BasicSearchService } from './basicsearch.service';

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicSearchService]
    });
  });

  it('should be created', inject([BasicSearchService], (service: BasicSearchService) => {
    expect(service).toBeTruthy();
  }));
});
