import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodSearchComponent } from '../food/food.component';
import {LandingComponent } from './landing.component';
import { HotelSearchComponent } from '../hotel/hotel.component';
import { ShopSearchComponent } from '../shop/shop.component';
import { ActivitySearchComponent } from '../activites/activites.component';
import {NightlifeSearchComponent} from '../nightlife/nightlife.component';
import {EmergencySearchComponent} from '../emergency/emergency.component';

export const landingRoutes: Routes = [
  { path: '', component: LandingComponent ,
  children: [
    { path: '',component: FoodSearchComponent },
    { path: 'hotels',component: HotelSearchComponent },
    { path: 'shop',component: ShopSearchComponent },
    { path: 'activites',component: ActivitySearchComponent },
    { path: 'nightlife',component: NightlifeSearchComponent },
    { path: 'emergency',component: EmergencySearchComponent }
  ] }
];

export const landingRoutingProviders: any[] = [
];

export const landingrouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);