import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';
import { ShoppingCartService } from '../../shared/shopping-cart-service';

@Component({
  selector: 'app-payment',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  cart: ShoppingCart;
  constructor(public shoppingCartService:ShoppingCartService) {
    this.getLatestCartWithTaxes()
   }
   getLatestCartWithTaxes(){
    let kart = this.shoppingCartService.get();
    kart.subscribe( updatedCart => {
     this.cart = updatedCart;
    });
    //this.cart = this.shoppingCartService.retrieve();
  }

}
