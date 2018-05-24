import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../restaurantmodel/userinformation';
import { FinalRestaurentSetup } from '../restaurantmodel/finalrestaurentsetup';
import { RestaurentSetupService } from '../restaurentsetupservice';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

   userInformation: UserInformation=new UserInformation();
   finalRestaurentSetup:FinalRestaurentSetup=new FinalRestaurentSetup();

   firstName: string="";
	 lastName:string="";
	 emailId: string="";
	 mobileNo : string ="";

  constructor(private restaurentSetupService:RestaurentSetupService,
    private route: ActivatedRoute,
    private router: Router,) { }


  saveUserDetail(){

     this.restaurentSetupService.getFinalRestaurentSetup().subscribe(
       finalRestaurentSetup => this.finalRestaurentSetup=finalRestaurentSetup
    );


    this.userInformation.firstName=this.firstName;
    this.userInformation.lastName=this.lastName;
    this.userInformation.mobileNo=this.mobileNo;
    this.userInformation.emailId=this.emailId;

    this.finalRestaurentSetup.userInformation=this.userInformation;
    this.restaurentSetupService.changeFinalRestaurentSetup(this.finalRestaurentSetup);

    this.router.navigateByUrl('/admin/restaurentdetail');
  }

  ngOnInit() {
  }

}
