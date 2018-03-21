import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService],
})
export class LoginComponent implements OnInit {
  firstname:string="";
  lastname:string="";
  username:string=""
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
      userName:this.username,
      password:this.password
    }
    console.log("Usermane : "+this.username);
    console.log("Password : "+this.password);
    this.loginService.getSignIn(request).subscribe(data=>{
      console.log(data);
      console.log("Usermane : "+this.username);
      console.log("Password : "+this.password);
    })
  }

  signUp(){
    var request={
      firstName:this.firstname,
      lastName:this.lastname,
      username:this.username,
      password:this.password
    }
    console.log(this.firstname+"            "+this.lastname+"     "+this.username+"           "+this.password);
    this.loginService.getSignUp(request).subscribe(data => {
      //console.log(data.usernam);
      
    });
  }

}
