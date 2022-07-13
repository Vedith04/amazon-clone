import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutTotalCartComponent } from './checkout-total-cart.component';

describe('CheckoutTotalCartComponent', () => {
  let component: CheckoutTotalCartComponent;
  let fixture: ComponentFixture<CheckoutTotalCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutTotalCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutTotalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
