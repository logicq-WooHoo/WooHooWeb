import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from './food.service';
import { Resturant } from './resturant';
import { BasicSearchService } from '../basic-search/basicsearch.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-food-search',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodSearchService,BasicSearchService],
})
export class FoodSearchComponent implements OnInit {

  result:any;
  italianResSize:number;
  latitude:number=18.5075353;
  longitude:number=73.807182;
  showKorean:boolean=false;
  showItalian:boolean=false;
  showAusterlian:boolean=false;
  showIndian:boolean=false;
  showChinese:boolean=false;
  showAmerican:boolean=false;
  showEuropian:boolean=false; 
  showJapanese:boolean=false;
  

  constructor(
    private foodSearchService: FoodSearchService, 
    private basicSearchService: BasicSearchService,
    private route: ActivatedRoute,
    private router: Router) {
      this.getRestaurantCount();
   }

  ngOnInit() {

  }

  getRestaurantCities(){
    
  }

  getRestaurantCount(){
    var request={
      latitude:this.latitude ,
      longitude:this.longitude
      };
     
    this.basicSearchService.restaurentTypeSearch(request).subscribe(data =>{
      this.result=data;

      if(this.result.Italian && this.result.Italian.length>0){
        this.showItalian=true;
       }
    
       if(this.result.Indian && this.result.Indian.length>0){
        this.showIndian=true;
       }

        if(this.result.American && this.result.American.length>0){
          this.showAmerican=true;
       }


     if(this.result.Chinese && this.result.Chinese.length>0){
      this.showChinese=true;
   }

   if(this.result.Austerlian && this.result.Austerlian.length>0){
    this.showAusterlian=true;
 }

 if(this.result.Japanese && this.result.Japanese.length>0){
  this.showJapanese=true;
}

if(this.result.Korean && this.result.Korean.length>0){
  this.showKorean=true;
}

if(this.result.Europian && this.result.Europian.length>0){
  this.showEuropian=true;
}

   });
     
  }

  restaurentTypedata(restaurentIds:Array<number>=[]){


    this.router.navigate(['entitySearch', {resIds:restaurentIds}]);

  }

  signIn(){
  
  }

  signUp(){

   
  }

}
