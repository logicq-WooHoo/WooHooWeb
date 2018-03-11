import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../configuration/app.config';

@Injectable()
export class LoginserviceService {

  constructor(private http :HttpClient) {
    
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
