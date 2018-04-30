import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'app';
  private user: any;

  constructor(){
    
  }
  ngOnInit(){
    this.isUserLoggedIn();
  }
  isUserLoggedIn(){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
}
