
import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { LandingService } from './landing/landing.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
//import {TranslateService} from '@ngx-translate/core';
import {TranslateService} from 'ng2-translate';
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";

import { } from '@types/googlemaps';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private user: SocialUser;
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
  //defaultLocation:String="Pune Railway Station, Agarkar Nagar";
 

  constructor(private _formBuilder: FormBuilder,private translate: TranslateService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    translate.setDefaultLang('en');
    translate.use('en');
   }

  ngOnInit() {

    var isLinear = true;
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.user = JSON.parse(localStorage.getItem('user'));
  this.initLocation();

  localStorage.setItem("lang","en");
  }

  initLocation(){
        //create search FormControl
        this.searchControl = new FormControl();

        //load Places Autocomplete
     /*   this.mapsAPILoader.load().then(() => {
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
        });*/
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("lang",language);
  }
  signOut(): void {
    localStorage.clear();
    this.user = null;
    this.authService.signOut();
  }
}
