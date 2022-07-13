import { Component, OnInit } from '@angular/core';
import {UserShoppingCartService} from 'src/app/services/user-shopping-cart.service';
import {CartItemsCheckoutComponent} from 'src/app/components/cart-items-checkout/cart-items-checkout.component';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  constructor(private cartProductsApi: UserShoppingCartService) { }

  items:any[]=[];

  ngOnInit(): void {
    this.cartItems();
  } 

  checkCartEmpty(){
    return this.cartProductsApi.getCartItemsLength();
  }  

  cartItems(){
    this.items=this.cartProductsApi.getProductFromCart();
  }

  deleteEventHandler(p:any){
    this.cartItems();
  }

}
