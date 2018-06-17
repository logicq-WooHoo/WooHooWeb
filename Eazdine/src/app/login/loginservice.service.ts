import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable()
export class LoginService {
  public user: SocialUser;
  constructor(private http :HttpClient,
              private authService: AuthService) {
    this.user = null;
   }

  getSignIn(request){
    console.log("Login service");
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','username':request.emailId,'password':request.password});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.post("http://127.0.0.1:8090/api/login",request).map(res => res);
  }

  getSignUp(request){
    console.log("Signup service");
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.post("http://127.0.0.1:8090/api/user/registration",request);
  }

  signOut(): void {
    this.authService.signOut();
    this.user = null;
    this.setUserDetails(null);
  }

  setUserDetails(user: SocialUser){ 
    if(user){
      console.log(user);
      this.user = user;
    }
    
  }

  getUserDetails(){
    return this.user;
  }
}
