import { Component, OnInit } from '@angular/core';
import { EmergencySearchService } from './emergency.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-emergency-search',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css'],
  providers: [EmergencySearchService],
})
export class EmergencySearchComponent implements OnInit {

  emergencySerSearchCount:Array<Object>=new Array<Object>() ;
  emergencyTypeCount:Map<string, Array<number>> = new Map<string, Array<number>>();
  latitude:number=37.793461;
  longitude:number=-122.399642;


  constructor(
    private emergencySearchService: EmergencySearchService, 
    private route: ActivatedRoute,
    private router: Router) {
      this.emergencyServiceTypeCount();
   }

   emergencyServiceTypeCount(){
    this.emergencySearchService.getEmergencyServicesDetails().subscribe(data =>{
      this.emergencyTypeCount=data;
      Object.keys(this.emergencyTypeCount).forEach(key=> {
        let  keyvalue:  Array<number>;
        keyvalue= this.emergencyTypeCount[key]  ;  
       var activityCount={};
       activityCount["name"]=key;
       activityCount["count"]=keyvalue.length;
       activityCount["ids"]=keyvalue;
         this.emergencySerSearchCount.push(activityCount);
        });
   });

   }

   ngOnInit() {
    
  }


}
