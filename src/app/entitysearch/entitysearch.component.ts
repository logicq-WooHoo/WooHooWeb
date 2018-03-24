import { Component, OnInit } from '@angular/core';
import { EntitySearchService } from '../services/entitysearch.service';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entitysearch.component.html',
  styleUrls: ['./entitysearch.component.css'],
  providers: [EntitySearchService],
})
export class EntitySearchComponent implements OnInit {

  restaurantCitiesList = [];

  constructor(private loginService: EntitySearchService) {
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
