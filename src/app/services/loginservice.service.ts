import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../configuration/app.config';

@Injectable()
export class LoginserviceService {

  constructor(private http :Http,private config :AppConfig) { }

  getRestaurantCities() {
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    let getRestaurantCities = "http://localhpst:8080" + this.config.getRestaurantCities;
    return this.http.get(getRestaurantCities ,options).map(res => res).catch(err => Observable.throw(err));
  }

  getFoodCategories() {
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    let getFoodCategories = "http://localhpst:8080" + this.config.getFoodCategories;
    return this.http.get(getFoodCategories ,options).map(res => res).catch(err => Observable.throw(err));
  }

}
