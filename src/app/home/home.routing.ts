import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { FoodSearchComponent } from './food/food.component';
import { EntityTypeComponent } from './entity/entity.component';
import {PatnerComponent } from './patner/patner.component';
// import {EntitySearchComponent } from './entitysearch/entitysearch.component';


export const homeRoutes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent }
  ] },
  //{ path: '', component: LandingComponent },
  { path: 'login',component: LoginComponent },
  { path:  'entitytype', component :EntityTypeComponent},
  { path:  'patner', component :PatnerComponent},
  // { path:  'entitysearch', component :EntitySearchComponent}
];

export const homeRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(homeRoutes);