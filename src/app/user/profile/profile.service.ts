import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';

@Injectable()
export class ProfileService {

  constructor(private http :Http) { }

  getUserProfile(userId :number) {
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
   return this.http.get("http://127.0.0.1:8090/api/user/getmyprofile/"+userId,options).map(res => res.json());
  }
}
