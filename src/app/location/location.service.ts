import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';

@Injectable()
export class LocationService {

    constructor(private http :Http) {
        
    }
 
   getListOfCountries() : Observable<String[]> {
     return Observable.of(['India', 'China', 'USA', 'Canada', 'Mexico', 'Japan']);
    }
    getListOfCities( country: String) : Observable<String[]> {
      return Observable.of(['New Delhi', 'Mumbai', 'Hyderabad', 'Bangalore', 'Pune', 'Chennai']);
    }
}
