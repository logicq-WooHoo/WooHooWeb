import { Component, OnInit } from '@angular/core';
import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { Address } from '../restaurantmodel/address';
import { RestaurentSetupService } from '../restaurentsetupservice';
import { RestaurantDetails } from '../restaurantmodel/restaurantdetails';

@Component({
  selector: 'app-restaurent-details',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.css'],
  providers:[RestaurentSetupService]
})
export class RestaurentDetailsComponent implements OnInit {

  finalRestaurentSetup:FinalRestaurentSetup=new FinalRestaurentSetup();

  restaurantDetails:RestaurantDetails =new RestaurantDetails();

   restaurantName: string="";
	 registrationNumber:string="" ;
	 phone: number ;
   website : string="" ;
   address:Address;

   constructor(private restaurentSetupService:RestaurentSetupService) { }

  ngOnInit() {
  }

  saveRestaurentDetail(){

    this.restaurentSetupService.currentfinalRestaurentSetup.subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup=finalRestaurentSetup
   );

   this.restaurantDetails.restaurantName=this.restaurantName;
   this.restaurantDetails.registrationNumber=this.registrationNumber;

   this.finalRestaurentSetup.RestaurantDetails=this.restaurantDetails;
   this.restaurentSetupService.changeFinalRestaurentSetup(this.finalRestaurentSetup);

  }

}
