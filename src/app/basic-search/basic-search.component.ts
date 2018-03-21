import { Component, OnInit } from '@angular/core';
import { BasicSearchService } from '../services/basicsearch.service';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css'],
  providers: [BasicSearchService],
})
export class BasicSearchComponent implements OnInit {

  restaurantCitiesList = [];

  constructor(private loginService: BasicSearchService) {
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
