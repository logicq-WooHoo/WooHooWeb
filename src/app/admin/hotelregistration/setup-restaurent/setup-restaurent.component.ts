import { Component, OnInit } from '@angular/core';

import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { RestaurentSetupService } from '../restaurentsetupservice';


import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-setup-restaurent',
  templateUrl: './setup-restaurent.component.html',
  styleUrls: ['./setup-restaurent.component.css']
})
export class SetupRestaurentComponent implements OnInit {

  finalRestaurentSetup: FinalRestaurentSetup = new FinalRestaurentSetup();
  private restaurentTypes: any[];
  private restaurentTypeId:number=1;



  constructor(private restaurentSetupService: RestaurentSetupService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.getrestauranttypes();
  }


  getrestauranttypes() {
    this.restaurentSetupService.getRestaurentTypes().subscribe(data => {
      this.restaurentTypes = data;
    });
  }

  ngOnInit() {
  }

  saveRestaurentDetail() {

    this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
      finalRestaurentSetup => this.finalRestaurentSetup = finalRestaurentSetup
    );

    this.finalRestaurentSetup;
    this.restaurentSetupService.changeFinalRestaurentSetup(this.finalRestaurentSetup);

    this.router.navigateByUrl('/admin/restaurentmenu');

  }

}
