import { TestBed, inject } from '@angular/core/testing';

import { ShopSearchService } from './shop.service';

describe('ShopSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopSearchService]
    });
  });

  it('should be created', inject([ShopSearchService], (service: ShopSearchService) => {
    expect(service).toBeTruthy();
  }));
});
