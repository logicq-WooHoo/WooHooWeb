import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodSearchComponent } from '../food/food.component';
import {PatnerComponent } from '../patner/patner.component';;

export const landingRoutes: Routes = [
  { path: '',component: FoodSearchComponent,
  children: [
   
    { path: 'hotels', component: PatnerComponent },
    { path: 'nightslife', component: PatnerComponent}
  ] }
];

export const landingRoutingProviders: any[] = [
];

export const landingrouting: ModuleWithProviders = RouterModule.forChild(landingRoutes);