import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//import { HotelSearchComponent } from './hotel/hotel.component';
// import { BarSearchComponent } from './bar/bar.component';
//import { ShopSearchComponent } from './shop/shop.component';
//import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
//import {EntitySearchComponent } from './entitysearch/entitysearch.component';
// import { LocationComponent } from './location/location.component';

export const appRoutes: Routes = [
  // { path: 'landing', pathMatch: 'full', component: LocationComponent },
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path:  'login', component : LoginComponent},
  //{ path:  'barsearchlist', component :BarSearchComponent},
  //{ path:  'hotelsearchlist', component :HotelSearchComponent},
  //{ path:  'shopsearchlist', component :ShopSearchComponent},
  //{ path:  'entitysearch', component :EntitySearchComponent}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);