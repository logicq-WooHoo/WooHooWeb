import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component'
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';

export const appRoutes: Routes = [

  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'login',component: LoginComponent },
  { path:  'hotelregistration', component :HotelregistrationComponent}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);