import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserShoppingCartService {

  constructor(private http: HttpClient) { }
  cart_items: any[] = [];

  addProduct(item: any) {
    let products: any = this.getProductFromCart();
    if (products == 0) {
      item.quantity=1;
      this.cart_items.push(item);
      localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
    }
    else {
      let itemIndex: number = -1;
      products.forEach((val: any, index: number) => {
        if (val.id == item.id) {
          itemIndex = index;
        }
      })
      if(itemIndex == -1) {
        item.quantity = 1;
        products.push(item);
      }
      else {
        products[itemIndex].quantity += 1;
      }
      localStorage.setItem('cart_items', JSON.stringify(products));
    }

  }

  getProductFromCart() {
    let items = localStorage.getItem('cart_items');
    if (items)
      return JSON.parse(items);
    else
      return 0;
  }

  getCartItemsLength() {
    let length: number = 0;
    let cartProducts = this.getProductFromCart();
    cartProducts.forEach((val: any) => {
      length += val.quantity;
    })
    return length;
  }

  getSubTotalPrice() {
    let subTotal: number = 0;
    let cartProducts: any[] = this.getProductFromCart();
    cartProducts.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    return Math.round(subTotal);
  }

  removeItem(product: any) {
    let cart_item: any[] = this.getProductFromCart();
    let itemIndex: number = -1;
    cart_item.forEach((val, index) => {
      if (val.id == product.id) {
        itemIndex = index;
      }
    })

    if (cart_item[itemIndex].quantity > 1) {
      cart_item[itemIndex].quantity -= 1;
    }
    else {
      cart_item = cart_item.filter((val) => {
        return val.id != product.id;
      })
      return localStorage.setItem('cart_items', JSON.stringify(cart_item));
    }

    return localStorage.setItem('cart_items', JSON.stringify(cart_item));
  }
}
