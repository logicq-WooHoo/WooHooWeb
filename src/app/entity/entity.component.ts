import { Component, OnInit } from '@angular/core';
import { EntityTypeService } from '../services/entitytype.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
  providers: [EntityTypeService],
})
export class EntityTypeComponent implements OnInit {

  constructor(private loginService: EntityTypeService) {
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
