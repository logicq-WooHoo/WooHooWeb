import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  private pastOrders: any[];
  private panelOpenState: false;
  constructor(private ordersService: OrdersService)  {
    
   }

  ngOnInit() {
    this.ordersService.getPastOrdersForUser(2).subscribe(pastOrders => {
        this.pastOrders = pastOrders;
        console.log(pastOrders);
    });
  }
}
