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

  restarentSearchCount:Array<Object>=new Array<Object>() ;
  italianResSize:number;
  latitude:number=18.5075353;
  longitude:number=73.7713107;
  //latitude:number=37.793461;
  //longitude:number=-122.399642;
  restarentCount:Map<string, Array<number>> = new Map<string, Array<number>>();
  resCountTopMenus:Array<Object>=new Array<Object>() ;
  restarentCountTopMenus:Map<string, Array<number>> = new Map<string, Array<number>>();

  constructor(
    private foodSearchService: FoodSearchService, 
    private basicSearchService: BasicSearchService,
    private route: ActivatedRoute,
    private router: Router) {
    this.getRestaurantCount();
    this.getTrendingRestuarntCountMenuType();
   }

  ngOnInit() {

  }

  getRestaurantCities(){
    
  }

  getTrendingRestuarntCountMenuType(){
      this.foodSearchService.getTrendingMenuCount().subscribe(data =>{
        this.restarentCountTopMenus=data;
        Object.keys(this.restarentCountTopMenus).forEach(key=> {
          let  keyvalue:  Array<number>;
          keyvalue= this.restarentCountTopMenus[key]  ;  
         var resturnatMenuCount={};
         resturnatMenuCount["name"]=key;
         resturnatMenuCount["count"]=keyvalue.length;
         resturnatMenuCount["resids"]=keyvalue;
         let  isVeg:boolean;
         var finddata=keyvalue.find(x=>x==0);
         if(finddata==0){
          resturnatMenuCount["isVeg"]=true;
         }else{
          resturnatMenuCount["isVeg"]=false;
         }
        
        this.resCountTopMenus.push(resturnatMenuCount);
          });
     });

  }

 

  getRestaurantCount(){
    var request={
      latitude:this.latitude ,
      longitude:this.longitude
      };
     
    this.basicSearchService.restaurentTypeSearch(request).subscribe(data =>{
      this.restarentCount=data;
      Object.keys(this.restarentCount).forEach(key=> {
        let  keyvalue:  Array<number>;
        keyvalue= this.restarentCount[key]  ;  
       var restCount={};
            restCount["name"]=key;
            restCount["count"]=keyvalue.length;
            restCount["resturantids"]=keyvalue;
         this.restarentSearchCount.push(restCount);
    });
    //this.restarentCount.forEach(res=>{
  //    console.log('Key: ' + res[0] + ' Value: ' + res[1])
  //  });
     // Array.from(this.restarentCount.entries()).forEach(entry => console.log('Key: ' + entry[0] + ' Value: ' + entry[1]));

     // this.restarentCount.forEach((value: any[], key: string) => {
        // var restCount={};
        //    restCount["name"]=key;
        //    restCount["count"]=value.length;
        // this.restarentSearchCount.push(restCount);
       
   // });
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
