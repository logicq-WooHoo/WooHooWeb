import { Component, OnInit } from '@angular/core';
import { LoginService } from './loginservice.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { PubSubService } from '../shared/pub-sub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  type:string="";
  loginType:string="";

  constructor(private loginService: LoginService,
    private authService: AuthService,
    private router: Router,private pubSubService: PubSubService) {
   }

  
 


  ngOnInit() {
  }

  signIn(){
    let request={
      emailId:this.emailId,
      password:this.password
    }
  
    this.loginService.getSignIn(request).subscribe(data=>{
      let user=new SocialUser();
      this.loggedIn = (data != null);
      if(this.loggedIn){
        user.email=data["emailId"];
        user.id=data["id"];
        user.name=data["emailId"];
       // user.userId=data["id"];
        this.loginService.setUserDetails(user);
        this.router.navigate(['']);
        this.setUserDetails(user);
      }
    });
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
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.loginService.setUserDetails(userData);
        this.router.navigate(['']);
        this.setUserDetails(userData);
      }
    );
    
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.loginService.setUserDetails(userData);
        this.router.navigate(['']);
        this.setUserDetails(userData);
        
      }
    );
  }
  
  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.loginService.setUserDetails(userData);
        this.router.navigate(['']);
        this.setUserDetails(userData);
      }
    );
  }  
 
  signOut(): void {
    this.authService.signOut();
  }

  signUp(){
    var request={
        emailId:this.emailId,
        password:this.password,
        type:"customer",
        loginType:"WOHOO"
    }
    this.loginService.getSignUp(request).subscribe(data => {
      let user=new SocialUser();
      this.loggedIn = (data != null);
      if(this.loggedIn){
        user.email=data["emailId"];
        user.id=data["id"];
        user.name=data["emailId"];
        user.provider=data["loginType"];
       // user.userId=data["id"];
        this.loginService.setUserDetails(user);
        this.router.navigate(['']);
        this.setUserDetails(user);
      }
    });
  }


  setUserDetails(user: SocialUser){
   
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('user', JSON.stringify(user));
      if(this.loggedIn){
        console.log(user);
       this.router.navigate(['']);
      }
  }


  isLoginTabActive:string="active";
  isSignupTabActive:string;
  displaySection:boolean=true;

  showLoginTab(){
    this.isLoginTabActive="active";
    this.isSignupTabActive="";
    this.displaySection=true;
  }
  showUserSignUP(){
    this.isSignupTabActive="active";
    this.isLoginTabActive="";
    this.displaySection=false;
  }


}
