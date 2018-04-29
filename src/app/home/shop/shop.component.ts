import { Component, OnInit } from '@angular/core';
import { ShopSearchService } from './shop.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { BasicSearchService } from '../basic-search/basicsearch.service';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopSearchService],
})
export class ShopSearchComponent implements OnInit {

  shopSearchCount:Array<Object>=new Array<Object>() ;
  shopTypeCount:Map<string, Array<number>> = new Map<string, Array<number>>();
  latitude:number=37.793461;
  longitude:number=-122.399642;


  constructor(
    private shopSearchService: ShopSearchService, 
    private route: ActivatedRoute,
    private router: Router) {
      this.shopTypeSearchCount();
   }

   shopTypeSearchCount(){
    this.shopSearchService.getShopTypeCount().subscribe(data =>{
      this.shopTypeCount=data;
      Object.keys(this.shopTypeCount).forEach(key=> {
        let  keyvalue:  Array<number>;
        keyvalue= this.shopTypeCount[key]  ;  
       var shopCount={};
       shopCount["name"]=key;
       shopCount["count"]=keyvalue.length;
       shopCount["shopids"]=keyvalue;
         this.shopSearchCount.push(shopCount);
        });
   });

   }

  ngOnInit() {
    
  }

  getShopDetails(){

  }

}
