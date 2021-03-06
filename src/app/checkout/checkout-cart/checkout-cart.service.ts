import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request } from '@angular/http';

@Injectable()
export class CheckoutCartService {
    
    
    constructor(private http: Http){
        
    }

    public getTaxAmount(amount: number): Observable<any>{
        let postheaders = new Headers({'Content-Type': 'application/json',
        'Authorization': 'Token token=\"9b9a678aa4fa58c9aa470bbb9ad13ef1\"'});
    
        let options = new RequestOptions({ headers: postheaders });
        return this.http.post('https://api.taxjar.com/v2/taxes', {
                
                    "from_country": "CA",
                    "from_zip": "V6G 3E",
                    "from_state": "BC",
                    "to_country": "CA",
                    "to_zip": "V6G 3E",
                    "to_state": "BC",
                    "amount": amount,
                    "shipping":12,
                    "line_items": [
                    {
                        "quantity": 1,
                        "unit_price": amount
                    }
                    ]
                
            },options).map(
                res => res.json());

            }

            getUserProfile(userId :number) {
                let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
                let options = new RequestOptions({ headers: postheaders });
               return this.http.get("http://127.0.0.1:8090/api/user/getmyprofile/"+userId,options).map(res => res.json());
              }      
}
