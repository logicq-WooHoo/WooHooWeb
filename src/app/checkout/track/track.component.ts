import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';

@Component({
  selector: 'app-payment',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  cart: ShoppingCart;
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart);
   }
  

}
