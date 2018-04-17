import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {TranslateService} from 'ng2-translate';
import { LocationService } from './location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [],
})
export class LocationComponent implements OnInit {

 public searchData:Object = {};
  public searchControl: FormControl;
  public lati: number;
  public longi: number;
  public city:String;
  public country:String;
  public temp:String[];
  public location:String;
  public countryList: String[];
  public selectedCountry: String;
  public cityList: String[];
  public selectedCity: String;

  @ViewChild("citySearch")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  
  )
    { }

  ngOnInit() {
    
    this.locationService.getListOfCountries().subscribe(countries => {
        this.countryList=countries;
     });
     
    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          this.location=place.formatted_address;

          this.temp=this.location.split(",");

          //console.log(this.temp);
          

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.lati = place.geometry.location.lat();
          this.longi= place.geometry.location.lng();
          
        });
      });
    });
  }

  restaurentSearchdata(){
    this.router.navigate(['landing', {longi:this.longi, lati:this.lati , place:this.location}]);
  }

  selectCountry(newValue) {
    
    this.locationService.getListOfCities(newValue).subscribe(data => {
      this.cityList = data;
      this.selectedCountry = newValue;
    });
       
  } 

  selectCity(newValue) {
    this.selectedCity = newValue;
    
       
  } 

}
