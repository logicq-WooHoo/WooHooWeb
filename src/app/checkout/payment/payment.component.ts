import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';
import { PubSubService } from '../../shared/pub-sub.service';
import { ShoppingCartService } from '../../shared/shopping-cart-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cart: ShoppingCart;
  showComp='card';
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
