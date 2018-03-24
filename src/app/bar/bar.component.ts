import { Component, OnInit } from '@angular/core';
import { BarSearchService } from '../services/bar.service';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers: [BarSearchService],
})
export class BarSearchComponent implements OnInit {

  restaurantCitiesList = [];

  constructor(private barSearchService: BarSearchService) {
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
