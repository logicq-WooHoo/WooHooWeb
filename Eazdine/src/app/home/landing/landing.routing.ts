import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodSearchComponent } from '../food/food.component';
import {LandingComponent } from './landing.component';

export const landingRoutes: Routes = [
  { path: '', component: LandingComponent ,
  children: [
    { path: '',component: FoodSearchComponent }
  ] }
];

export const landingRoutingProviders: any[] = [
];

export const landingrouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);