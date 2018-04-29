import { Component, OnInit } from '@angular/core';
import { ActivitySearchService } from './activites.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { BasicSearchService } from '../basic-search/basicsearch.service';

@Component({
  selector: 'app-activity-search',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css'],
  providers: [ActivitySearchService],
})
export class ActivitySearchComponent implements OnInit {

  activitySearchCount:Array<Object>=new Array<Object>() ;
  activityTypeCount:Map<string, Array<number>> = new Map<string, Array<number>>();
  latitude:number=37.793461;
  longitude:number=-122.399642;


  constructor(
    private activitySearchService: ActivitySearchService, 
    private route: ActivatedRoute,
    private router: Router) {
      this.activityeSearchCount();
   }

   activityeSearchCount(){
    this.activitySearchService.getActivitiesDetails().subscribe(data =>{
      this.activityTypeCount=data;
      Object.keys(this.activityTypeCount).forEach(key=> {
        let  keyvalue:  Array<number>;
        keyvalue= this.activityTypeCount[key]  ;  
       var activityCount={};
       activityCount["name"]=key;
       activityCount["count"]=keyvalue.length;
       activityCount["shopids"]=keyvalue;
         this.activitySearchCount.push(activityCount);
        });
   });

   }

   ngOnInit() {
    
  }
}
