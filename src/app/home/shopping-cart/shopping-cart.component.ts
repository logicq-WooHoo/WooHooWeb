import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, OnChanges, Input, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { MenuItem } from "../hotelmenu/MenuItem";
import { ShoppingCart } from "./shopping-cart";
import { ShoppingCartService } from '../../shared/shopping-cart-service';
import { CartItem } from "./cart-item";
import { PubSubService } from '../../shared/pub-sub.service';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})

export class ShoppingCartComponent implements OnInit, OnDestroy, OnChanges{
  public products: Observable<MenuItem[]>;
  public cart: ShoppingCart;
  public itemCount: number;
  public grossTotal: number;
  private currentCurreny:string;

  private cartSubscription: Subscription;
  @Input() cartItemsCount: number;

  public constructor(private shoppingCartService: ShoppingCartService,
                    private pubSubService: PubSubService,
                    private changeDetectorRef: ChangeDetectorRef) {
    this.cart = null;
    this.cart = this.shoppingCartService.getCartDetails();
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.fetchAndUpdateCart();
    this.currentCurreny=localStorage.getItem("currentCurreny");

  }

  public ngOnChanges(): void {
    this.fetchAndUpdateCart();
  }
  private fetchAndUpdateCart(){
    this.pubSubService.subscribe('cart', this.updateCartDetails.bind(this));
    
  }

  updateCartDetails(topic,cart){
    this.cart = cart;
    this.itemCount = cart.totalNumberOfItems;
    this.grossTotal = cart.itemsTotal;
    this.changeDetectorRef.markForCheck();
  }
      //this.shoppingCartService.updateCart(cart);
      //let updatedCart: ShoppingCart = JSON.parse(localStorage.getItem('cart'));

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
