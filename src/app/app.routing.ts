import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { FoodSearchComponent } from './food/food.component';
import { HotelSearchComponent } from './hotel/hotel.component';
import { BarSearchComponent } from './bar/bar.component';
import { ShopSearchComponent } from './shop/shop.component';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
import { EntityTypeComponent } from './entity/entity.component';
import {PatnerComponent } from './patner/patner.component';

export const appRoutes: Routes = [

  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'login',component: LoginComponent },
  { path:  'hotelregistration', component :HotelregistrationComponent},
  { path:  'foodsearchlist', component :FoodSearchComponent},
  { path:  'barsearchlist', component :BarSearchComponent},
  { path:  'hotelsearchlist', component :HotelSearchComponent},
  { path:  'shopsearchlist', component :ShopSearchComponent},
  { path:  'entitytype', component :EntityTypeComponent},
  { path:  'patner', component :PatnerComponent}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);