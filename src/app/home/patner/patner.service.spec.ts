import { TestBed, inject } from '@angular/core/testing';

import { PatnerService } from './patner.service';

describe('PatnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatnerService]
    });
  });

  it('should be created', inject([PatnerService], (service: PatnerService) => {
    expect(service).toBeTruthy();
  }));
});
