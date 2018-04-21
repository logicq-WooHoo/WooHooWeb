import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
// import {EntitySearchComponent } from './entitysearch/entitysearch.component';


export const userRoutes: Routes = [
  
  { path: '', component: UserComponent ,
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent },
    { path: 'profile', component: ProfileComponent}
  ]}
  // { path:  'entitysearch', component :EntitySearchComponent}
];

export const userRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(userRoutes);