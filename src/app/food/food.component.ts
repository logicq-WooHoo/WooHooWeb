import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from '../services/food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodSearchService],
})
export class FoodSearchComponent implements OnInit {

  constructor(private foodSearchService: FoodSearchService) {
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
