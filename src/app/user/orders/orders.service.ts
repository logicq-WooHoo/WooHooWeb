import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {

    constructor(private http :Http) {
        
       }
    
      getPastOrdersForUser(userId: Number){
        let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
        let options = new RequestOptions({ headers: postheaders });
        return this.http.get("http://127.0.0.1:8090/api/user/getpastorders/2",options).map(res => res.json());
      }

}
