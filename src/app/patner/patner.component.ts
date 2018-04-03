import { Component, OnInit } from '@angular/core';
import { PatnerService } from '../services/patner.service';

@Component({
  selector: 'app-patner',
  templateUrl: './patner.component.html',
  styleUrls: ['./patner.component.css'],
  providers: [PatnerService],
})
export class PatnerComponent implements OnInit {

  restaurantCitiesList = [];
  
  constructor(private patnerService: PatnerService) {
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
