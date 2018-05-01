import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import {TranslateService} from '@ngx-translate/core';
import {TranslateService} from 'ng2-translate';
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers:[LandingService]
})

export class LandingComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private user: SocialUser;
  private restaurentTypes:any[];
  private restaurentTypeId:number=0;

  activeFlag: any = {
    foodsTabActive:String,
    hotelsTabActive:String,
    shopTabActive:String,
    activtiesTabActive:String,
    nightlifeTabActive:String,
    emergencyTabActive:String
  };
  
  
  //defaultLocation:String="Pune Railway Station, Agarkar Nagar";
 

  constructor(private _formBuilder: FormBuilder
    ,private translate: TranslateService,
    private authService: AuthService,
    private landingService:LandingService,
    private route: ActivatedRoute,
    private router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  
      this.activeFlag.hotelsTabActive='';
      this.activeFlag.shopTabActive='',
      this.activeFlag.activtiesTabActive='',
      this.activeFlag.nightlifeTabActive='',
      this.activeFlag.emergencyTabActive=''
       this.activeFlag.foodsTabActive='active';


       this.getrestauranttypes();
     
   }

   searchRestaurent(restaurentTypeId:number){ 

    //need to channge city
    this.router.navigate(['entitySearch', {city:"Pune",restaurentTypeId:restaurentTypeId}]);

   }

   getrestauranttypes(){
    this.landingService.getRestaurentTypes().subscribe(data =>{
      this.restaurentTypes=data;
    });
   }

   onChange(restaurentTypeId:number){
    this.restaurentTypeId=restaurentTypeId;
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
    
  }

  
  signOut(): void {
    localStorage.clear();
    this.user = null;
    this.authService.signOut();
  }

  setActive(entity: string){
   if(entity=='FOODS'){
    this.activeFlag.hotelsTabActive='';
    this.activeFlag.shopTabActive='',
    this.activeFlag.activtiesTabActive='',
    this.activeFlag.nightlifeTabActive='',
    this.activeFlag.emergencyTabActive=''
     this.activeFlag.foodsTabActive='active';
   }
   if(entity=='HOTELS'){
    this.activeFlag.hotelsTabActive='active';
    this.activeFlag.shopTabActive='',
    this.activeFlag.activtiesTabActive='',
    this.activeFlag.nightlifeTabActive='',
    this.activeFlag.emergencyTabActive=''
     this.activeFlag.foodsTabActive='';
   }
   if(entity=='SHOP'){
    this.activeFlag.hotelsTabActive='';
    this.activeFlag.shopTabActive='active',
    this.activeFlag.activtiesTabActive='',
    this.activeFlag.nightlifeTabActive='',
    this.activeFlag.emergencyTabActive=''
     this.activeFlag.foodsTabActive='';
   }
   if(entity=='ACTIVTIES'){
    this.activeFlag.hotelsTabActive='';
    this.activeFlag.shopTabActive='',
    this.activeFlag.activtiesTabActive='active',
    this.activeFlag.nightlifeTabActive='',
    this.activeFlag.emergencyTabActive=''
     this.activeFlag.foodsTabActive='';
   }
   if(entity=='NIGHTLIFE'){
    this.activeFlag.hotelsTabActive='';
    this.activeFlag.shopTabActive='',
    this.activeFlag.activtiesTabActive='',
    this.activeFlag.nightlifeTabActive='active',
    this.activeFlag.emergencyTabActive=''
     this.activeFlag.foodsTabActive='';
   }
   if(entity=='EMERGENCY'){
    this.activeFlag.hotelsTabActive='';
    this.activeFlag.shopTabActive='',
    this.activeFlag.activtiesTabActive='',
    this.activeFlag.nightlifeTabActive='',
    this.activeFlag.emergencyTabActive='active'
     this.activeFlag.foodsTabActive='';
   }
  }
}
