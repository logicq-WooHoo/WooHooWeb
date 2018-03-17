import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService],
})
export class LoginComponent implements OnInit {
  firstName:string="";
  lastName:string="";
  emailId:string="";
  mobileNo:string="";
  password:string="";
  valid : boolean = false;
  errorMessage : string;
  restaurantCitiesList = [];

  constructor(private loginService: LoginserviceService) {
   }

  ngOnInit() {
    console.log(this.loginService.getRestaurantCities());
  }

  getRestaurantCities(){
      console.log(this.loginService.getRestaurantCities());
  }

  signIn(){
    let request={
      userName:this.emailId,
      password:this.password
    }
    this.loginService.getSignIn(request).subscribe(data=>{
      console.log(data)
    })
  }

  signUp(){
    var request={
      firstName:this.firstName,
      lastName:this.lastName,
      emailId:this.emailId,
      mobileNo:this.mobileNo,
      type:'User'
    }
    console.log();
    this.loginService.getSignUp(request).subscribe(data => {
      //console.log(data.usernam);
      
    });
  }

}
