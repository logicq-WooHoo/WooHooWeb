import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrdersService } from './orders.service';
import { PubSubService } from '../../shared/pub-sub.service';
import { LoginService } from '../../login/loginservice.service';
import { SocialUser } from "angularx-social-login";
import { ShoppingCartService } from '../../shared/shopping-cart-service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  private pastOrders: any[];
  private panelOpenState: false;
  private user: SocialUser;
  constructor(private ordersService: OrdersService,
    private loginService: LoginService,
    private pubSubService: PubSubService,
    private shoppingCartService: ShoppingCartService,
    private router: Router)  {
    
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

   fillCartAndRedirect(orderTrackings: any[]){
    orderTrackings.forEach(orderTracking => {
      orderTracking.orderDetails.menuItems.forEach(item => {
        this.shoppingCartService.addItem(item, item.quantity, null, 
          orderTracking.orderDetails.restaurantId, orderTracking.orderDetails.restaurantName,
          orderTracking.orderDetails);
      });
    });
    this.router.navigate(['/checkout']);
   }
 
}
