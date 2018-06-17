import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { FoodSearchComponent } from './food/food.component';
import { RestaurentConfirmationComponent } from './RestaurentConfirmation/restaurentconfirmation.component';

export const homeRoutes: Routes = [
  { path: '',component: HomeComponent,
  children: [
    { path: '', loadChildren: './landing/landing.module#LandingModule'},
    { path: 'restaurentConfirmation', component: RestaurentConfirmationComponent},
  ] },
];

export const homeRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(homeRoutes);