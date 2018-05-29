import { Component, OnInit } from '@angular/core';

import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { RestaurentSetupService } from '../restaurentsetupservice';
import { TimeDetail } from '../restaurantmodel/timedetail';
import { RestaurantSetup } from '../restaurantmodel/restaurantsetup';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-setup-restaurent',
  templateUrl: './setup-restaurent.component.html',
  styleUrls: ['./setup-restaurent.component.css']
})
export class SetupRestaurentComponent implements OnInit {

  finalRestaurentSetup: FinalRestaurentSetup = new FinalRestaurentSetup();
   restaurentTypesDetail: any[];
   restaurentTypeId:number=1;

  restaurentTypes:string[]=[];
  deliveryPartners:string[]=[];
  restaurentTypesDisplay:string[]=[];
	deliveryPartnersDisplay:string[]=[];
	operationTime:TimeDetail[]= new Array<TimeDetail>();
  restaurantSetup : RestaurantSetup=new  RestaurantSetup();


  constructor(private restaurentSetupService: RestaurentSetupService,
    private route: ActivatedRoute,
    private router: Router
  ) {

   // this.getrestauranttypes();
  }


  getrestauranttypes() {
    //Get Restaurent type from backend api.
    this.restaurentSetupService.getRestaurentTypes().subscribe(data => {
      this.restaurentTypesDetail = data;
    });
  }

  ngOnInit() {
  }

  saveRestaurentDetail() {

    this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup = finalRestaurentSetup
    );

    //Need to setup these value from html
    this.restaurentTypes=["1","2"];
    this.deliveryPartners=["2","3"];
    this.restaurentTypesDisplay=["Indian","Itelian"];
    this.deliveryPartnersDisplay=["Food Panda","Zomato"];
    this.operationTime=[{"day":"Sunday","startTime":"9 am","endTime":"11 pm"}];


    //
    this.restaurantSetup.restaurentTypes= this.restaurentTypes;
    this.restaurantSetup.deliveryPartners=this.deliveryPartners;
    this.restaurantSetup.operationTime=this.operationTime;
    this.restaurantSetup.deliveryPartnersDisplay=this.deliveryPartnersDisplay;
    this.restaurantSetup.restaurentTypesDisplay=this.restaurentTypesDisplay;

    this.finalRestaurentSetup.restaurantSetup=this.restaurantSetup;
    this.restaurentSetupService.changeFinalRestaurentSetup(this.finalRestaurentSetup);

    this.router.navigateByUrl('/admin/restaurentmenu');

  }

}
