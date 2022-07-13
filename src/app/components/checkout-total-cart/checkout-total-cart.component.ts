import { Component, OnInit } from '@angular/core';
import { UserShoppingCartService } from 'src/app/services/user-shopping-cart.service';

@Component({
  selector: 'app-checkout-total-cart',
  templateUrl: './checkout-total-cart.component.html',
  styleUrls: ['./checkout-total-cart.component.css']
})
export class CheckoutTotalCartComponent implements OnInit {

  constructor(public userCartApi: UserShoppingCartService) { }

  ngOnInit(): void {
  }

  getCartItemLength(){
    return this.userCartApi.getCartItemsLength();
  }

}
