import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService],
})
export class LoginComponent implements OnInit {
  firstname:string="";
  lastname:string="";
  username:string=""
  emailId:string="";
  mobileNo:string="";
  password:string="";
  valid : boolean = false;
  errorMessage : string;
  restaurantCitiesList = [];
  private user: SocialUser;
  private loggedIn: boolean;
 

  constructor(private loginService: LoginserviceService,
    private authService: AuthService,
    private router: Router) {
   }

  
 


  ngOnInit() {
    console.log(this.loginService.getRestaurantCities());
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('user', JSON.stringify(user));
      if(this.loggedIn){
        console.log(user);
        this.router.navigate(['']);
      }
    });
  }

  getRestaurantCities(){
      console.log(this.loginService.getRestaurantCities());
  }

  signIn(){
    let request={
      userName:this.username,
      password:this.password
    }
    console.log("Usermane : "+this.username);
    console.log("Password : "+this.password);
    this.loginService.getSignIn(request).subscribe(data=>{
      console.log(data);
      console.log("Usermane : "+this.username);
      console.log("Password : "+this.password);
    })
  }

  /*public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        
      }
    );
  }*/
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }  
 
  signOut(): void {
    this.authService.signOut();
  }

  signUp(){
    var request={
      firstName:this.firstname,
      lastName:this.lastname,
      username:this.username,
      password:this.password
    }
    console.log(this.firstname+"            "+this.lastname+"     "+this.username+"           "+this.password);
    this.loginService.getSignUp(request).subscribe(data => {
      //console.log(data.usernam);
      
    });
  }

}
