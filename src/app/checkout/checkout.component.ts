import { Component } from '@angular/core';
import { ShoppingCart } from '../home/shopping-cart/shopping-cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  title = 'app';
  cart: ShoppingCart;
  constructor(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }
}
