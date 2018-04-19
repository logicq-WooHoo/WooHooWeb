import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../configuration/app.config';
import 'rxjs/Rx';


@Injectable()
export class LoginserviceService {

  constructor(private http :HttpClient) {
    
   }

  getSignIn(request){
    console.log("Login service");
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.post("http://127.0.0.1:8090/user/login",request).map(res => res);
  }

  getSignUp(request){
    console.log("Signup service");
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.post("http://127.0.0.1:8090/api/user/registration",request);
  }
  getRestaurantCities() {
    //let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    //let options = new RequestOptions({ headers: postheaders });
    //let getRestaurantCities = "http://localhpst:8080" + this.config.getRestaurantCities;
    let getRestaurantCities = "http://localhpst:8080/api/getFoodCategories" ;
    console.log(this.http.get(getRestaurantCities));
    return this.http.get(getRestaurantCities );
  }

  getFoodCategories() {
    //let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    //let options = new RequestOptions({ headers: postheaders });
    let getFoodCategories = "http://localhpst:8080/api/getFoodCategories";
    console.log(getFoodCategories);
    return this.http.get(getFoodCategories);
  }

}
