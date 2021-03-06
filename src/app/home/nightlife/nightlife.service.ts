import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class NightlifeSearchService {

    constructor(private http :Http) {
        
       }


    getNightLifeTypeCount() {
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });
       return this.http.get('assets/data/nightlifeCount.json',options).map(res => res.json());
      }
    

}
