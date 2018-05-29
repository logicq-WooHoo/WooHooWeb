import { Component, OnInit } from '@angular/core';

import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { RestaurentSetupService } from '../restaurentsetupservice';

@Component({
  selector: 'app-open-restaurent',
  templateUrl: './open-restaurent.component.html',
  styleUrls: ['./open-restaurent.component.css']
})
export class OpenRestaurentComponent implements OnInit {

  finalRestaurentSetup: FinalRestaurentSetup = new FinalRestaurentSetup();

  firstName: string;

  lastName: string;

  emailId: string;

  mobileNo: string;

  restaurantName: string;

  registrationNumber: string;

  landmark: string;

  state: string;

  country: string;

  pinCode: string;

  restaurentTypesDisplay:string[];

  deliveryPartnersDisplay:string[];
  

  constructor(private restaurentSetupService: RestaurentSetupService) {

    this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup = finalRestaurentSetup
    );

   this.populateRestaurentDetail();

  }

  populateRestaurentDetail(){
  //Set UserInformation.
  this.firstName= this.finalRestaurentSetup.userInformation.firstName;
  this.lastName=this.finalRestaurentSetup.userInformation.lastName;
  this.emailId=this.finalRestaurentSetup.userInformation.emailId;
  this.mobileNo=this.finalRestaurentSetup.userInformation.mobileNo;

  //Set Restaureurent Detail.
  this.restaurantName=this.finalRestaurentSetup.restaurantDetails.restaurantName;
  this.registrationNumber=this.finalRestaurentSetup.restaurantDetails.registrationNumber;
  this.landmark=this.finalRestaurentSetup.restaurantDetails.address.landmark;
  this.state=this.finalRestaurentSetup.restaurantDetails.address.state;
  this.country=this.finalRestaurentSetup.restaurantDetails.address.country;
  this.pinCode=this.finalRestaurentSetup.restaurantDetails.address.pinCode;
  

  //Set Restaurent Setup Info.
    this.restaurentTypesDisplay=this.finalRestaurentSetup.restaurantSetup.restaurentTypesDisplay;
    this.deliveryPartnersDisplay=this.finalRestaurentSetup.restaurantSetup.deliveryPartnersDisplay;
    
}

finalSetup(){
  this.restaurentSetupService.finalSetup(this.finalRestaurentSetup);
}


  ngOnInit() {
  }

}
