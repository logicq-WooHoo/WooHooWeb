import { Component, OnInit } from '@angular/core';
import { BasicSearchService } from '../services/basicsearch.service';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css'],
  providers: [BasicSearchService],
})
export class BasicSearchComponent implements OnInit {

  public searchControl: FormControl;
  public city:String;
  public country:String;
  public temp:String[];
  public location:String;
  searchforlocation:String="search for location";
  bsearch="Search";


  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private basicSearchService: BasicSearchService)
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

          console.log(this.temp);
          

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

}
