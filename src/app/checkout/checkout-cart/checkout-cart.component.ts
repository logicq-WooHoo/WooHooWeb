import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';
import { CheckoutCartService } from './checkout-cart.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent {
  cart: ShoppingCart;
  constructor(public checkoutCartService: CheckoutCartService,
              public router: Router) {
     this.cart = JSON.parse(localStorage.getItem('cart'));
     //console.log(this.cart);
     this.calculateTaxes();
   }

   calculateTaxes(){
     if(this.cart && this.cart.restaurantCart && this.cart.restaurantCart.length > 0){
      this.cart.restaurantCart.forEach(restaurant => {
        this.checkoutCartService.getTaxAmount( restaurant.total ).subscribe( data => {
          restaurant.grossTotal = data['tax']['taxable_amount'];
          this.cart.grossTotal = this.cart.grossTotal  + restaurant.grossTotal;
          localStorage.setItem('cart', JSON.stringify(this.cart));
        });
     });
     }
   }
   
   doEmptyCart(){
    localStorage.removeItem('cart');
    this.cart = null;
   }

   makePayment(){
    this.router.navigate(['checkout/payment', {'amount':this.cart.grossTotal}]);
   }

}
