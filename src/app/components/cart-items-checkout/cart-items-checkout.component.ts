import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { UserShoppingCartService } from 'src/app/services/user-shopping-cart.service';

@Component({
  selector: 'app-cart-items-checkout',
  templateUrl: './cart-items-checkout.component.html',
  styleUrls: ['./cart-items-checkout.component.css']
})
export class CartItemsCheckoutComponent implements OnInit {

  constructor(public cartApi:UserShoppingCartService) { }
  @Input() checkout_products:any;
  @Output() deleteEvent=new EventEmitter();
  
  ngOnInit(): void {
  }

  removeItem(product:any){
    this.cartApi.removeItem(product);
    this.deleteEvent.emit(product);
  }

}
