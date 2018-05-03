import { Component } from '@angular/core';
import { ShoppingCart } from '../../home/shopping-cart/shopping-cart';
import { CheckoutCartService } from './checkout-cart.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { ShoppingCartService } from '../../shared/shopping-cart-service';
import { PubSubService } from '../../shared/pub-sub.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent {
  cart: ShoppingCart;
  orderModeMessage: string = '';
  private currentCurreny:string;

  constructor(private checkoutCartService: CheckoutCartService,
    private shoppingCartService:ShoppingCartService,
    private pubSubService: PubSubService,
              private router: Router) {
     
     //console.log(this.cart);
     this.getLatestCartWithTaxes();
   }

   ngOnInit() {
    this.currentCurreny=localStorage.getItem("currentCurreny");
  }

   /*calculateTaxes(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
     if(this.cart && this.cart.restaurantCart && this.cart.restaurantCart.length > 0){
      this.cart.grossTotal = 0;
      this.cart.restaurantCart.forEach(restaurant => {
        this.checkoutCartService.getTaxAmount( restaurant.total ).subscribe( data => {
          restaurant.grossTotal = data['tax']['taxable_amount'];
          this.cart.grossTotal = this.cart.grossTotal  + restaurant.grossTotal;
          localStorage.setItem('cart', JSON.stringify(this.cart));
        });
     });
     }
   }*/

   getLatestCartWithTaxes(){
    this.shoppingCartService.calculateTaxes();
    this.cart = this.shoppingCartService.getCartDetails();
    this.pubSubService.subscribe('cart', this.updateCartDetails.bind(this));
     //this.cart = this.shoppingCartService.retrieve();
   }

   updateCartDetails(topic,cart){
    this.cart = cart;
  }
   doEmptyCart(){
    localStorage.removeItem('cart');
    this.cart = null;
   }

   makePayment(){
    this.router.navigate(['checkout/payment', {'amount':this.cart.grossTotal}]);
   }

   increaseQuantity(itemId: any, restaurantId: any, quantityAdded:number){
    this.shoppingCartService.addItemQuantity(itemId,restaurantId,quantityAdded);
    this.shoppingCartService.calculateTaxes();
    //this.getLatestCartWithTaxes();
    //this.cart = this.shoppingCartService.retrieve();
   }

   decreaseQuantity(itemId: any, restaurantId: any, quantityRemoved:number){
    this.shoppingCartService.subtractItemQuantity(itemId,restaurantId,quantityRemoved);
    this.shoppingCartService.calculateTaxes();
    //this.getLatestCartWithTaxes();
    //this.cart = this.shoppingCartService.retrieve();
   }

   updateOrderMode(restaurantId: number, orderMode: string, cabType: string = ''){
     this.shoppingCartService.updateOrderMode(restaurantId,orderMode,cabType);
     //this.getLatestCartWithTaxes();
   }

   removeItemFromCart(itemId: any, restaurantId: any){
    this.shoppingCartService.removeItem(itemId, restaurantId);
    this.shoppingCartService.calculateTaxes();
   }
}
