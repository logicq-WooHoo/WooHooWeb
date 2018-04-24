import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';


export const checkoutRoutes: Routes = [
  
  { path: '', component: CheckoutCartComponent ,
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'checkout', component: CheckoutCartComponent },
    //{ path: 'payment', component: ProfileComponent}
  ]}
  // { path:  'entitysearch', component :EntitySearchComponent}
];

export const checkoutRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(checkoutRoutes);