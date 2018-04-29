import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cart: ShoppingCart;
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart);
   }
  

}
