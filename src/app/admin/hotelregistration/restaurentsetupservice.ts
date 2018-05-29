import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { FinalRestaurentSetup } from './restaurantmodel/finalrestaurentsetup';

import { Http, Headers, RequestOptions, Response, RequestMethod, Request } from '@angular/http';


@Injectable()
export class RestaurentSetupService {

  public finalRestaurentSetup = new ReplaySubject<FinalRestaurentSetup>(1);

  constructor(private http: Http) { }


  getFinalRestaurentSetup() {
    return this.finalRestaurentSetup.asObservable();
  }

  public changeFinalRestaurentSetup(finalRestaurentSetup: FinalRestaurentSetup) {
    this.finalRestaurentSetup.next(finalRestaurentSetup)
  }

  getRestaurentTypes() {
    let postheaders = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://127.0.0.1:8090/api/getrestauranttypes", options).map(res => res.json());
  }

  finalSetup(request: FinalRestaurentSetup) {

    let postheaders = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: postheaders });
    this.http.post(" http://127.0.0.1:8090/admin/finalsetup", request, options);
  }


}