import { Component, OnInit } from '@angular/core';
import { EntitySearchService } from './entitysearch.service';
import { Resturant } from '../../model/resturant';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { GeoMap } from '../../model/gmap';
import { BasicSearchService } from '../basic-search/basicsearch.service';
import {LanguageService} from '../../shared/language.service';
import {PubSubService} from '../../shared/pub-sub.service';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entitysearch.component.html',
  styleUrls: ['./entitysearch.component.css'],
  providers: [EntitySearchService,BasicSearchService],
})
export class EntitySearchComponent implements OnInit {

  private restaurentDetails:Resturant[];
  private showMenu:boolean=false;
  private cartItemsCount: number = 0;
  private language:string;
  menuText:string="Select Menu";
//private totalPrice: number;

  constructor(private loginService: EntitySearchService,
    private route: ActivatedRoute,
    private router: Router,
    private basicSearchService: BasicSearchService,
    private languageService:LanguageService,
    private pubSubService: PubSubService
  ) {
    this.getLanguageDetail();
    this.route.params.subscribe(params => {
      
      if (params['longi']) {
       this.doRestaurentSearch(params['longi'],params['lati'])
      }else if (params['resIds']) {
        this.doRestaurentTypeSearch(params['resIds']);
       }else if(params['restaurentTypeId']){
        this.doRestaurentSearchByResIdAndCity(params['city'],params['restaurentTypeId']);
       }else if(params['foodCategory']){
        this.doRestaurentSearchByFoodCategory(params['city'],params['foodCategory']);
       }
    });

   }


   getLanguageDetail(){
    this.language = this.languageService.getlanguage();
    this.pubSubService.subscribe('language', this.updateLanguageDetail.bind(this));
   
 }
 
 updateLanguageDetail(topic,language){
     this.language = language;

    if(this.restaurentDetails.length!=0){

      for (var resCount in this.restaurentDetails) {
        if (this.language=='zh-tw') {
          this.restaurentDetails[resCount].displayRecommendationCount=this.restaurentDetails[resCount].recommendationCount.toLocaleString('zh-Hans-CN-u-nu-hanidec');
         
        }else{
          this.restaurentDetails[resCount].displayRecommendationCount=this.restaurentDetails[resCount].recommendationCount.toString();
         
        }
      }


    }

   }


   doRestaurentSearchByFoodCategory(city:string,foodCategory:string){
    var request={
      city:city,
      foodCategory:foodCategory
    };

    this.basicSearchService.restaurentSearch(request).subscribe(data =>{
      this.restaurentDetails=data;

      this.restaurentDetails.forEach(restaurent=>{
       // restaurent.displayRecommendationCount=restaurent.recommendationCount.toString();

        if (this.language=='zh-tw') {
          restaurent.displayRecommendationCount=restaurent.recommendationCount.toLocaleString('zh-Hans-CN-u-nu-hanidec');
         
        }else{
          restaurent.displayRecommendationCount=restaurent.recommendationCount.toString();
         
        }


      })

   });

   }

   doRestaurentSearchByResIdAndCity(city:string,resTypeId:number){
    var request={
        city:city,
        restaurantTypeId:resTypeId
      };

      this.basicSearchService.restaurentSearch(request).subscribe(data =>{
        this.restaurentDetails=data;

        this.restaurentDetails.forEach(restaurent=>{
          if (this.language=='zh-tw') {
            restaurent.displayRecommendationCount=restaurent.recommendationCount.toLocaleString('zh-Hans-CN-u-nu-hanidec');
           
          }else{
            restaurent.displayRecommendationCount=restaurent.recommendationCount.toString();
           
          }
        })
     });

   }
   doRestaurentSearch(longi: number,lati:number) {
    
   var latitude:String;
    var longitude:String; 
    var request={
      latitude:lati ,
      longitude:longi 
      };
     
    this.basicSearchService.restaurentSearch(request).subscribe(data =>{
      this.restaurentDetails=data;
      this.restaurentDetails.forEach(restaurent=>{
        if (this.language=='zh-tw') {
          restaurent.displayRecommendationCount=restaurent.recommendationCount.toLocaleString('zh-Hans-CN-u-nu-hanidec');
         
        }else{
          restaurent.displayRecommendationCount=restaurent.recommendationCount.toString();
         
        }
      })

   });

  }


  doRestaurentTypeSearch(restIds:Array<number>=[]){

    var request={
      restaurantIds:JSON.parse("[" + restIds + "]")
      };
     
    this.basicSearchService.restaurentSearch(request).subscribe(data =>{
      this.restaurentDetails=data;
      this.restaurentDetails.forEach(restaurent=>{
        if (this.language=='zh-tw') {
          restaurent.displayRecommendationCount=restaurent.recommendationCount.toLocaleString('zh-Hans-CN-u-nu-hanidec');
         
        }else{
          restaurent.displayRecommendationCount=restaurent.recommendationCount.toString();
         
        }
      })
   });

  }

  ngOnInit() {
    
  }

  getRestaurantCities(){
    
  }

  signIn(){
  
  }

  signUp(){

   
  }

  showHotelMenu(restuarant: any) {

  
    if (restuarant.showMenu) {
      restuarant.showMenu= false;
      this.menuText="Select Menu";
    } else {
      restuarant.showMenu= true;
      this.menuText="Hide Menu";
    }

  }


  onItemAdd(itemPrice:  number){

    this.cartItemsCount++;
    //this.totalPrice = this.totalPrice + itemPrice;
  }
  

  restaurentMenu(restaurentID:number){

    this.router.navigate(['hotelmenu', {restaurentID:restaurentID}]);
  }

}
