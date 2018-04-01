import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../configuration/app.config';
import {Resturant} from '../model/resturant';


@Injectable()
export class BasicSearchService {

    constructor(private http :HttpClient) {
        
       }
    
      searchAccordingToEntity(request){
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });
        return this.http.post("http://127.0.0.1:8090/user/login",request).map(res => res);
      }

     // restaurentSearch(request) {
       // console.log("Call to Backend");
       // let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
       // let options = new RequestOptions({ headers: postheaders });
       // return this.http.post("http://127.0.0.1:8090/api/user/restaurant/search",request);
     // }

      restaurentSearch(request): Observable<Resturant[]> {
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });

        return this.http.post("http://127.0.0.1:8090/api/user/restaurant/search",request)
            .map((response: Response) => <Resturant[]>response.json());
    }
}
