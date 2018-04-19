import { TestBed, inject } from '@angular/core/testing';

import { EntityTypeService } from './entitytype.service';

describe('EntityTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityTypeService]
    });
  });

  it('should be created', inject([EntityTypeService], (service: EntityTypeService) => {
    expect(service).toBeTruthy();
  }));
});
