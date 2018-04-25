import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ShoppingCart } from "./shopping-cart";
import { MenuItem } from "../hotelmenu/menuItem";
import { CartItem } from "./cart-item";
import { RestaurantCart } from './restaurant-cart';

const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: MenuItem[];

  public constructor() {  
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
    
    
    /*let tempRestaurant: RestaurantCart;
    let tempItem: CartItem;
    cart.restaurantCart.forEach(restaurant => {
      if(restaurant.restaurantName === restaurantName){
        tempRestaurant = restaurant;
        restaurant.itemsSelected.forEach(itemSelected => {
          if(itemSelected.productId === product.id){
            itemSelected.quantity += quantity;
          }else{
            tempItem = new CartItem;
            tempItem.price = product.price;
            tempItem.productId = product.id;
            tempItem.isVeg = product.isVeg;
            restaurant.itemsSelected.push(tempItem);
          }
        });
      }
    })
   
    let item = cart.items.find((p) => p.productId === product.id);
    if (item === undefined) {
      
      cart.items.push(item);
    }

    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);*/

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
    
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

 
  private calculateCart(cart: ShoppingCart): void {
    if(cart.restaurantCart){
      cart.restaurantCart.forEach(restaurant => {
        restaurant.itemsSelected.forEach(item =>{
          cart.itemsTotal = cart.itemsTotal + (item.quantity * item.price);
        });
      });
    }
     cart.grossTotal = cart.itemsTotal;
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