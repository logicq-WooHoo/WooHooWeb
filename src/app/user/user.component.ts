import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../shared/pub-sub.service';
import { LoginService } from '../login/loginservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'app';
  private user: any;

  constructor(private pubSubService: PubSubService,
    private loginService: LoginService){
    this.getUserDetails();
  }
  ngOnInit(){
   
  }
  getUserDetails(){
    this.user = this.loginService.getUserDetails();
    this.pubSubService.subscribe('user', this.updateUserDetails.bind(this));
     
 }
 
   updateUserDetails(topic,user){
     this.user = user;
   }
}
