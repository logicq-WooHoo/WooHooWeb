import { TestBed, inject } from '@angular/core/testing';

import { BarSearchService } from './bar.service';

describe('BarSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarSearchService]
    });
  });

  it('should be created', inject([BarSearchService], (service: BarSearchService) => {
    expect(service).toBeTruthy();
  }));
});
