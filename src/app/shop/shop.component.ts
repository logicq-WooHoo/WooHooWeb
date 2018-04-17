import { Component, OnInit } from '@angular/core';
import { ShopSearchService } from './shop.service';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopSearchService],
})
export class ShopSearchComponent implements OnInit {

  restaurantCitiesList = [];

  constructor(private shopSearchService: ShopSearchService) {
   }

  ngOnInit() {
    
  }

  getRestaurantCities(){
    
  }

  signIn(){
  
  }

  signUp(){

   
  }

}
