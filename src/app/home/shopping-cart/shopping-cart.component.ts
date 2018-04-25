import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, OnChanges, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { MenuItem } from "../hotelmenu/MenuItem";
import { ShoppingCart } from "./shopping-cart";
import { ShoppingCartService } from './shopping-cart-service';
import { CartItem } from "./cart-item";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  providers:[ShoppingCartService]
})

export class ShoppingCartComponent implements OnInit, OnDestroy, OnChanges{
  public products: Observable<MenuItem[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  public grossTotal: number;

  private cartSubscription: Subscription;
  @Input() cartItemsCount: number;

  public constructor(private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = 0;
      this.grossTotal = 0;
      if(cart.restaurantCart){
        cart.restaurantCart.forEach(restaurant => {
          restaurant.itemsSelected.forEach(item =>{
            this.itemCount = item.quantity + this.itemCount;
            this.grossTotal = this.grossTotal + (item.quantity * item.price);
          });
        });
      }
    });
  }

  public ngOnChanges(): void {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = 0;
      this.grossTotal = 0;
      if(cart.restaurantCart){
        cart.restaurantCart.forEach(restaurant => {
          restaurant.itemsSelected.forEach(item =>{
            this.itemCount = item.quantity + this.itemCount;
            this.grossTotal = this.grossTotal + (item.quantity * item.price);
          });
        });
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
