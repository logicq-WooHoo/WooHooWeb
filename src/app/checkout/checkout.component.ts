import { Component } from '@angular/core';
import { ShoppingCart } from '../home/shopping-cart/shopping-cart';
import { PubSubService } from '../shared/pub-sub.service';
import { LoginService } from '../login/loginservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  title = 'app';
  cart: ShoppingCart; 
  user: any;
  constructor(private pubSubService: PubSubService,
              private loginService: LoginService){
    
    this.getUserDetails();
    this.getCartDetails();
  }

  getCartDetails(){
    this.cart = null;
    let cart = this.pubSubService.subscribe('cart', this.updateCartDetails.bind(this));
    
  }

  updateCartDetails(topic,cart){
    this.cart = cart;
  }

  getUserDetails(){
    this.user = this.loginService.getUserDetails();
    this.pubSubService.subscribe('user', this.updateUserDetails.bind(this));
     
 }
 
   updateUserDetails(topic,user){
     this.user = user;
   }

}
