import { Component, OnInit } from '@angular/core';
import { HotelSearchService } from './hotel.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { BasicSearchService } from '../basic-search/basicsearch.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers: [HotelSearchService],
})
export class HotelSearchComponent implements OnInit {

  hotelsSearchCount:Array<Object>=new Array<Object>() ;
  hotelCount:Map<string, Array<number>> = new Map<string, Array<number>>();
  latitude:number=37.793461;
  longitude:number=-122.399642;

   
  constructor(
    private hotelSearchService: HotelSearchService, 
    private route: ActivatedRoute,
    private router: Router) {
      this.hotelTypeCount();
   }

   hotelTypeCount(){
    this.hotelSearchService.getHotelTypeCount().subscribe(data =>{
      this.hotelCount=data;
      Object.keys(this.hotelCount).forEach(key=> {
        let  keyvalue:  Array<number>;
        keyvalue= this.hotelCount[key]  ;  
        console.log('Key: ' +keyvalue+ ' Value: ' +key)
       var hotelCount={};
       hotelCount["name"]=key;
       hotelCount["count"]=keyvalue.length;
       hotelCount["hotelids"]=keyvalue;
         this.hotelsSearchCount.push(hotelCount);
        });
   });
     
  }
  ngOnInit() {
    
  }


 
}
