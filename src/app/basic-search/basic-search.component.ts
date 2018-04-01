import { Component, OnInit } from '@angular/core';
import { BasicSearchService } from '../services/basicsearch.service';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import { ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
 

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css'],
  providers: [BasicSearchService],
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
  searchforlocation:String="search for location";
  bsearch="Search";

 
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private basicSearchService: BasicSearchService,protected localStorage: AsyncLocalStorage)
    {
     
     }

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

          this.lati = place.geometry.location.lat();
          this.longi= place.geometry.location.lng();
        });
      });
    });
  }

  restaurentSearchdata(){
    var latitude:String;
      var longitude:String; 
    var request={
      latitude:this.lati ,
      longitude:this.longi 
      };
     console.log("Request: "+request);
    

    this.basicSearchService.restaurentSearch(request).subscribe(data => {
     // this.searchData=data;
    //this.localStorage.setItem('searchResult', this.searchData);
        this.localStorage.setItem('searchResult', data).subscribe(() => {});
    });

    
  }

}
