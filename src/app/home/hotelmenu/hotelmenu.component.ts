import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import {HotelmenuService} from './hotelmenu.service';
import { MenuItem } from './menuItem';
import { ShoppingCartService }  from '../../shared/shopping-cart-service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Resturant } from '../../model/resturant';
import {LanguageService} from '../../shared/language.service';
import {PubSubService} from '../../shared/pub-sub.service';


@Component({
  selector: 'app-hotelmenu',
  templateUrl: './hotelmenu.component.html',
  styleUrls: ['./hotelmenu.component.css'],
  providers: [HotelmenuService]
})
export class HotelmenuComponent implements OnInit ,OnChanges{

  @Input() restaurantId: number;
  @Input() restaurantName: string;
  @Input() restaurentDetail: Resturant;
  @Output() onItemAdd = new EventEmitter<number>();

  restaurentMenu:MenuItem[];
  itemsCount: number = 0;
  private currentCurreny:string;
  private language:string;

 


  constructor( private route: ActivatedRoute,
    private router: Router,
    private hotelMenuService:HotelmenuService,
    private shoppingCartService: ShoppingCartService,
    private languageService:LanguageService,
    private pubSubService: PubSubService) { 

      this.getLanguageDetail();

      this.route.params.subscribe(params => {
        
        if (params['restaurentID']) {
         this.getRestaurentMenu(params['restaurentID']);
        }
      });
      
    }


    getLanguageDetail(){
      this.language = this.languageService.getlanguage();
      this.pubSubService.subscribe('language', this.updateLanguageDetail.bind(this));
     
   }
   
   updateLanguageDetail(topic,language){
       this.language = language;
  
      if(this.restaurentMenu.length!=0){
  
        for (var resCount in this.restaurentMenu) {
          if (this.language=='zh-tw') {
            this.restaurentMenu[resCount].displayPrice=this.restaurentMenu[resCount].price.toLocaleString('zh-Hans-CN-u-nu-hanidec');
          }else{
            this.restaurentMenu[resCount].displayPrice=this.restaurentMenu[resCount].price.toString();
          }
        }
  
  
      }
  
     }

  ngOnInit() {
    this.getRestaurentMenu(this.restaurantId);
    this.currentCurreny=localStorage.getItem("currentCurreny");
  }

  ngOnChanges(){

    this.getRestaurentMenu(this.restaurantId);
  }


  public addProductToCart(product: MenuItem): void {
    if(null==product["itemSelected"]){
      this.shoppingCartService.addItem(product, 1,this.restaurentMenu, this.restaurantId, this.restaurantName, this.restaurentDetail);
      this.onItemAdd.emit(product.price);
      this.itemsCount++;
      product["itemSelected"]="rem-cart";
    }else{
      product["itemSelected"]=null;
      this.shoppingCartService.removeItem(product.id, this.restaurantId);
      this.onItemAdd.emit(-product.price);
      this.itemsCount--;
    }
  
  }

  getRestaurentMenu(resID: number){

    this.hotelMenuService.restaurentMenu(resID).subscribe(data =>{
      this.restaurentMenu=data;
      this.restaurentMenu.forEach(res=>{

        if(this.language=='zh-tw'){
          res.displayPrice=res.price.toLocaleString('zh-Hans-CN-u-nu-hanidec');
         }else{
          res.displayPrice=res.price.toString();
         }        
      })
   });
  }
}
