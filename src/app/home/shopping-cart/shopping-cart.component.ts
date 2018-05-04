import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, OnChanges, Input, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { MenuItem } from "../hotelmenu/MenuItem";
import { ShoppingCart } from "./shopping-cart";
import { ShoppingCartService } from '../../shared/shopping-cart-service';
import { CartItem } from "./cart-item";
import { PubSubService } from '../../shared/pub-sub.service';
import {LanguageService} from '../../shared/language.service';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})

export class ShoppingCartComponent implements OnInit, OnDestroy, OnChanges{
  public products: Observable<MenuItem[]>;
  public cart: ShoppingCart;
  public itemCount: number=0;
  public grossTotal: number;
  private currentCurreny:string;
  private language:string;

  private cartSubscription: Subscription;
  @Input() cartItemsCount: number;

  public constructor(private shoppingCartService: ShoppingCartService,
                    private pubSubService: PubSubService,
                    private changeDetectorRef: ChangeDetectorRef,
                    private languageService:LanguageService               
                  ) {

    this.getLanguageDetail();
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


    if(this.cart.totalNumberOfItems!=0){
      
              if (this.language=='zh-tw') {
                this.cart.displayTotalNumberOfItems=this.cart.totalNumberOfItems.toLocaleString('zh-Hans-CN-u-nu-hanidec');
                this.cart.displayItemsTotal=this.cart.itemsTotal.toLocaleString('zh-Hans-CN-u-nu-hanidec');
              }else{
                this.cart.displayTotalNumberOfItems=this.cart.totalNumberOfItems.toString();
                this.cart.displayItemsTotal=this.cart.itemsTotal.toString();
              }  
          }

  }


getLanguageDetail(){
    this.language = this.languageService.getlanguage();
    this.pubSubService.subscribe('language', this.updateLanguageDetail.bind(this));
   
 }
 
 updateLanguageDetail(topic,language){
    this.language = language;

    if(this.cart.totalNumberOfItems!=0){

      if (this.language=='zh-tw') {
        this.cart.displayTotalNumberOfItems=this.cart.totalNumberOfItems.toLocaleString('zh-Hans-CN-u-nu-hanidec');
        this.cart.displayItemsTotal=this.cart.itemsTotal.toLocaleString('zh-Hans-CN-u-nu-hanidec');
      }else{
        this.cart.displayTotalNumberOfItems=this.cart.totalNumberOfItems.toString();
        this.cart.displayItemsTotal=this.cart.itemsTotal.toString();
      }  
    }
   }


      //this.shoppingCartService.updateCart(cart);
      //let updatedCart: ShoppingCart = JSON.parse(localStorage.getItem('cart'));

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
