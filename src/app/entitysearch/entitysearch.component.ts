import { Component, OnInit } from '@angular/core';
import { EntitySearchService } from '../services/entitysearch.service';
import {Resturant } from '../model/resturant';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {GeoMap} from '../model/gmap';
import { BasicSearchService } from '../services/basicsearch.service';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entitysearch.component.html',
  styleUrls: ['./entitysearch.component.css'],
  providers: [EntitySearchService,BasicSearchService],
})
export class EntitySearchComponent implements OnInit {

  private result:Resturant[];


  constructor(private loginService: EntitySearchService,
    private route: ActivatedRoute,
    private router: Router,
    private basicSearchService: BasicSearchService
  ) {
  
    this.route.params.subscribe(params => {
      
      if (params['longi']) {
       this.doRestaurentSearch(params['longi'],params['lati'])
      }
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
      this.result=data;
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

}
