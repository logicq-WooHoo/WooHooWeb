import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent {
  cart: ShoppingCart;
  constructor() {
     this.cart = JSON.parse(localStorage.getItem('cart'));
     console.log(this.cart);
   }
}
