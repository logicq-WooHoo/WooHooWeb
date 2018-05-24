import { Component, OnInit } from '@angular/core';
import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { Address } from '../restaurantmodel/address';
import { RestaurentSetupService } from '../restaurentsetupservice';
import { RestaurantDetails } from '../restaurantmodel/restaurantdetails';
import { } from '@types/googlemaps';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-restaurent-details',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.css']
})
export class RestaurentDetailsComponent implements OnInit {

  finalRestaurentSetup: FinalRestaurentSetup = new FinalRestaurentSetup();
  restaurantDetails: RestaurantDetails = new RestaurantDetails();
  restaurantName: string = "";
  registrationNumber: string = "";
  phone: number;
  website: string = "";
  address: Address=new Address();
  city: string;
  pinCode: string;
  landmark: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;

  constructor(private restaurentSetupService: RestaurentSetupService) { }

  ngOnInit() {
  }

  saveRestaurentDetail() {

    this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup = finalRestaurentSetup
    );

    this.restaurantDetails.restaurantName = this.restaurantName;
    this.restaurantDetails.registrationNumber = this.registrationNumber;
    this.address.landmark=this.landmark;
    this.address.country=this.country;
    this.address.state=this.state;
    this.address.city=this.city;
    this.address.pinCode=this.pinCode;

    this.getGeoLocation("wakad,pune");

    this.address.longitude=this.longitude;
    this.address.latitude=this.latitude;


    this.finalRestaurentSetup.restaurantDetails = this.restaurantDetails;
    this.restaurentSetupService.changeFinalRestaurentSetup(this.finalRestaurentSetup);

  }

  getGeoLocation(address: string) {
    
   
  var address ="wakad,pune";
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
    this.latitude=results[0].geometry.location.lat;
    this.longitude=results[0].geometry.location.lng;

    } else {
      console.log("Geocode was not successful for the following reason: " + status);
    }
  });

}

}
