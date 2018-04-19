import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user.component';
// import {EntitySearchComponent } from './entitysearch/entitysearch.component';


export const userRoutes: Routes = [
  
  { path: '', component: UserComponent ,
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent }
  ]}
  // { path:  'entitysearch', component :EntitySearchComponent}
];

export const userRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(userRoutes);