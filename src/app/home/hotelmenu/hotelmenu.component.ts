import { Component, OnInit , Input } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import {HotelmenuService} from './hotelmenu.service';
import { MenuItem } from './menuItem';
import { ShoppingCartService }  from '../shopping-cart/shoppingcartservice';


@Component({
  selector: 'app-hotelmenu',
  templateUrl: './hotelmenu.component.html',
  styleUrls: ['./hotelmenu.component.css'],
  providers: [HotelmenuService,ShoppingCartService]
})
export class HotelmenuComponent implements OnInit {

  @Input() restaurentId: number;

  restaurentMenu:MenuItem[];
  itemsCount: number = 0;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private hotelMenuService:HotelmenuService,
    private shoppingCartService: ShoppingCartService) { 

      this.route.params.subscribe(params => {
        
        if (params['restaurentID']) {
         this.getRestaurentMenu(params['restaurentID'])
        }
      });
      
    }

  ngOnInit() {
    this.getRestaurentMenu(this.restaurentId)
  }


  public addProductToCart(product: MenuItem): void {
    this.shoppingCartService.addItem(product, 1,this.restaurentMenu);
    this.itemsCount++;
  }

  getRestaurentMenu(resID: number){

    this.hotelMenuService.restaurentMenu(resID).subscribe(data =>{
      this.restaurentMenu=data;
   });
  }
}
