import { Component, OnInit } from '@angular/core';

import { RestaurantMenu } from '../restaurantmodel/restaurantmenu';
import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { RestaurentSetupService } from '../restaurentsetupservice';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-restaurent-menu',
  templateUrl: './restaurent-menu.component.html',
  styleUrls: ['./restaurent-menu.component.css']
})
export class RestaurentMenuComponent implements OnInit {

  finalRestaurentSetup: FinalRestaurentSetup = new FinalRestaurentSetup();
  
	public restaurantMenu: RestaurantMenu ;
  
  constructor(private restaurentSetupService: RestaurentSetupService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
  }

  saveRestaurentDetail(){

    this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup = finalRestaurentSetup
    );

    //Need to add menu items here.

    this.router.navigateByUrl('/admin/openrestaurent');


  }

}
