import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout.component';
import { TrackComponent } from './track/track.component';


export const checkoutRoutes: Routes = [
  
  { path: '', component: CheckoutComponent ,
  children: [
    { path: '', component: CheckoutCartComponent },
    { path: 'payment', component: PaymentComponent},
    { path: 'track', component: TrackComponent}
  ]}
  // { path:  'entitysearch', component :EntitySearchComponent}
];

export const checkoutRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(checkoutRoutes);