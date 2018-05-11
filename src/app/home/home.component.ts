
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

import { ShoppingCart } from './shopping-cart/shopping-cart';
import { PubSubService } from '../shared/pub-sub.service';
import { LoginService } from '../login/loginservice.service';
import { LanguageService } from '../shared/language.service';
import { ShoppingCartService } from '../shared/shopping-cart-service';

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
  cart: ShoppingCart;
  public city:String;
  public country:String;
  public temp:String[];
  public location:String="135 Newtownards Road, Belfast, BT4 1AB";
  private selectedLanguage:string="English";

 
  @ViewChild("search")
  public searchElementRef: ElementRef;
  //defaultLocation:String="Pune Railway Station, Agarkar Nagar";
 

  constructor(private _formBuilder: FormBuilder,private translate: TranslateService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private pubSubService: PubSubService,
    private loginService: LoginService,
    private languageService:LanguageService,
    private shoppingCartService: ShoppingCartService) {

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
  
  this.initMap();

  localStorage.setItem("currentCurreny","₹");
  localStorage.setItem("lang","en");
  this.getUserDetails();
  this.getCartDetails();
  }

  getCartDetails(){
    this.cart = null;
    this.cart = this.shoppingCartService.getCartDetails();
    let cart = this.pubSubService.subscribe('cart', this.updateCartDetails.bind(this));
    
  }

  updateCartDetails(topic,cart){
    this.cart = cart;
  }

  initMap(){
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

          if(this.temp[this.temp.length-1].trim()=="India"){
          localStorage.setItem("currentCurreny","₹");
          }else if(this.temp[this.temp.length-1].trim()=="USA"){
            localStorage.setItem("currentCurreny","$");
          }else{
            localStorage.setItem("currentCurreny","¥"); 
          }

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
  switchLanguage(language: string) {

    if(language=='en'){
      this.selectedLanguage="English";
    }else if(language=='zh-tw'){
      this.selectedLanguage="中文";
    }else if(language=='fr'){
      this.selectedLanguage="français";
    }else if(language=='sp'){
      this.selectedLanguage="Español";
    }else if(language=='jp'){
      this.selectedLanguage="日本語";
    }else if(language=='sw'){
      this.selectedLanguage="svenska";
    }else if(language=='kr'){
      this.selectedLanguage="한국어";
    }else if(language=='it'){
      this.selectedLanguage="italiano";
    }else if(language=='it'){
      this.selectedLanguage="Latine";
    }else if(language=='ir'){
      this.selectedLanguage="Gaeilge";
    }

    this.translate.use(language);
    this.languageService.changeLanguage(language);
  }
 getUserDetails(){
   this.user = this.loginService.getUserDetails();
   this.pubSubService.subscribe('user', this.updateUserDetails.bind(this));
    
}

  updateUserDetails(topic,user){
    this.user = user;
  }

 signOut(){
  this.authService.signOut();
  localStorage.removeItem('user');
  this.user = null;
 }

 restaurentSearchdata(){
  this.router.navigate(['entitySearch', {longi:this.longi, lati:this.lati }]);
}
}
