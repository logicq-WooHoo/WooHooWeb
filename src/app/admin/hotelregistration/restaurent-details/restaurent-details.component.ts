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

import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

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
  address: Address = new Address();
  city: string;
  pinCode: string;
  landmark: string;
  state: string;
  country: string;
  latitude:number=18.5075353;
  longitude:number=73.7713107;
  geocoder:any;

  constructor(private restaurentSetupService: RestaurentSetupService,
    private mapsAPILoader: MapsAPILoader,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {

    console.log("hello");
   
    this.mapsAPILoader.load().then(() => {
      
             this.geocoder = new google.maps.Geocoder();
  
          }
          );
      

  }

  saveRestaurentDetail() {

    this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup = finalRestaurentSetup
    );

    this.restaurantDetails.restaurantName = this.restaurantName;
    this.restaurantDetails.registrationNumber = this.registrationNumber;
    this.address.landmark = this.landmark;
    this.address.country = this.country;
    this.address.state = this.state;
    this.address.city = this.city;
    this.address.pinCode = this.pinCode;

    //this.getGeoLocation("wakad,pune");

    this.address.longitude = this.longitude;
    this.address.latitude = this.latitude;
    this.restaurantDetails.address=this.address;

    this.finalRestaurentSetup.restaurantDetails = this.restaurantDetails;
    this.restaurentSetupService.changeFinalRestaurentSetup(this.finalRestaurentSetup);        
    this.router.navigateByUrl('/admin/setuprestaurent');


  }

  getGeoLocation(address: string) {

    console.log("hello");
    
      var address1 = "wakad,pune";
      //var geocoder = new google.maps.Geocoder();
      this.geocoder.geocode({ 'address': address1 }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
          this.latitude = results[0].geometry.location.lat();
          this.longitude = results[0].geometry.location.lng();

        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
      });

  }


  getLatLan(address: string) {
    console.log('Getting Address - ', address);
   // let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      this.geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                observer.next(results[0].geometry.location);
                observer.complete();
            } else {
                console.log('Error - ', results, ' & Status - ', status);
                observer.next({});
                observer.complete();
            }
        });
    })
}

}
