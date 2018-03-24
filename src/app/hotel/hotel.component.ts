import { Component, OnInit } from '@angular/core';
import { HotelSearchService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers: [HotelSearchService],
})
export class HotelSearchComponent implements OnInit {

  restaurantCitiesList = [];

  constructor(private hotelSearchService: HotelSearchService) {
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
