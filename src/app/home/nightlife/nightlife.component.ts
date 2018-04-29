import { Component, OnInit } from '@angular/core';
import { NightlifeSearchService } from './nightlife.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { BasicSearchService } from '../basic-search/basicsearch.service';

@Component({
  selector: 'app-nightlife-search',
  templateUrl: './nightlife.component.html',
  styleUrls: ['./nightlife.component.css'],
  providers: [NightlifeSearchService],
})
export class NightlifeSearchComponent implements OnInit {

  nightlifeSearchCount:Array<Object>=new Array<Object>() ;
  nightlifeTypeCount:Map<string, Array<number>> = new Map<string, Array<number>>();
  latitude:number=37.793461;
  longitude:number=-122.399642;

   constructor(
    private nightlifeSearchService: NightlifeSearchService, 
    private route: ActivatedRoute,
    private router: Router) {
      this.nightlifeTypeSearchCount();
   }


   nightlifeTypeSearchCount(){
    this.nightlifeSearchService.getNightLifeTypeCount().subscribe(data =>{
      this.nightlifeTypeCount=data;
      Object.keys(this.nightlifeTypeCount).forEach(key=> {
        let  keyvalue:  Array<number>;
        keyvalue= this.nightlifeTypeCount[key]  ;  
       var nightlifeCount={};
       nightlifeCount["name"]=key;
       nightlifeCount["count"]=keyvalue.length;
       nightlifeCount["nightlifeids"]=keyvalue;
         this.nightlifeSearchCount.push(nightlifeCount);
        });
   });

   }


  ngOnInit() {
    
  }


}
