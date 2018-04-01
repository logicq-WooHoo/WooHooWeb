import { Component, OnInit } from '@angular/core';
import { EntitySearchService } from '../services/entitysearch.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entitysearch.component.html',
  styleUrls: ['./entitysearch.component.css'],
  providers: [EntitySearchService],
})
export class EntitySearchComponent implements OnInit {


  constructor(private loginService: EntitySearchService,protected localStorage: AsyncLocalStorage) {
    this.localStorage.getItem<Object>('searchResult').subscribe((searchResult) => {
      console.log(searchResult);
    });
    console.log();
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
