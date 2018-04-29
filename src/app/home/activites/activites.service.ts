import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ActivitySearchService {

    constructor(private http :Http) {
        
       }


       getActivitiesDetails() {
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });
       return this.http.get('assets/data/activityCount.json',options).map(res => res.json());
      }

}
