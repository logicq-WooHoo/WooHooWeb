import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';
import { ShoppingCartService } from '../../shared/shopping-cart-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cart: ShoppingCart;
  showComp='card';
  constructor(public shoppingCartService:ShoppingCartService) {
    this.getLatestCartWithTaxes();
   }
   
   getLatestCartWithTaxes(){
    let kart = this.shoppingCartService.get();
    kart.subscribe( updatedCart => {
     this.cart = updatedCart;
    });  

  }
} 
