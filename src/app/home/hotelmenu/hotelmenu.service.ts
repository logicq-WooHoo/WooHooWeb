import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';

@Injectable()
export class HotelmenuService {

  constructor(private http :Http) { }

  restaurentMenu(restaurentID :number) {
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
   return this.http.get("http://127.0.0.1:8090/api/user/restaurant/selectmenu/"+restaurentID,options).map(res => res.json());
  }
}
