import { TestBed } from '@angular/core/testing';

import { UserShoppingCartService } from './user-shopping-cart.service';

describe('UserShoppingCartService', () => {
  let service: UserShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
