import { Component, OnInit } from '@angular/core';
import { PatnerService } from '../services/patner.service';

@Component({
  selector: 'app-patner',
  templateUrl: './patner.component.html',
  styleUrls: ['./patner.component.css'],
  providers: [PatnerService],
})
export class PatnerComponent implements OnInit {

  nightlife:String="Night Life";
  label1:String="Best Things to Do in the City";
  label2:String="Search and Find what you are looking for. Best spots are here for you";
  label3:String="Near by Night Life Available in City";
  label4:String="Best Hotels";
  label5:String="Near by Hotel avilable with high rating and details";
  label6:String="Amazing Places";
  label7:String="Near by Travel places with affordable price";
  label9:String="Book";


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
