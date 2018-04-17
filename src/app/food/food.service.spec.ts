import { TestBed, inject } from '@angular/core/testing';

import { FoodSearchService } from './food.service';

describe('FoodSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodSearchService]
    });
  });

  it('should be created', inject([FoodSearchService], (service: FoodSearchService) => {
    expect(service).toBeTruthy();
  }));
});
