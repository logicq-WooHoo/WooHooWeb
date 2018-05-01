import { Component } from '@angular/core';
import { ShoppingCart } from '../home/shopping-cart/shopping-cart';
import { ShoppingCartService } from '../shared/shopping-cart-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  title = 'app';
  cart: ShoppingCart; 
  user: any;
  constructor(public shoppingCartService: ShoppingCartService){
    
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.getCartDetails();
  }

  getCartDetails(){
    let cart = this.shoppingCartService.get();
    cart.subscribe((updatedCart) => {
      //this.shoppingCartService.updateCart(cart);
      //let updatedCart: ShoppingCart = JSON.parse(localStorage.getItem('cart'));
      this.cart = updatedCart;
    });
  }
}
