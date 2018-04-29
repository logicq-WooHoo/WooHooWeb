import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class HotelSearchService {

    constructor(private http :Http) {
        
       }


    getHotelTypeCount() {
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });
       return this.http.get('assets/data/hotelCount.json',options).map(res => res.json());
      }
    
   

}
