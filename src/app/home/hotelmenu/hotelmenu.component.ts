import { Component, OnInit , Input } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import {HotelmenuService} from './hotelmenu.service';
import { MenuItem } from './menuItem';
import { ShoppingCartService }  from '../shopping-cart/shopping-cart-service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-hotelmenu',
  templateUrl: './hotelmenu.component.html',
  styleUrls: ['./hotelmenu.component.css'],
  providers: [HotelmenuService,ShoppingCartService]
})
export class HotelmenuComponent implements OnInit ,OnChanges{

  @Input() restaurantId: number;
  @Input() restaurantName: string;
  restaurentMenu:MenuItem[];
  itemsCount: number = 0;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private hotelMenuService:HotelmenuService,
    private shoppingCartService: ShoppingCartService) { 

      this.route.params.subscribe(params => {
        
        if (params['restaurentID']) {
         this.getRestaurentMenu(params['restaurentID']);
        }
      });
      
    }

  ngOnInit() {
    this.getRestaurentMenu(this.restaurantId);
  }

  ngOnChanges(){

    this.getRestaurentMenu(this.restaurantId);
  }


  public addProductToCart(product: MenuItem): void {
    this.shoppingCartService.addItem(product, 1,this.restaurentMenu, this.restaurantId, this.restaurantName);
    this.itemsCount++;
  }

  getRestaurentMenu(resID: number){

    this.hotelMenuService.restaurentMenu(resID).subscribe(data =>{
     var language= localStorage.getItem('lang');
     var numberlang='';
     
      this.restaurentMenu=data;
      this.restaurentMenu.forEach(res=>{

        if(language=='zh-tw'){
          numberlang='zh-Hans-CN-u-nu-hanidec';
          res.displayPrice=res.price.toLocaleString(numberlang);
         }else{
          res.displayPrice=res.price.toString();
         }        
      })
   });
  }
}
