import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrdersService } from './orders.service';
import { PubSubService } from '../../shared/pub-sub.service';
import { LoginService } from '../../login/loginservice.service';
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  private pastOrders: any[];
  private panelOpenState: false;
  private user: SocialUser;
  constructor(private ordersService: OrdersService,private loginService: LoginService,private pubSubService: PubSubService)  {
    
   }

  ngOnInit() {
    this.getUserDetails();
    //Need to push fetch record with user
    this.ordersService.getPastOrdersForUser(1).subscribe(pastOrders => {
        this.pastOrders = pastOrders;
        console.log(pastOrders);
    });
  }

  getUserDetails(){
    this.user = this.loginService.getUserDetails();
    this.pubSubService.subscribe('user', this.updateUserDetails.bind(this));
     
 }
 
   updateUserDetails(topic,user){
     this.user = user;
   }
 
}
