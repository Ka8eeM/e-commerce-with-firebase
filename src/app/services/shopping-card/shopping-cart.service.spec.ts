import { TestBed } from '@angular/core/testing';

import { ShoppingCardService } from './shopping-cart.service';

describe('ShoppingCardService', () => {
  let service: ShoppingCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
