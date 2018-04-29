import { TestBed, inject } from '@angular/core/testing';

import { EmergencySearchService } from './emergency.service';

describe('EmergencySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmergencySearchService]
    });
  });

  it('should be created', inject([EmergencySearchService], (service: EmergencySearchService) => {
    expect(service).toBeTruthy();
  }));
});
