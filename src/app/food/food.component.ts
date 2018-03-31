import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from '../services/food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodSearchService],
})
export class FoodSearchComponent implements OnInit {

  label10:String="Our Best Delicious Foods";
  label11:String="Not limit your Taste";
  label12: String="8 Resturants Near you";
  japanese: String="Japanese";
  europian: String="Europian";
  american: String="American";
  chinese: String="Chinese";
  indian: String="Indian";
  austerlian: String="Austerlian";
  italian: String="Italian";
  korean: String="Korean";

  restaurantCitiesList = [];

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
