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
    this.fetchAndUpdateCart();
  }

  public ngOnChanges(): void {
    this.fetchAndUpdateCart();
  }
  private fetchAndUpdateCart(){
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.shoppingCartService.updateCart(cart);
      let updatedCart: ShoppingCart = JSON.parse(localStorage.getItem('cart'));
      this.itemCount = updatedCart.totalNumberOfItems;
      this.grossTotal = updatedCart.itemsTotal;
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
