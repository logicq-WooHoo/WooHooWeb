import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';
import { ShoppingCartService } from '../../shared/shopping-cart-service';
import { PubSubService } from '../../shared/pub-sub.service';

@Component({
  selector: 'app-payment',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  cart: ShoppingCart;
  constructor(private pubSubService: PubSubService,
    private shoppingCartService: ShoppingCartService) {
      this.getCartDetails();
  }

  getCartDetails(){
    this.cart = this.shoppingCartService.getCartDetails();
    let cart = this.pubSubService.subscribe('cart', this.updateCartDetails.bind(this));

  }

  updateCartDetails(topic,cart){
    this.cart = cart;
  }
} 
