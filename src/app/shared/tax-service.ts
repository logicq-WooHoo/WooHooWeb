import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request } from '@angular/http';

@Injectable()
export class TaxService {
    
    
    constructor(private http: Http){
        
    }

    public getTaxAmount(amount: number,quantity:number): Observable<any>{
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
                    "shipping":0,
                    "line_items": [
                    {
                        "quantity": quantity,
                        "unit_price": amount
                    }
                    ]
                
            },options).map(
                res => res.json());

            }

           
}
