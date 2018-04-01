import { Component, OnInit } from '@angular/core';
import { EntitySearchService } from '../services/entitysearch.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import {Resturant } from '../model/resturant';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entitysearch.component.html',
  styleUrls: ['./entitysearch.component.css'],
  providers: [EntitySearchService],
})
export class EntitySearchComponent implements OnInit {

  result:Resturant[];


  constructor(private loginService: EntitySearchService,protected localStorage: AsyncLocalStorage) {
    this.localStorage.getItem<Resturant[]>('searchResult').subscribe((searchResult) => {
     this.result=searchResult;
    });
    
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
