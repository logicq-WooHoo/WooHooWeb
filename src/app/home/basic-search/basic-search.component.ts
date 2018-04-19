import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
 

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css'],
  providers: [],
})
export class BasicSearchComponent implements OnInit {

 public searchData:Object = {};
  public searchControl: FormControl;
  public lati: number;
  public longi: number;
  public city:String;
  public country:String;
  public temp:String[];
  public location:String;

 
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router
  
  )
    { }

  ngOnInit() {
    
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
    this.router.navigate(['entitysearch', {longi:this.longi, lati:this.lati }]);
  }

}
