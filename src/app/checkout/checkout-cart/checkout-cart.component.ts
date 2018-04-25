import { Component } from '@angular/core';
import { ShoppingCartService } from '../../home/shopping-cart/shoppingcartservice';
import { ShoppingCart } from '../../home/shopping-cart/ShoppingCart';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent {
  cart: ShoppingCart;
  constructor( private shoppingCartService: ShoppingCartService) {
     this.cart = this.shoppingCartService.retrieve();
   }
}
