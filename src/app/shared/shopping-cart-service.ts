import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ShoppingCart } from "../home/shopping-cart/shopping-cart";
import { MenuItem } from "../home/hotelmenu/menuItem";
import { CartItem } from "../home/shopping-cart/cart-item";
import { RestaurantCart } from '../home/shopping-cart/restaurant-cart';
import { TaxService } from './tax-service';

const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: MenuItem[];

  public constructor(public taxService: TaxService) {  
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public addItem(product: MenuItem, quantity: number,allProduct:MenuItem[], restaurantId: number, restaurantName: string): void {

    this.products=allProduct;
    const cart = this.retrieve();
    let tempItem = new CartItem;
    let tempRestaurant = new RestaurantCart;

    tempItem.price = product.price;
    tempItem.productId = product.id;
    tempItem.isVeg = product.isVeg;
    tempItem.productName = product.itemName;
    tempItem.quantity = quantity;

    tempRestaurant.restaurantId = restaurantId;
    tempRestaurant.restaurantName = restaurantName;
    if(cart.restaurantCart){
      let foundRestaurant = cart.restaurantCart.find((res) => res.restaurantId === restaurantId);
      let foundItem: CartItem;
      if(foundRestaurant){
        foundItem = cart.restaurantCart.find((res) => res.restaurantId === restaurantId)
        .itemsSelected.find((item) => item.productId === product.id);
      }
     
  
      if(foundRestaurant && foundItem){
        foundItem.quantity += quantity;
      }
      if(foundRestaurant && !foundItem){
        cart.restaurantCart.find((res) => res.restaurantId === restaurantId).itemsSelected.push(tempItem);
      }
      if(!foundRestaurant && !foundItem){
        tempRestaurant.itemsSelected.push(tempItem);
        cart.restaurantCart.push(tempRestaurant);
      }
    }else{
      tempRestaurant.itemsSelected.push(tempItem);
      cart.restaurantCart = [];
      cart.restaurantCart.push(tempRestaurant);
    }

    this.updateCart(cart);
    
  }

  public updateCart(cart){
    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  addItemQuantity(productId: string, restaurantId: number, quantity:number){
    const cart = this.retrieve();
    if(cart.restaurantCart){
      let foundRestaurant = cart.restaurantCart.find((res) => res.restaurantId === restaurantId);
      let foundItem: CartItem;
      if(foundRestaurant){
        foundItem = cart.restaurantCart.find((res) => res.restaurantId === restaurantId)
        .itemsSelected.find((item) => item.productId === productId);
      }
      if(foundRestaurant && foundItem){
        foundItem.quantity += quantity;
      }
    }
    this.updateCart(cart);
  }

  subtractItemQuantity(productId: string, restaurantId: number, quantity:number){
    const cart = this.retrieve();
    if(cart.restaurantCart){
      let foundRestaurant = cart.restaurantCart.find((res) => res.restaurantId === restaurantId);
      let foundItem: CartItem;
      if(foundRestaurant){
        foundItem = cart.restaurantCart.find((res) => res.restaurantId === restaurantId)
        .itemsSelected.find((item) => item.productId === productId);
      }
      if(foundRestaurant && foundItem){
        foundItem.quantity -= quantity;
      }
    }
    this.updateCart(cart);
  }
 
  private calculateCart(cart: ShoppingCart): void {
    let itemCount = 0;
    let grossTotal = 0;
      if(cart.restaurantCart){
        cart.itemsTotal = 0;
        cart.restaurantCart.forEach(restaurant => {
          restaurant.total = 0;
          restaurant.itemsSelected.forEach(item =>{
            itemCount = item.quantity + itemCount;
            restaurant.total = restaurant.total + (item.quantity * item.price);
          });
          cart.itemsTotal = cart.itemsTotal + restaurant.total;
          cart.totalNumberOfItems = itemCount;
        });
      }
  }

  public calculateTaxes(){
    const cart = this.retrieve();
     if(cart && cart.restaurantCart && cart.restaurantCart.length > 0){
      cart.grossTotal = 0;
      cart.restaurantCart.forEach(restaurant => {
        this.taxService.getTaxAmount( restaurant.total ).subscribe( data => {
          restaurant.grossTotal = data['tax']['taxable_amount'];
          cart.grossTotal = cart.grossTotal  + restaurant.grossTotal;
          this.updateCart(cart);
        });
     });
     
     }
   }

   public updateOrderMode(restaurantId: number, orderMode: string, cabType: string = ''){
    let orderModeMessage = 'Your food would be delivered within 45 minutes.';
    if(cabType == 'private'){
      orderModeMessage = 'Your Cab will arrive in 5 minutes!'
     }else if(cabType == 'share'){
      orderModeMessage = 'Your share Cab will arrive in 10 minutes!'
     }else if(orderMode=='takeaway' && cabType==''){
      orderModeMessage = 'Please arrive at the restaurant after 20 minutes!'
     }
    const cart = this.retrieve();
    if(cart.restaurantCart){
      let foundRestaurant = cart.restaurantCart.find((res) => res.restaurantId === restaurantId);
      foundRestaurant.orderMode = orderMode;
      foundRestaurant.cabType = cabType;
      foundRestaurant.orderMessage = orderModeMessage;
    }
    this.updateCart(cart);
   }

  public retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private save(cart: ShoppingCart): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        });
  }
}