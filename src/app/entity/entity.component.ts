import { Component, OnInit } from '@angular/core';
import { EntityTypeService } from '../services/entitytype.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
  providers: [EntityTypeService],
})
export class EntityTypeComponent implements OnInit {

  restaurantCitiesList = [];
  food:String="Food";
  hotel : String="Hotel";
  shop  : String="Shop";
  nightlife:String="Night Life";

  constructor(private loginService: EntityTypeService,
    private translate: TranslateService) {
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
