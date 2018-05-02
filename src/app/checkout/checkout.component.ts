import { Component } from '@angular/core';
import { ShoppingCart } from '../home/shopping-cart/shopping-cart';
import { PubSubService } from '../shared/pub-sub.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  title = 'app';
  cart: ShoppingCart; 
  user: any;
  constructor(private pubSubService: PubSubService){
    
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.getCartDetails();
  }

  getCartDetails(){
    this.cart = null;
    let cart = this.pubSubService.subscribe('cart', this.updateCartDetails.bind(this));
    
  }

  updateCartDetails(topic,cart){
    this.cart = cart;
  }

}
