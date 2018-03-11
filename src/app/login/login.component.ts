import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService],
})
export class LoginComponent implements OnInit {

  restaurantCitiesList = [];

  constructor(private loginService: LoginserviceService) {
   }

  ngOnInit() {
    console.log(this.loginService.getRestaurantCities());
  }

  getRestaurantCities(){
      console.log(this.loginService.getRestaurantCities());
  }

}
