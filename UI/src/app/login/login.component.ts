import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DatasourcesService} from '../services/common.service';
// import { request } from 'http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserInfo:{};
  firstName:string="";
  lastName:string="";
  emailId:string="";
  mobileNo:string="";
  valid : boolean = false;
  errorMessage : string;
  constructor(private router : Router,private datasourcesService : DatasourcesService) { }

  ngOnInit() {
  }

  signIn(){
    var request={
      // username:this.userName,
      // password:this.password
    };
    console.log();
    this.datasourcesService.getSignIn(request).subscribe(data => {
      console.log(data.usernam);
      
    });
  }

  signUp(){
    var request={
      firstName:this.firstName,
      lastName:this.lastName,
      emailId:this.emailId,
      mobileNo:this.mobileNo,
      type:'User'
    }
    console.log();
    this.datasourcesService.getSignUp(request).subscribe(data => {
      //console.log(data.usernam);
      
    });
  }


}
