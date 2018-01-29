import { TestBed, inject } from '@angular/core/testing';

import { UserRegistrationService } from './profile.service';

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRegistrationService]
    });
  });

  it('should be created', inject([UserRegistrationService], (service: UserRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
