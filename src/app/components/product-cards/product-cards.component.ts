import { Component, OnInit, Input} from '@angular/core';
import { UserShoppingCartService} from 'src/app/services/user-shopping-cart.service'

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  constructor(private clientCartApi:UserShoppingCartService) { }

  @Input() productsData:any=[];

  ngOnInit(): void {
  }

  addToCart(product:any){
    this.clientCartApi.addProduct(product);
  }

}
