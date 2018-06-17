import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from './food.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { RestaurentDetails } from '../restaurentDetail';

@Component({
  selector: 'app-food-search',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodSearchService],
})
export class FoodSearchComponent implements OnInit {

  restarentSearchCount:Array<Object>=new Array<Object>() ;
  restaurentDetails:RestaurentDetails[];
 
 
  constructor(
    private foodSearchService: FoodSearchService, 
    private route: ActivatedRoute,
    private router: Router
    ) {
   
    this.getAllRestaurentDetails();
   }

  ngOnInit() {

  }

  getAllRestaurentDetails(){
      this.foodSearchService.getRestaurentDetails().subscribe(data =>{
        this.restaurentDetails=data;       
     });

  }

 
  restaurentTypedata(restaurentDeatil:RestaurentDetails){

    this.router.navigate(['restaurentConfirmation', {resName:restaurentDeatil.restaurantProfile.restName,
      resAdd:(restaurentDeatil.addressDetails.street+","+restaurentDeatil.addressDetails.stateCode+","+restaurentDeatil.addressDetails.countryCode)                 
    }]);

  }

}