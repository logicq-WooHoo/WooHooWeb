import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
  { path:  '', component :AdminComponent,
    children: [
    { path: '', loadChildren: './hotelregistration/hotelregistration.module#HotelRegistrationModule'}
  ] 
}
  
];

export const adminRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(adminRoutes);